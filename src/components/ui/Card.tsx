import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  hoverable?: boolean
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick, hoverable = false }) => {
  const baseClasses = 'card bg-white rounded-lg shadow-md overflow-hidden'
  const hoverClasses = hoverable ? 'transition-transform hover:scale-[1.02] hover:shadow-lg cursor-pointer' : ''
  const classes = `${baseClasses} ${hoverClasses} ${className}`

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  )
}

interface CardImageProps {
  src: string
  alt: string
  className?: string
}

export const CardImage: React.FC<CardImageProps> = ({ src, alt, className = '' }) => {
  return (
    <div className="relative aspect-video overflow-hidden">
      <img src={src} alt={alt} className={`h-full w-full object-cover ${className}`} />
    </div>
  )
}

interface CardBodyProps {
  children: React.ReactNode
  className?: string
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => {
  return <div className={`p-4 ${className}`}>{children}</div>
}

interface CardTitleProps {
  children: React.ReactNode
  className?: string
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className = '' }) => {
  return <h3 className={`mb-2 text-xl font-semibold ${className}`}>{children}</h3>
}

interface CardDescriptionProps {
  children: React.ReactNode
  className?: string
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ children, className = '' }) => {
  return <p className={`text-gray-600 ${className}`}>{children}</p>
}

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => {
  return <div className={`border-t border-gray-200 p-4 ${className}`}>{children}</div>
}
