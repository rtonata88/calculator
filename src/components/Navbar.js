import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 2,
      path: '/quote',
      text: 'Quote',
    },
  ]

  return (
    <div className="container py-3">
      <header>
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <span className="fs-4">Math Magician</span>
          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            {links.map((link) => (
              <div key={link.id}>
                <NavLink
                  to={link.path}
                  className="me-3 py-2 text-dark text-decoration-none"
                >
                  {link.text}
                </NavLink>
              </div>
            ))}
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
