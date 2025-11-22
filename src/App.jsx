import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Pages/Login'
import StudentList from './Pages/StudentList'
import Summary from './Pages/Summary'
import NotFound from './Pages/NotFound'
import Navbar from './Components/Navbar'
import { useAuth } from './Context/AuthContext'

function ProtectedRoute({ children }){
  const { user } = useAuth()
  if(!user) return <Navigate to="/login" replace />
  return children
}

export default function App(){
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/students" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/students" element={<ProtectedRoute><StudentList /></ProtectedRoute>} />
        <Route path="/summary" element={<ProtectedRoute><Summary /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
