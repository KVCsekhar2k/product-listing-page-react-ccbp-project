import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [err, setErr] = useState(null)

  function handleSubmit(e){
    e.preventDefault()
    if(!name || !email || !password){ setErr('All fields required'); return }

    // simple "hash" = base64 (demo only). DON'T use this in production.
    const storedUsers = JSON.parse(localStorage.getItem('plp_users') || '[]')
    if(storedUsers.some(u => u.email === email)){ setErr('Email already registered'); return }

    const user = { id: Date.now(), name, email, password: btoa(password) }
    storedUsers.push(user)
    localStorage.setItem('plp_users', JSON.stringify(storedUsers))
    // log user in
    localStorage.setItem('plp_user', JSON.stringify({ id: user.id, name: user.name, email: user.email }))
    navigate('/')
  }

  return (
    <div className="container" style={{ maxWidth: 540 }}>
      <h2 style={{ marginTop: 18 }}>Create an account</h2>
      <form onSubmit={handleSubmit} style={{ display:'grid', gap:12, marginTop:12 }}>
        <input placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        {err && <div style={{ color: 'red' }}>{err}</div>}
        <button className="btn btn-primary" type="submit">Sign up</button>
      </form>

      <p style={{ marginTop:12 }}>
        Already have an account? <Link to="/signin">Sign in</Link>
      </p>
    </div>
  )
}
