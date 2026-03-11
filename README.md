# Users & Posts Viewer

A simple JavaScript project that fetches users and their posts from an API and displays them dynamically on the page.

## 📌 Project Idea
This project uses the public API from **JSONPlaceholder** to:
- Fetch a list of users.
- Create a button (tab) for each user.
- When clicking a user tab, the posts related to that user are fetched and displayed.

The goal of this project is to practice:
- Working with APIs
- Using `fetch`
- Async / Await
- DOM manipulation
- Event handling in JavaScript

## 🚀 Features
- Fetch users from an external API
- Dynamically create tabs for each user
- Fetch posts for the selected user
- Display posts without reloading the page
- Clear previous posts before showing new ones

## 🛠 Technologies Used
- HTML
- CSS
- JavaScript (ES6)
- Fetch API

## 📡 API Used
This project uses the free testing API:

- https://jsonplaceholder.typicode.com/users
- https://jsonplaceholder.typicode.com/posts

## 📂 How It Works

1. The `getUsers()` function fetches users from the API.
2. A button (tab) is created for each user.
3. When a tab is clicked:
   - The user ID is retrieved.
   - `getPosts(userId)` is called.
4. The posts related to that user are fetched and displayed on the page.

## ▶ Example Workflow

1. Page loads
2. Users are fetched
3. Buttons appear with user names
4. Click a user
5. Posts of that user appear

## 📦 Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/your-repository.git
