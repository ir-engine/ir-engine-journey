import React from 'react'
import { Link } from 'react-router-dom'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">iR Engine Journey</h3>
            <p className="text-gray-400">
              A comprehensive tutorial series for learning iR Engine from basics to advanced concepts.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/lessons" className="text-gray-400 transition-colors hover:text-white">
                  Lessons
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 transition-colors hover:text-white">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-400 transition-colors hover:text-white">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/ir-engine/ir-engine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  iR Engine GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://ir-engine.io/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://ir-engine.io/examples"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Examples
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Community</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/ir-engine/ir-engine/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  GitHub Discussions
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/ir-engine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/ir_engine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} iR Engine Journey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
