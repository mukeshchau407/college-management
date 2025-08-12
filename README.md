College Management System
A full-stack solution built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. This system streamlines academic and administrative processes by offering unified management of student and faculty data, branch/course information, notices, and more.

Features
Admin Dashboard
Manage faculty and student profiles, including emergency contact details

Create and manage academic branches and course structures

Publish notices for students and faculty

Upload and administer timetables by branch and semester

Update profile and password management

Faculty Portal
View and update personal profile and emergency contact

Upload and categorize study materials (notes, assignments, syllabus) by subject, semester, and type

Manage timetables for branches

Browse student information via enrollment, name, or semester search

View and respond to notices

Manage password and reset functionality

Student Interface
Access personal profile and academic records

Use filters to browse study materials

View and download class timetables

Receive notices and announcements

Update profile and manage password reset

Tech Stack
Frontend: React.js

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT (JSON Web Tokens)

Prerequisites
Node.js installed

MongoDB setup

npm or yarn installed

Getting Started

1. Clone the repository:
   bash
   Copy
   Edit
   git clone <repository-url>
   cd college-management
2. Install dependencies:
   bash
   Copy
   Edit

# Backend

cd backend
npm install

# Frontend

cd ../frontend
npm install 3. Environment Variables:
Backend (backend/.env):

env
Copy
Edit
MONGODB_URI=mongodb://127.0.0.1:27017/College-Management-System
PORT=4000
FRONTEND_API_LINK=http://localhost:3000
JWT_SECRET=YOUR_SECRET_KEY
NODEMAILER_EMAIL=
NODEMAILER_PASS=
Frontend (frontend/.env):

env
Copy
Edit
REACT_APP_APILINK=http://localhost:4000/api
REACT_APP_MEDIA_LINK=http://localhost:4000/media 4. Start servers:
bash
Copy
Edit

# In backend directory

npm run dev

# In frontend directory

npm start 5. Seed the admin user:
bash
Copy
Edit
cd backend
npm run seed
Default admin credentials:

Employee ID: 123456

Password: admin123

Email: admin@gmail.com
GitHub

Project Structure
pgsql
Copy
Edit
college-management-system/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ ├── utils/
│ └── media/
└── frontend/
├── src/
│ ├── components/
│ ├── pages/
│ ├── context/
│ └── utils/
└── public/
