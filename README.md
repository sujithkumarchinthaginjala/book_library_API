# Book Library API

This is a Book Library API built using **Spring Boot**. The API allows users to manage books, authors, and categories in a library system.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Setup Instructions](#setup-instructions)
3. [Running the Application](#running-the-application)
4. [API Endpoints](#api-endpoints)
5. [Testing](#testing)
6. [Troubleshooting](#troubleshooting)
7. [Deployment Guide](#deployment-guide)

---

## Prerequisites

Before setting up the project, make sure you have the following installed:

- **Java** 17 or later
- **Maven** 3.8.1 or later
- **MySQL** (or any other database system configured in `application.properties`)
- **Postman** or **cURL** for testing API endpoints (optional)

---

## Setup Instructions

### 1. Clone the Repository

Clone the Book Library API repository to your local machine:

```bash
git clone https://github.com/yourusername/book-library-api.git
cd book-library-api
-----------------------------------------------------------------------------------------
### Database Setup
1. Create a new database for the application in MySQL:
   ```sql
   CREATE DATABASE booklibrary;
2. Update the database connection settings in the src/main/resources/application.properties file:

application properties
spring.datasource.url=jdbc:mysql://localhost:3306/booklibrary
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
------------------------------------------------------------------------------------------------
### Step 3: Install Dependencies
Ensure all required dependencies are installed by running:
```bash
mvn clean install
---------------------------------------------------------------------------------------------
### Running the Application

#### Start the Application
To run the Book Library API locally, execute:
```bash
mvn spring-boot:run

The application will start on port 8080 by default. You should see output similar to:
Tomcat started on port(s): 8080 (http) with context path '/Book.html and /User.html'
--------------------------------------------------------------------------------------------------
Access the Application
Once running, visit the API base URL in your browser or API client:
http://localhost:8080
----------------------------------------------------------------------------------------------------
API Endpoints
Books
GET /api/books - Retrieve a list of all books.
curl -X GET http://localhost:8080/api/books

GET /api/books/{id} - Retrieve a specific book by its ID.
curl -X GET http://localhost:8080/api/books/1
----------------------------------------------------------------------------------------------
POST /api/books - Add a new book.
Request Body (JSON):
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "category": "Fiction",
  "isbn": "9780743273565"
}
Command:
curl -X POST -H "Content-Type: application/json" -d '{"title":"The Great Gatsby","author":"F. Scott Fitzgerald","category":"Fiction","isbn":"9780743273565"}' http://localhost:8080/api/books

PUT /api/books/{id} - Update an existing book by its ID.
Request Body (JSON):

{
  "title": "The Great Gatsby (Updated)",
  "author": "F. Scott Fitzgerald",
  "category": "Classic Fiction",
  "isbn": "9780743273565"
}
Command:
curl -X PUT -H "Content-Type: application/json" -d '{"title":"The Great Gatsby (Updated)","author":"F. Scott Fitzgerald","category":"Classic Fiction","isbn":"9780743273565"}' http://localhost:8080/api/books/1
------------------------------------------------------------------------------------------------------------------------------------------------------
Authors
GET /api/authors - Retrieve a list of all authors.
curl -X GET http://localhost:8080/api/authors

GET /api/authors/{id} - Retrieve an author by their ID.
curl -X GET http://localhost:8080/api/authors/1

Categories
GET /api/categories - Retrieve a list of all categories.
curl -X GET http://localhost:8080/api/categories

GET /api/categories/{id} - Retrieve a category by its ID.
bash
Copy code
curl -X GET http://localhost:8080/api/categories/1
------------------------------------------------------------------------------------------------------------------------------------------------------------------
###Testing
Run Unit Tests
Execute the following command to run the unit tests:

bash
mvn test
Results will be displayed in the console. Detailed reports are generated in the target/test-classes directory.

Run Integration Tests
Run the integration tests using:

mvn verify
This will generate integration test reports in target/failsafe-reports.
------------------------------------------------------------------------------------------------------------------------------------------------------------------
###Troubleshooting
Common Issues and Solutions:
404 Not Found Error:

Ensure the API is running and you are accessing the correct endpoints.
Database Connection Issues:

Verify that the MySQL server is running and the credentials in application.properties are correct.
Dependency Issues:

Run mvn clean install to ensure all dependencies are downloaded and installed.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
###Deployment Guide
To deploy the Book Library API:

Build the application using Maven:

bash
mvn clean install
mvn package
This creates a JAR file in the target directory (e.g., book-library-api-1.0-SNAPSHOT.jar).

Deploy the JAR file on a server:
java -jar target/book-library-api-1.0-S






