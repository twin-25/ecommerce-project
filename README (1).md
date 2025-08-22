# 🛒 E-commerce Project

A full-stack **E-commerce web application** built with **React (Vite)** for the frontend and **Node.js (Express + SQLite)** for the backend.  
The project demonstrates modern web development practices, including state management, REST APIs, and responsive UI.  

---

## 🚀 Features
- User-friendly **product catalog** with images and ratings  
- **Shopping cart** functionality (add, update, remove items)  
- **Order tracking** page with delivery progress  
- **Responsive UI** for desktop and mobile  
- Backend with **SQLite database** for product and order management  
- REST API with **Express.js**  

---

## 🛠️ Tech Stack
**Frontend (ecommerce-project):**
- React (with Vite)  
- React Router  
- Axios  
- Tailwind CSS / Custom CSS  

**Backend (ecommerce-backend):**
- Node.js  
- Express.js  
- SQLite (lightweight DB)  

---

## 📂 Project Structure
```
react-project/
│── ecommerce-project/    # Frontend (React + Vite)
│── ecommerce-backend/    # Backend (Node + Express + SQLite)
│── package.json          # Root metadata
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/twin-25/ecommerce-project.git
cd ecommerce-project
```

### 2. Frontend Setup
```bash
cd ecommerce-project
npm install
npm run dev
```
Frontend will run on [http://localhost:5173](http://localhost:5173).

### 3. Backend Setup
```bash
cd ../ecommerce-backend
npm install
npm start
```
Backend runs on [http://localhost:5000](http://localhost:5000).

---

## 📖 Usage
1. Open the frontend in your browser.  
2. Browse products, add them to your cart.  
3. Proceed to checkout and track your order.  

---

## 🔧 Configuration
- Backend uses `database.sqlite` for storing product & order data.  
- You can reset DB or seed default data from `defaultData/`.  
- Environment variables (if any) can be set in a `.env` file.  

---

## 🧪 Testing
Frontend tests are set up with **Vitest**:  
```bash
cd ecommerce-project
npm test
```

---

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repo and submit a pull request.  

---

## 📜 License
This project is licensed under the **MIT License**.  
