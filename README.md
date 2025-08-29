---

# 🚀 VIT Full Stack – REST API (Bajaj Finserv Q1)

A simple **Node.js + Express** REST API solution for the VIT Full Stack question paper task.
The API processes an input array and returns categorized data (numbers, alphabets, special characters, etc.).

---

## 📖 Features

* Accepts an array of values in JSON format.
* Returns:

  * **Status** (success/failure)
  * **User ID** in `full_name_ddmmyyyy` format
  * **Email & Roll Number**
  * **Odd Numbers** (as strings)
  * **Even Numbers** (as strings)
  * **Alphabets** (uppercase only)
  * **Special Characters**
  * **Sum of Numbers** (string)
  * **Concatenated String** (alphabets reversed + alternating caps)

---

## 🛠 Tech Stack

* Node.js
* Express.js
* CORS
* Dotenv (environment variables)

---

## 📂 Folder Structure

```
.
├── server.js        # Express application
├── package.json     # Dependencies & scripts
├── .env             # User details (ignored in Git)
└── README.md        # Documentation
```

---

## ⚙️ Setup Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/vit-bfhl-api.git
cd vit-bfhl-api
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file:

```env
FULL_NAME=john_doe
DOB_DDMMYYYY=17091999
EMAIL=john@xyz.com
ROLL_NUMBER=ABCD123
PORT=3000
```

### 4️⃣ Run Locally

```bash
npm run dev
```

Server will start at:
👉 `http://localhost:3000`

---

## 🧪 API Reference

### 🔹 POST `/bfhl`

**Request Body**

```json
{ "data": ["a", "1", "334", "4", "R", "$"] }
```

**Response Example**

```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

---

### 🔹 GET `/`

**Response**

```json
{ "status": "ok", "route": "/bfhl" }
```

---

## 🌐 Deployment Options

You can host this API on:

* [Render](https://render.com)
* [Railway](https://railway.app)
* [Vercel](https://vercel.com)
* [Heroku](https://heroku.com)

**Render Example:**

1. Push repo → GitHub
2. Create new Web Service → Connect repo
3. Add environment variables
4. Start command:

   ```bash
   npm start
   ```
5. API endpoint:

   ```
   https://<your-app>.onrender.com/bfhl
   ```

---

## 📌 Notes

* All numbers are returned as **strings**.
* `concat_string` = reversed alphabets with **alternating caps**.
* Invalid inputs return a safe fallback with `"is_success": false`.

---

## 👨‍💻 Author

**Tanmay Agrawal**
📧 `tanmay.agrawal2022@vitstudent.ac.in`
🎓 Roll No: `22BCE2680`

---
