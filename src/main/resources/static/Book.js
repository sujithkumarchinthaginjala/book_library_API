const apiBaseUrl = "http://localhost:8080/api/books";

// Fetch and display books
function fetchBooks() {
    fetch(apiBaseUrl)
        .then(response => response.json())
        .then(data => {
            const bookList = document.getElementById("book-list");
            bookList.innerHTML = "";
            data.forEach(book => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <strong>${book.title}</strong> by ${book.author} (ISBN: ${book.isbn})
                    <button onclick="editBook(${book.id})">Edit</button>
                    <button onclick="deleteBook(${book.id})">Delete</button>
                `;
                bookList.appendChild(div);
            });
        });
}

// Show add/edit form
function showAddBookForm() {
    document.getElementById("book-form").style.display = "block";
}

// Hide add/edit form
function hideAddBookForm() {
    document.getElementById("book-form").style.display = "none";
    document.getElementById("bookForm").reset();
}

// Save book (add or update)
document.getElementById("bookForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const id = document.getElementById("bookId").value;
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;
    const publisher = document.getElementById("publisher").value;

    const method = id ? "PUT" : "POST";
    const url = id ? `${apiBaseUrl}/${id}` : apiBaseUrl;

    fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author, isbn, publisher })
    }).then(() => {
        fetchBooks();
        hideAddBookForm();
    });
});

// Edit book
function editBook(id) {
    fetch(`${apiBaseUrl}/${id}`)
        .then(response => response.json())
        .then(book => {
            document.getElementById("bookId").value = book.id;
            document.getElementById("title").value = book.title;
            document.getElementById("author").value = book.author;
            document.getElementById("isbn").value = book.isbn;
            document.getElementById("publisher").value = book.publisher;
            showAddBookForm();
        });
}

// Delete book
function deleteBook(id) {
    if (confirm("Are you sure you want to delete this book?")) {
        fetch(`${apiBaseUrl}/${id}`, { method: "DELETE" })
            .then(() => fetchBooks());
    }
}

// Initial fetch
fetchBooks();
