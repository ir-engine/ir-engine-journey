import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { Button } from '../components/ui/Button'
import { LessonCard } from '../components/ui/LessonCard'
import { lessons } from '../data/lessons'

export const HomePage: React.FC = () => {
  // Get the first few lessons to showcase
  const featuredLessons = lessons.slice(0, 3)

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="container-custom mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Learn to Build Immersive 3D Web Experiences</h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            A comprehensive tutorial series for mastering iR Engine from basics to advanced concepts
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/lessons">
              <Button size="lg">Browse Lessons</Button>
            </Link>
            <a href="https://github.com/ir-engine/ir-engine" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg">
                GitHub Repository
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom mx-auto">
          <h2 className="section-title mb-12 text-center">Why Learn iR Engine?</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Interactive Learning</h3>
              <p className="text-gray-600">
                Learn by doing with interactive examples and hands-on exercises that reinforce concepts.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Progressive Difficulty</h3>
              <p className="text-gray-600">
                Start with the basics and gradually advance to complex topics at your own pace.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Community Support</h3>
              <p className="text-gray-600">
                Join a community of developers learning and building with iR Engine together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Lessons */}
      <section className="py-16">
        <div className="container-custom mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="section-title mb-0">Featured Lessons</h2>
            <Link to="/lessons" className="font-medium text-blue-600 hover:text-blue-800">
              View All Lessons →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 py-16 text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Start Your Journey?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Begin learning iR Engine today and create immersive 3D experiences for the web.
          </p>
          <Link to="/lessons/introduction-to-ir-engine">
            <Button size="lg">Start First Lesson</Button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
