import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="center">
      <div style={{ textAlign:'center' }}>
        <div style={{ fontSize:64, fontWeight:900, opacity:.7 }}>404</div>
        <div className="mt-2">The page you are looking for was not found.</div>
        <div className="mt-3"><Link to="/" className="badge">Go Home</Link></div>
      </div>
    </div>
  )
}
