const userApiBaseUrl = "http://localhost:8080/api/users";

// Fetch and display users
function addUsers() {
    fetch(userApiBaseUrl)
        .then(response => response.json())
        .then(data => {
            const userList = document.getElementById("user-list");
            userList.innerHTML = "";
            data.forEach(user => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <strong>${user.name}</strong> Email: ${user.email}  <strong>Role: ${user.role}</strong>
                    <button onclick="editUser(${user.id})">Edit</button>
                    <button onclick="deleteUser(${user.id})">Delete</button>
                `;
                userList.appendChild(div);
            });
        });
}

// Show add/edit form
function showAddUserForm() {
    document.getElementById("user-form").style.display = "block";
}

// Hide add/edit form
function hideAddUserForm() {
    document.getElementById("user-form").style.display = "none";
    document.getElementById("userForm").reset();
}

// Save user (add or update)
document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const id = document.getElementById("userId").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
	const role = document.getElementById("role").value;
	

    const method = id ? "PUT" : "POST";
    const url = id ? `${userApiBaseUrl}/${id}` : userApiBaseUrl;

    fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role})
    }).then(() => {
        addUsers();
        hideAddUserForm();
    });
});

// Edit user
function editUser(id) {
    fetch(`${userApiBaseUrl}/${id}`)
        .then(response => response.json())
        .then(user => {
            document.getElementById("userId").value = user.id;
            document.getElementById("name").value = user.name;
            document.getElementById("email").value = user.email;
            document.getElementById("password").value = user.password;
			document.getElementById("role").value = user.role;
            showAddUserForm();
        });
}

// Delete user
function deleteUser(id) {
    if (confirm("Are you sure you want to delete this user?")) {
        fetch(`${userApiBaseUrl}/${id}`, { method: "DELETE" })
            .then(() => addUsers());
    }
}

// Initial fetch
addUsers();



