# **Book Library API**

This is a Book Library API built using Spring Boot. The API allows users to manage books, authors, and categories in a library system.

## **Table of Contents**

1. Prerequisites
2. Setup Instructions
3. Running the Application
4. API Endpoints
5. Testing
6. Troubleshooting

---

## **Prerequisites**

Before setting up the project, make sure you have the following installed:

- Java 17 or later
- Maven 3.8.1 or later
- MySQL (or any other database system configured in `application.properties`)
- Postman or cURL for testing API endpoints (optional)

---

## **Setup Instructions**

### **Step 1: Clone the Repository**

Clone the Book Library API repository to your local machine.
# **Step 1: Clone the Repository**
```
git clone https://github.com/yourusername/book-library-api.git
cd book-library-api
```

### **Step 2: Database Setup**
```
CREATE DATABASE library;
```
Create a new database for the application in MySQL and update the database connection settings in the configuration file.
```
# Update the database connection settings in `src/main/resources/application.properties`

spring.datasource.url=jdbc:mysql://localhost:3306/booklibrary
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```
---

# **Step 3: Install Dependencies**
```
mvn clean install
```

# **Step 4: Running the Application**
```
mvn spring-boot:run
```
### **Start the Application**

Run the application locally to start the server and confirm it's running on port 8080.
```
Tomcat started on port(s): 8080 (http) with context path '/Book.html and /User.html'
```
---
# **Step 5: Checking API Endpoints**
## **API Endpoints**

### **Book**
```
- `GET /api/Book` - Retrieve a list of all books.
- `GET /api/Book/{id}` - Retrieve a book by its ID.
- `POST /api/Book` - Add a new book to the library.
- `PUT /api/Book/{id}` - Update an existing book.
- `DELETE /api/Book/{id}` - Delete a book by its ID.
```
### **Sample API Request for Adding a New Book**
```
POST /api/Book
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "isbn": "124352",
  "publisher": "own_publish"
}
```
---

### **User**
```
- `GET /api/User` - Retrieve a list of all Users.
- `GET /api/User/{id}` - Retrieve a User by ID.
- `POST /api/User` - Add a new User to the library.
- `PUT /api/User/{id}` - Update an existing User.
- `DELETE /api/User/{id}` - Delete a User by its ID.
```
### **Sample API Request for Adding a New User**
```
POST /api/User
Content-Type: application/json

{
  "id": "1",
  "name": "F. Scott Fitzgerald",
  "role": " librarian"
  "email": "demo123@gmail.com",
  "password": "new_password123"
}
```
---
# **Step 6: Testing**

### **Unit Tests**

Run unit tests for the project and view the test results.
```
mvn test
```
Results will be displayed in the console. Detailed reports are generated in the target/test-classes directory.
### **Integration Tests**

Run integration tests to verify functionality across the application.
```
mvn verify
```
This will generate integration test reports in target/failsafe-reports.

---
### **Access Swagger UI**
Once the application is running, you can access the Swagger UI by visiting the following URL:
```
http://localhost:8080/swagger-ui/index.html
```
Swagger will display all available endpoints with detailed information and allow you to test them interactively.

---
## **Troubleshooting**

- **404 Not Found Error**: Ensure the API is running and that you are accessing the correct endpoints. Verify the URL path.
- **Database Connection Issues**: Ensure your MySQL server is running and the credentials in `application.properties` are correct.
- **Dependency Issues**: Run `mvn clean install` to resolve missing dependencies.
