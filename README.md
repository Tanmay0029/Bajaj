# 📌 VIT Full Stack Question Paper – REST API Solution - Bajaj Finserv Q1

This is a **Node.js + Express** implementation of the Full Stack question paper task from VIT.  
The API exposes a single endpoint (`POST /bfhl`) that accepts an array and returns filtered/processed data as per the problem statement.

---

## 🚀 Features
- Accepts a JSON array containing numbers, alphabets, and special characters.
- Returns:
  - ✅ Success status
  - ✅ User ID in format `full_name_ddmmyyyy`
  - ✅ Email & Roll Number
  - ✅ Odd numbers
  - ✅ Even numbers
  - ✅ Alphabets (uppercase)
  - ✅ Special characters
  - ✅ Sum of numbers (as string)
  - ✅ Concatenated alphabets (reverse order, alternating caps)

---

## 🛠 Tech Stack
- **Node.js**
- **Express.js**
- **CORS**
- **Dotenv** (for environment variables)

---

## 📂 Project Structure
```

.
├── server.js        # Main Express app
├── package.json     # Dependencies & scripts
├── .env             # User details (not committed to Git)
└── README.md

````

---

## ⚙️ Setup Instructions

### 1. Clone Repo
```bash
git clone https://github.com/<your-username>/vit-bfhl-api.git
cd vit-bfhl-api
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file:

```env
FULL_NAME=john_doe       # lowercase with underscores
DOB_DDMMYYYY=17091999    # ddmmyyyy format
EMAIL=john@xyz.com
ROLL_NUMBER=ABCD123
PORT=3000
```

### 4. Run Locally

```bash
npm run dev
```

Server starts at:

```
http://localhost:3000
```

---

## 🧪 API Usage

### Endpoint

```
POST /bfhl
```

### Request Example

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

### Response Example

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

## 🔗 Deployment

You can deploy this API on:

* [Render](https://render.com)
* [Railway](https://railway.app)
* [Vercel](https://vercel.com)
* [Heroku](https://heroku.com)

### Example for Render

1. Push repo to GitHub.
2. Create a new **Web Service** on Render → connect repo.
3. Add Environment Variables (`FULL_NAME`, `DOB_DDMMYYYY`, `EMAIL`, `ROLL_NUMBER`).
4. Start Command:

   ```bash
   npm start
   ```
5. Your endpoint will be available at:

   ```
   https://<your-app-name>.onrender.com/bfhl
   ```

---

## ✅ Health Check

```
GET /
```

Response:

```json
{ "status": "ok", "route": "/bfhl" }
```

---

## 📌 Notes

* All numbers in response are returned as **strings**.
* `concat_string` is built by reversing all alphabets and applying **alternating caps**.
* Errors and invalid inputs return a safe fallback response with `"is_success": false`.

---

## ✨ Author

Developed by **Vinayak Raina**
📧 Email: `vinayak.raina2022@vitstudent.ac.in`
🎓 Roll No: `22BCE2052`
```
