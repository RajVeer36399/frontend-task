import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }){
  const [user, setUser] = useState(null)

  useEffect(()=>{
    const saved = localStorage.getItem('auth_user')
    if(saved){ setUser(JSON.parse(saved)) }
  }, [])

  const login = async ({ email, password }) => {
    // Dummy login for now (replace with real JWT flow).
    if(email && password){
      const fake = { id:'t1', name:'Mr. Rajveer', email }
      setUser(fake)
      localStorage.setItem('auth_user', JSON.stringify(fake))
      return { ok:true }
    }
    return { ok:false, message:'Invalid credentials' }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('auth_user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
