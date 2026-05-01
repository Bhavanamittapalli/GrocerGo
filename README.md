# 🛒 GrocerGo - Premium Full-Stack Grocery Platform

GrocerGo is a modern, feature-rich MERN stack application designed for seamless grocery shopping and efficient inventory management. It features a premium user interface, a robust recruitment system, and real-time administrative controls.

![Banner](https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)

## 🚀 Key Features

### 🛍️ For Customers
- **Extensive Catalog**: Over 34+ products across 7 categories (Vegetables, Fruits, Dairy, Drinks, etc.).
- **Smart Units**: Support for various quantity units (grams, kg, ml, liters, pieces).
- **Reviews & Ratings**: Share feedback and see star ratings from other shoppers.
- **Secure Checkout**: Integrated with Stripe for online payments and COD (Cash on Delivery) support.
- **Real-Time Tracking**: Monitor order status from "Packing" to "Delivered".

### 💼 Career Portal
- **Job Board**: Publicly view open roles in the company.
- **Direct Application**: Apply for roles via an integrated form with instant admin notification.

### 🛠️ For Admin (Seller Panel)
- **Inventory Management**: Add, update, and manage products with high-quality local images.
- **Order Management**: Process customer orders and update shipping statuses in real-time.
- **Recruitment Dashboard**: Review and manage job applications from one central location.
- **Data Persistence**: Built-in persistent storage fallback to ensure data safety even without cloud DB.

---

## 🛠️ Tech Stack

**Frontend:**
- React.js (Vite)
- Tailwind CSS
- React Context API (State Management)
- React Router DOM

**Backend:**
- Node.js & Express.js
- MongoDB (Mongoose ODM)
- Cloudinary (Image Hosting)
- Stripe (Payment Gateway)
- MongoDB Memory Server (Persistent Fallback)

---

## 📦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account (optional, fallback provided)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/grocergo.git
   cd grocergo
   ```

2. **Backend Setup**
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `server` directory:
   ```env
   MONGODB_URI="your_mongodb_uri"
   STRIPE_SECRET_KEY="your_stripe_secret"
   STRIPE_WEBHOOK_SECRET="your_webhook_secret"
   CLOUDINARY_CLOUD_NAME="your_cloud_name"
   CLOUDINARY_API_KEY="your_api_key"
   CLOUDINARY_API_SECRET="your_api_secret"
   SELLER_EMAIL="admin@grocergo.com"
   SELLER_PASSWORD="admin123"
   ```

3. **Frontend Setup**
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

1. **Start Backend**
   ```bash
   cd server
   npm run dev
   ```

2. **Start Frontend**
   ```bash
   cd client
   npm run dev
   ```

The app will be available at `http://localhost:5173`.

---

## 📂 Project Structure

```
GrocerGo/
├── client/              # React frontend (Vite)
│   ├── src/
│   │   ├── assets/      # Local images & icons
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Public & Private pages
│   │   └── context/     # Global state
├── server/              # Node.js backend
│   ├── configs/         # DB & Cloudinary configs
│   ├── controllers/     # Business logic
│   ├── models/          # Mongoose schemas
│   └── routes/          # API endpoints
└── README.md
```

---

## 📞 Support & Contact

- **Store Address**: 507003 VDO's Colony, Telangana Khammam, India
- **Helpline**: +91 098798653
- **Email**: admin@grocerGo
- **Availability**: Mon-Sat (9:00 AM to 5:00 PM)

---

## 📄 License
This project is licensed under the MIT License.

---
*Created with ❤️ by Antigravity AI*
