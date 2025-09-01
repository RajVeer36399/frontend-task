import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import StudentList from './pages/StudentList'
import Summary from './pages/Summary'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import { useAuth } from './context/AuthContext'

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
