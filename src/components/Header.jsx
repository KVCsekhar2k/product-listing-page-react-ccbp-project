import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  const [navOpen, setNavOpen] = useState(false)
  const user = JSON.parse(localStorage.getItem('plp_user') || 'null')

  return (
    <header className="container header" style={{ paddingTop: 8 }}>
      <div className="header-left">
        {/* Hamburger only visible on small screens */}
        <button
          className="btn mobile-only"
          aria-label="menu"
          onClick={() => setNavOpen(!navOpen)}
        >
          ☰
        </button>
        <div className="logo">SEKHAR STORE</div>
      </div>

      {/* Nav: visible on desktop, toggle on mobile */}
      <nav className={`nav ${navOpen ? 'open' : ''}`}>
        <a>SHOP</a>
        <a>SKILLS</a>
        <a>STORIES</a>
        <a>ABOUT</a>
        <a>CONTACT US</a>
      </nav>

      <div className="icons">
        <button className="btn" title="search"><img src="https://i.pinimg.com/736x/79/ce/10/79ce10e4c34077215b988139aec41dbe.jpg" alt="search" className='search-icon'/></button>
        <button className="btn" title="wishlist"><img src="https://i.pinimg.com/736x/e6/bc/da/e6bcda6616cf16dca362f22d39f1d9be.jpg" alt="whislist" className='search-icon'/></button>
        <button className="btn" title="bag"><img src="https://i.pinimg.com/736x/4f/f8/7b/4ff87b5a581e83ccf8cd354f9b76397d.jpg" alt="cart" className='search-icon'/></button>

        {user ? (
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ fontSize: 14 }}>{user.name}</div>
            <button
              className="btn"
              onClick={() => {
                localStorage.removeItem('plp_user')
                window.location.href = '/'
              }}
            >
              Sign out
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: 8 }}>
            <Link to="/signin"><button className="btn">Sign In</button></Link>
            <div style={{ fontSize: 14 }}>ENG ▾</div>
          </div>
        )}
      </div>
    </header>
  )
}
