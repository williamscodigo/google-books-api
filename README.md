# GOOGLE Book Search (API) ![Static Badge](https://img.shields.io/badge/license-MIT-blue)

## Description

The GOOGLE Book Search (API) is a web application that allows users to search for books using the Google Books API and save their favorite books to a personal list. The application is built with the MERN stack (MongoDB, Express.js, React, and Node.js) and has been refactored to use GraphQL with Apollo Server, replacing the original RESTful API. It includes user authentication, enabling personalized book lists for each account.

## Features

- Search for Books: Users can search for books by title, author, or keyword using the Google Books API.

- User Authentication: Sign up and log in to save personalized book lists.

- Save Books: Logged-in users can save books to their account.

- View Saved Books: Users can view and manage their saved books, including removing books they no longer want.

- GraphQL API: Refactored from RESTful API to GraphQL with Apollo Server for efficient data handling.

## Technologies Used

- Front End: React, Apollo Client, Tailwind CSS

- Back End: Node.js, Express.js, Apollo Server, GraphQL

- Database: MongoDB Atlas

- Deployment: Render with MongoDB Atlas integration

## Installation

You can run this project in your local evironment, follow these steps:
1. Clone the Repository:

```bash
   git clone git@github.com:williamscodigo/google-books-api.git

```

2. Navigate to the Project Directory:

```bash
    cd google-books-api
```

3. Install Dependencies:

```bash
    npm install
```

4. Navigate to server folder, add and modify .env file

```
    MONGODB_URI='mongodb://127.0.0.1:27017/googlebooks'
    JWT_SECRET_KEY='somesecret1'
```

5. Build the application:

```bash
    npm run build
```

6. Start the application:

```bash
    npm run develop
```

## Usage

- Navigate to the application in your browser at http://localhost:3000 (if running locally).

- Use the search bar to find books by title, author, or keyword.

- Log in or sign up to save books to your account.

- View and manage your saved books on the "Saved Books" page.

- Log out when finished.

## Deployment

The application is deployed on Render and can be accessed at:
Live Application URL

The repository is hosted on GitHub at:
GitHub Repository URL


## License
[https://opensource.org/license/mit](https://opensource.org/license/mit)


## Questions
GitHub Link: [https://github.com/williamscodigo](https://github.com/williamscodigo)