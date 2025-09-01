# Student Attendance Frontend Task

This is a **frontend-only React application** (built with Vite) for managing student attendance.  
It includes:

- **Login Page** (dummy authentication using React Context).
- **Student List Page** with Present/Absent toggle buttons.
- **Reusable Components** (`Input`, `Button`, `Toggle`, `Card`, `Table`, `Navbar`).
- **Mock API** using localStorage (so no backend is required to run this project).

Getting Started

1. Clone or download this repo
   
    ```bash
    git clone <https://github.com/RajVeer36399/frontend-task>
    cd frontend-task

3. Install dependencies and plugins
   
    a. npm install axios
    b. npm install react-router-dom

4. Run the project in development mode
   
    a. npm run dev

5. Login
   
    a. Open http://localhost:5173/login 
    b. Enter any non-empty email and password → click Sign In.
    c. You’ll be redirected to the Student List Page.

6. Mark Attendance
   
    a. The student list is seeded automatically (from src/services/mock.js).
    b. Each student has a Present/Absent toggle.
    c. Pick a date and click Save.
    d. Attendance is stored in localStorage.

7. Features
   
    a. Frontend-only implementation (no backend required).
    b. Dummy login system with React Context.
    c. Student list fetched from mock localStorage API.
    d. Attendance saving persists in localStorage.
    e. Fully reusable UI components.
    f. Ready to switch to a real backend by changing .env.

8. Notes
   
    a. This app runs entirely in the browser with localStorage for persistence.
    b. If you clear your browser storage, students/attendance data will reset.
    c. You can extend it by adding attendance summary charts or connecting to a real backend.
