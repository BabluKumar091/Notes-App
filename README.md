# 📝 Notes App

A full-stack Notes App where users can register and log in securely using JWT authentication. Once logged in, users can create, edit, and delete their personal notes — with each user only seeing their own data. The app is built with React on the frontend, Node.js + Express on the backend, and MongoDB Atlas as the live database, deployed on Netlify and Railway.

---

## Tech Stack

- **Frontend:** React + Tailwind CSS (Vite)
- **Backend:** Node.js + Express
- **Database:** MongoDB Atlas (Mongoose)
- **Auth:** JWT (7-day expiry)

---

## Folder Structure

```
notes-app/
├── client/      # React frontend
└── server/      # Express backend
```

---

## Local Setup

### Prerequisites

- Node.js v18+
- MongoDB Atlas account (free tier)
- Git

---

### 1. Clone the repo

```bash
git clone https://github.com/BabluKumar091/notes-app.git
cd notes-app
```

---

### 2. Setup the Server

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_key
CLIENT_ORIGIN=http://localhost:5173
```

Run the server:

```bash
npm run dev
```

Server will start at `http://localhost:5000`

---

### 3. Setup the Client

```bash
cd client
npm install
```

Create a `.env` file inside `client/`:

```env
VITE_API_URL=http://localhost:5000
```

Run the client:

```bash
npm run dev
```

Client will start at `http://localhost:5173`

---

## Environment Variables

### server/.env

| Variable        | Description                          |
|----------------|--------------------------------------|
| `PORT`          | Port the Express server runs on      |
| `MONGO_URI`     | MongoDB Atlas connection string      |
| `JWT_SECRET`    | Secret key for signing JWT tokens    |
| `CLIENT_ORIGIN` | Frontend URL allowed by CORS         |

### client/.env

| Variable         | Description                    |
|-----------------|--------------------------------|
| `VITE_API_URL`   | Base URL of the Express server |

---

## API Endpoints

### Auth

| Method | Route                  | Description         |
|--------|------------------------|---------------------|
| POST   | `/api/auth/register`   | Register new user   |
| POST   | `/api/auth/login`      | Login existing user |

### Notes (Protected — requires JWT)

| Method | Route             | Description          |
|--------|-------------------|----------------------|
| GET    | `/api/notes`      | Get all user's notes |
| POST   | `/api/notes`      | Create a new note    |
| PUT    | `/api/notes/:id`  | Update a note        |
| DELETE | `/api/notes/:id`  | Delete a note        |

---

## Deployment

### Frontend → Netlify

1. Push `client/` to GitHub
2. Connect repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variable: `VITE_API_URL=https://your-railway-url.up.railway.app`

### Backend → Railway

1. Push `server/` to GitHub
2. Connect repo to Railway
3. Add environment variables:
   - `MONGO_URI`
   - `JWT_SECRET`
   - `PORT`
   - `CLIENT_ORIGIN=https://your-netlify-url.netlify.app`

---

## Git Guidelines

- `.env` files are gitignored — never commit secrets
- Use meaningful commit messages:
  ```
  feat: add JWT auth middleware
  feat: notes CRUD with user scoping
  fix: handle expired token on frontend
  chore: add .env.example files
  ```

---

## Notes

- Passwords are hashed with bcrypt (10 salt rounds)
- JWT tokens expire after 7 days
- Each user can only access their own notes (enforced server-side)
