# 🛡️ Login System Backend (MERN + Redis + JWT)

This is the **backend** portion of a full-stack MERN application that handles **user authentication**, including **registration**, **login**, **profile fetching**, **profile update**, and **JWT-based session management** with **Redis**.

> ✅ Built using Node.js, Express.js, MongoDB, Mongoose, JWT, Redis, and Bcrypt.

---

## 🔗 Project Structure
loginSyatem-BE/
│
├── Controllers/ # Auth and user controller logic
├── Database/ # MongoDB and Redis connection
├── Middlewares/ # JWT authentication middleware
├── Models/ # Mongoose user schema
├── Routers/ # API routes (auth, user)
├── .env # Environment variables
├── index.js # Entry point
└── package.json # Dependencies and scripts

## ⚙️ Features

- ✅ User Registration with validation
- ✅ Password hashing using Bcrypt
- ✅ JWT Token generation for login
- ✅ Protected routes with token-based auth
- ✅ Redis storage for JWT session/token
- ✅ Profile fetch and update
- ✅ Mongoose schema validation
- ✅ MongoDB Atlas and Upstash Redis compatible

---

## 🚀 Installation & Setup

### 1. Clone the repo

```bash
git clone https://github.com/SwaminathanVK/loginSyatem-BE.git
cd loginSyatem-BE

2. Install dependencies
npm install

3. Create .env file
env

PORT=5000
MONGODB=<your-mongodb-uri>
JWT_SECRET=your_jwt_secret_key
REDIS_URL=redis://default:<password>@<host>:6379

📦 Available Scripts
Start in dev mode
bash

npm run dev

🧪 API Endpoints
🔐 Auth Routes (/api/auth)
Method	Endpoint	Description
POST	/register	Register new user
POST	/login	Login user & return JWT

👤 User Routes (/api/user)
Method	Endpoint	Description
GET	/profile	Get logged-in user profile
PUT	/profile	Update logged-in user data

🔐 Authentication Flow
On login, a JWT is issued and stored in Redis.

All protected routes validate the token using the middleware.

Tokens expire after 1 day (expiresIn: '1d').

✅ Tech Stack
Backend: Node.js, Express.js

Database: MongoDB (Atlas)

Auth: JWT + Bcrypt

Session Store: Redis (Upstash)

Validation: Mongoose schema

📌 Author
Swaminathan VK
