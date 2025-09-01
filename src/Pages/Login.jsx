import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Card from '../Components/Card'
import { useAuth } from '../Context/AuthContext'

export default function Login(){
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('rajveer@example.com')
  const [password, setPassword] = useState('password')
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const { ok, message } = await login({ email, password })
    if(ok) navigate('/students')
    else setError(message || 'Login failed')
  }

  return (
    <div className="center">
      <div className="container" style={{ maxWidth:420 }}>
        <Card title="Teacher Login">
          <form onSubmit={onSubmit}>
            <Input label="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <div className="mt-3" />
            <Input label="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            {error ? <div className="small" style={{ color:'#ef4444' }}>{error}</div> : null}
            <div className="mt-4" />
            <Button type="submit" style={{ width:'100%' }}>Sign in</Button>
            <div className="small mt-3">Note: This demo accepts any non-empty credentials.</div>
          </form>
        </Card>
      </div>
    </div>
  )
}
