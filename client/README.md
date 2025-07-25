
# Week 8 Capstone – MERN Event & Task Manager

A full-stack MERN application for managing events, tasks, notifications, and users with authentication and documentation support.

## 🌐 Tech Stack

- **Frontend:** React (Vite + Tailwind CSS + TypeScript)
- **Backend:** Node.js + Express.js + MongoDB
- **API Docs:** Swagger
- **Deployment:** Vercel (Frontend) & Render (Backend)

---

## 📁 Project Structure

```
/week-8-capstone
├── client/         # React frontend (Lovable AI generated)
├── server/         # Express backend (DeepSeek generated)
└── README.md       # Project documentation
```

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the Repository

```bash
git clone <your-project-repo>
cd week-8-capstone
```

### 2. Start the Backend

```bash
cd server
npm install
# Create a .env file
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
npm run dev
```

### 3. Start the Frontend

```bash
cd ../client
npm install
# Optional: add proxy to package.json
# "proxy": "http://localhost:5000"
npm run dev
```

Access your frontend at: `http://localhost:5173`  
Backend runs on: `http://localhost:5000`

---

## 🔌 API Routes (Backend)

Base URL: `/api`

| Route                  | Description             |
|------------------------|-------------------------|
| `POST /auth/login`     | User login              |
| `POST /auth/register`  | User registration       |
| `GET /users/`          | Fetch users             |
| `GET /events/`         | Event listing           |
| `POST /events/`        | Create event            |
| `GET /tasks/`          | Task listing            |
| `POST /tasks/`         | Create task             |
| `GET /notifications/`  | User notifications      |

Swagger docs available at `/api-docs` (e.g. http://localhost:5000/api-docs)

---

## 🔒 Environment Variables

### Backend (`server/.env`)
```
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/<dbname>
```

### Frontend (`client/.env`)
```
VITE_API_URL=https://<your-render-backend>.onrender.com
```

In React, use:
```ts
const API = import.meta.env.VITE_API_URL;
```

---

## ☁️ Deployment

### Backend on Render

1. Push `/server` to GitHub
2. Go to [https://render.com](https://render.com)
3. New > Web Service → Connect repo
4. Set:
   - Build: `npm install`
   - Start: `node server.js`
   - Environment: Add `MONGO_URI`
5. Deploy and get URL like: `https://your-api.onrender.com`

---

### Frontend on Vercel

1. Push `/client` to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Import GitHub repo
4. Set `VITE_API_URL` to your Render backend URL
5. Deploy

Your frontend will be live on `https://your-project.vercel.app`

---

## 🧪 Testing

- Backend tests are located in `/server/tests`
- Use `npm test` to run backend tests
- Manual testing can be done via Swagger UI or Postman

---

## 📸 Screenshots & Demo

*(Add screenshots of the UI and API docs if available)*

---

## 🙌 Authors & Acknowledgements

- Frontend generated via Loveable AI
- Backend scaffolded using DeepSeek
- Integrated and documented by Yvonne Njoroge

---

## 🛠️ Future Improvements

- Add user roles (admin, member)
- Real-time updates via Socket.io
- PWA support for mobile usage

---
