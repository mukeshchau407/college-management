# 📚 College Management System

A full-stack MERN application to streamline academic and administrative tasks in a college environment.  
It provides separate dashboards for **Admin**, **Faculty**, and **Students** with role-based access and functionality.

---

## ✨ Features

### 👩‍💼 Admin

- Manage **students**, **faculty**, **branches**, and **subjects**
- Publish and manage notices
- Upload & manage timetables
- Profile & password management

### 👨‍🏫 Faculty

- View/update profile
- Upload study materials (notes, assignments, syllabus) by subject & semester
- Manage timetables
- Search students by enrollment, name, or semester
- View & respond to notices

### 🎓 Student

- View profile & academic information
- Browse/download study materials
- Access class timetables
- Receive notices & announcements
- Update profile and password

---

## 🛠 Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **Email Service:** Nodemailer

---

## 📦 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/mukeshchau407/college-management.git
cd college-management


# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
MONGODB_URI=mongodb://127.0.0.1:27017/College-Management-System
PORT=4000
FRONTEND_API_LINK=http://localhost:3000
JWT_SECRET=YOUR_SECRET_KEY
NODEMAILER_EMAIL=
NODEMAILER_PASS=

REACT_APP_APILINK=http://localhost:4000/api
REACT_APP_MEDIA_LINK=http://localhost:4000/media

# In backend
npm run dev

# In frontend
npm start

cd backend
npm run seed


college-management/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   └── media/
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── context/
    │   └── utils/
    └── public/


