import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignIn(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState(null)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('plp_users') || '[]')
    const user = users.find(u => u.email === email)
    if(!user) { setErr('No user found'); return }
    if(user.password !== btoa(password)) { setErr('Incorrect password'); return }
    localStorage.setItem('plp_user', JSON.stringify({ id: user.id, name: user.name, email: user.email }))
    navigate('/')
  }

  return (
    <div className="container" style={{ maxWidth: 540 }}>
      <h2 style={{ marginTop: 18 }}>Sign in</h2>
      <form onSubmit={handleSubmit} style={{ display:'grid', gap:12, marginTop:12 }}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        {err && <div style={{ color: 'red' }}>{err}</div>}
        <button className="btn btn-primary" type="submit">Sign in</button>
      </form>

      <p style={{ marginTop:12 }}>
        New here? <Link to="/signup">Create an account</Link>
      </p>
    </div>
  )
}
