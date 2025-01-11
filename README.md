# BuyBusy E-Commerce Web Application

BuyBusy is a sleek and intuitive e-commerce web application built with ReactJS. It empowers users to browse products, manage their shopping cart, and complete purchases seamlessly. The app leverages Firebase for real-time CRUD operations, ensuring a dynamic and responsive user experience. Explore, shop, and enjoy a modern shopping journey with BuyBusy!

---

## Features

- User Authentication (Sign Up, Login, Logout)
- Browse and Search Products
- Add/Remove Items from Cart
- View and Manage Orders
- Protected Routes for Secure Access

## Project Structure

```
project-root/
├── public/
├── src/
│   ├── components/
│   │   └── Navbar.js
│   │   └── Sidebar.js
│   │   └── Purchase.js
│   ├── contexts/
│   │   ├── AuthContext.js
│   │   ├── CartContext.js
│   │   └── ProductsContext.js
│   ├── pages/
│   │   ├── CartPage.js
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   ├── OrdersPage.js
│   │   ├── ProductCard.js
│   │   └── RegisterPage.js
│   ├── services/
│   │   ├── firebaseConfig.js
│   │   └── ProtectedRoute.js
│   │   └── AuthUser.js
│   ├── App.css
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Firebase Setup

1. Create a Firebase project in [Firebase Console](https://console.firebase.google.com/).
2. Add a new web app to your Firebase project.
3. Copy the Firebase configuration and replace the contents in `firebaseConfig.js`.
4. Enable Firebase Authentication and Firestore Database in your Firebase project settings.

## Tech Stack

- **Frontend**: ReactJS, React Router
- **Backend**: Firebase Authentication, Firestore (Database)
- **Styling**: CSS
- **Others**: React Toastify, React Spinners

## Components Overview

### `CartPage.js`

Manages the shopping cart, allowing users to view, update, and remove items. Displays total price and integrates with the `Purchase` component.

### `HomePage.js`

The landing page that displays products fetched from Firebase. Includes a search bar and `Sidebar` for filtering.

### `LoginPage.js`

Allows users to log in using their email and password. Displays error messages for failed login attempts.

### `RegisterPage.js`

Handles user registration. Collects user details and creates a new account using Firebase Authentication.

### `OrdersPage.js`

Displays the user's order history fetched from local storage. Each order includes details such as date, items, and total price.

### `ProductCard.js`

Displays individual product details and an "Add to Cart" button. Prevents adding items to the cart if the user is not logged in.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nil22esh/buy-busy-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd buybusy
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

---

## Contributing

Contributions are welcome! Please follow these steps:

---
