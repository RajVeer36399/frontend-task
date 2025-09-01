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
    git clone <your-repo-url>
    cd attendance-frontend

2. Install dependencies and plugins
    npm install axios
    npm install react-router-dom

3. Run the project in development mode
    npm run dev

4. Login
    Open http://localhost:5174/login (5173 is busy because I had to re-run everything)
    Enter any non-empty email and password → click Sign In.
    You’ll be redirected to the Student List Page.

5. Mark Attendance
    The student list is seeded automatically (from src/services/mock.js).
    Each student has a Present/Absent toggle.
    Pick a date and click Save.
    Attendance is stored in localStorage.

6. Features
    Frontend-only implementation (no backend required).
    Dummy login system with React Context.
    Student list fetched from mock localStorage API.
    Attendance saving persists in localStorage.
    Fully reusable UI components.
    Ready to switch to a real backend by changing .env.

7. Notes
    This app runs entirely in the browser with localStorage for persistence.
    If you clear your browser storage, students/attendance data will reset.
    You can extend it by adding attendance summary charts or connecting to a real backend.