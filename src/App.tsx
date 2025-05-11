import { getMutableState } from '@ir-engine/hyperflux'
import React, { useEffect } from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { lessons } from './data/lessons'
import { CommunityPage } from './pages/CommunityPage'
import { HomePage } from './pages/HomePage'
import { LessonPage } from './pages/LessonPage'
import { LessonsPage } from './pages/LessonsPage'
import { ResourcesPage } from './pages/ResourcesPage'
import { LessonsState } from './state/LessonsState'
import { ProgressState } from './state/ProgressState'

// Import styles
import './styles/index.css'

const App: React.FC = () => {
  // Initialize state
  const lessonsState = getMutableState(LessonsState)
  const progressState = getMutableState(ProgressState)

  useEffect(() => {
    // Initialize lessons state
    lessonsState.lessons.set(lessons)
    lessonsState.filteredLessons.set(lessons)

    // Initialize progress state
    progressState.totalLessons.set(lessons.length)

    // Load progress from localStorage if available
    const savedProgress = localStorage.getItem('ir-engine-journey-progress')
    if (savedProgress) {
      try {
        const parsedProgress = JSON.parse(savedProgress)
        progressState.lessonProgress.set(parsedProgress.lessonProgress || {})
        progressState.totalCompleted.set(parsedProgress.totalCompleted || 0)
      } catch (error) {
        console.error('Failed to parse saved progress:', error)
      }
    }

    // Save progress to localStorage when it changes
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'ir-engine-journey-progress',
      JSON.stringify({
        lessonProgress: progressState.lessonProgress.value,
        totalCompleted: progressState.totalCompleted.value
      })
    )
  }, [progressState.lessonProgress.value, progressState.totalCompleted.value])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path="/lessons/:slug" element={<LessonPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/community" element={<CommunityPage />} />

        {/* Redirect to home for any other routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
