import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-gray-800 text-white">
      <div className="container-custom mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold">iR Engine Journey</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link nav-link-inactive')}
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/lessons"
                className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link nav-link-inactive')}
              >
                Lessons
              </NavLink>
              <NavLink
                to="/resources"
                className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link nav-link-inactive')}
              >
                Resources
              </NavLink>
              <NavLink
                to="/community"
                className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link nav-link-inactive')}
              >
                Community
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active block' : 'nav-link nav-link-inactive block'
              }
              end
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/lessons"
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active block' : 'nav-link nav-link-inactive block'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Lessons
            </NavLink>
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active block' : 'nav-link nav-link-inactive block'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </NavLink>
            <NavLink
              to="/community"
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active block' : 'nav-link nav-link-inactive block'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
