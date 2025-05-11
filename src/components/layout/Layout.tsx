import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

interface LayoutProps {
  children: React.ReactNode
  hideFooter?: boolean
}

export const Layout: React.FC<LayoutProps> = ({ children, hideFooter = false }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  )
}
