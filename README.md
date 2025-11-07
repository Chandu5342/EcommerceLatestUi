# VibeCart  Frontend

This is the **frontend application** for the  **E-Commerce Cart Project**, built using **React.js (Vite) and Bootstrap**.
It interacts with the backend API to handle products, user authentication, cart management, and checkout functionality.

---

## ✨ Features

### **Authentication**

• User registration and login using JWT
• Persistent authentication using localStorage
• Protected routes accessible only to logged-in users

### **Product Management**

• Fetch and display all products in a responsive grid
• Add new products
• Update or delete products 
• Integrated with backend product APIs

### **Cart Management**

• Add products to the cart with quantity selection
• View all cart items with total amount
• Remove items from the cart
• Cart data linked to logged-in user

### **Checkout**

• Simple checkout form (name, email)
• Mock checkout confirmation and receipt with timestamp
• Reset cart after successful checkout

### **UI / UX**

• Responsive design with Bootstrap
• Clean and attractive layout
• Toast notifications for user actions

---

## 📁 Folder Structure

```
frontend/
│── public/
│── src/
│ ├── api/ → API files (authApi.js, productApi.js, cartApi.js, checkoutApi.js, api.js)
│ ├── components/ → Shared components (Navbar, ProductCard, CartModal)
│ ├── context/ → React Context for user authentication and cart state
│ ├── pages/ → App pages (Login, Register, Products, Cart, Checkout)
│ ├── App.jsx → Main app component
│ └── main.jsx → Application entry point
│── .env → Environment configuration
│── package.json
```

---

##  Tech Stack

* **React.js (Vite)** – Frontend framework
* **React Router DOM** – Client-side routing
* **Axios** – HTTP requests
* **React Context API** – Global state for auth and user data
* **Bootstrap 5** – UI styling and layout
* **JWT** – Token-based authentication

---

**Pages / Modules**

**Login / Register** – Handles user authentication and JWT storage
**Products** – Displays product grid ,insert ,edit and delelte a product and Add to Cart functionality
**Cart** – Shows user’s selected items, total, and allows item removal
**Checkout** – Confirms checkout with mock receipt and total

---

##  Backend Connection

* Update the API base URL inside `.env` file:

```env
VITE_API_URL=https://ecommercelatestserver.onrender.com/api
```

* The frontend consumes the API endpoints documented in the backend README.

---

## 🧪 Test Accounts

| Email                                         | Password |
| --------------------------------------------- | -------- |
| [chandu@gmail.com](mailto:chandu@gmail.com)   | 123456   |
| [honey@gmail.com](mailto:honey@gmail.com)     | 123456   |

---

## 🚀 Run Locally

```bash
git clone https://github.com/Chandu5342/EcommerceLatestUi.git
cd frontend
npm install
npm run dev
```

* The app will run on: `http://localhost:5173`
---

## 🌍 Live Frontend

* [Event Swap Management System Frontend (Vercel)](https://ecommerce-latest-ui.vercel.app/)

---
---

      ## 🖼️ Screenshots

   <img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/9671015f-3cd0-42ab-b27b-471b98e76ab9" />
   <img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/ffcdedfb-5dd2-4320-8005-fe8b483711c0" />
   <img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/36f885f2-2cb6-4be8-b376-d2d52b085045" />
   <img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/f8526c29-0368-4e45-af67-65eb89634e89" />









```



