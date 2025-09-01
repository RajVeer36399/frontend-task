import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import Button from './Button'

export default function Navbar(){
  const { user, logout } = useAuth()
  const loc = useLocation()
  const navigate = useNavigate()
  const onLogout = () => { logout(); navigate('/login') }

  return (
    <nav style={{ borderBottom:'1px solid var(--border)' }}>
      <div className="container spread" style={{ padding:'14px 24px' }}>
        <div className="flex">
          <Link to="/students" style={{ fontWeight:800 }}>Attendance</Link>
          {user && (
            <>
              <Link to="/students" className="badge">Students</Link>
              <Link to="/summary" className="badge">Summary</Link>
            </>
          )}
        </div>
        <div className="flex">
          {user ? (
            <>
              <span className="small">Signed in as <b>{user.name}</b></span>
              <Button variant="secondary" onClick={onLogout}>Logout</Button>
            </>
          ) : (
            loc.pathname !== '/login' ? <Link to="/login" className="badge">Login</Link> : null
          )}
        </div>
      </div>
    </nav>
  )
}
