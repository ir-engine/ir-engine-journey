import { getMutableState } from '@ir-engine/hyperflux'
import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { Button } from '../components/ui/Button'
import { getLessonBySlug, getNextLesson, getPreviousLesson } from '../data/lessons'
import { LessonsState } from '../state/LessonsState'
import { ProgressState } from '../state/ProgressState'

export const LessonPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  const lesson = slug ? getLessonBySlug(slug) : undefined
  const nextLesson = lesson ? getNextLesson(lesson.id) : undefined
  const prevLesson = lesson ? getPreviousLesson(lesson.id) : undefined

  const lessonsState = getMutableState(LessonsState)
  const progressState = getMutableState(ProgressState)

  useEffect(() => {
    if (lesson) {
      lessonsState.currentLessonId.set(lesson.id)

      // Mark as started if not already
      if (!progressState.lessonProgress.value[lesson.id]) {
        const updatedProgress = {
          ...progressState.lessonProgress.value,
          [lesson.id]: {
            lessonId: lesson.id,
            completed: false,
            startedAt: Date.now()
          }
        }
        progressState.lessonProgress.set(updatedProgress)
      }
    }
  }, [lesson])

  const handleMarkAsComplete = () => {
    if (lesson) {
      const updatedProgress = {
        ...progressState.lessonProgress.value,
        [lesson.id]: {
          ...progressState.lessonProgress.value[lesson.id],
          completed: true,
          completedAt: Date.now()
        }
      }
      progressState.lessonProgress.set(updatedProgress)

      // Update total completed count
      const completedCount = Object.values(updatedProgress).filter((p) => p.completed).length
      progressState.totalCompleted.set(completedCount)
    }
  }

  if (!lesson) {
    return (
      <Layout>
        <div className="container-custom mx-auto py-12 text-center">
          <h1 className="section-title">Lesson Not Found</h1>
          <p className="mb-8">The lesson you're looking for doesn't exist.</p>
          <Link to="/lessons">
            <Button>Back to Lessons</Button>
          </Link>
        </div>
      </Layout>
    )
  }

  const isCompleted = progressState.lessonProgress.value[lesson.id]?.completed || false

  return (
    <Layout>
      <div className="container-custom mx-auto py-12">
        {/* Lesson Header */}
        <div className="mb-8">
          <div className="mb-2 flex items-center text-sm text-gray-500">
            <span>{lesson.section}</span>
            <span className="mx-2">•</span>
            <span>Lesson {lesson.id}</span>
            <span className="mx-2">•</span>
            <span
              className={`rounded-full px-2 py-1 text-xs ${
                lesson.difficulty === 'beginner'
                  ? 'bg-green-100 text-green-800'
                  : lesson.difficulty === 'intermediate'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {lesson.difficulty}
            </span>
          </div>

          <h1 className="section-title mb-4">{lesson.title}</h1>
          <p className="mb-6 text-xl text-gray-600">{lesson.description}</p>

          <div className="mb-6 flex flex-wrap gap-2">
            {lesson.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Lesson Content Placeholder */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <div className="prose prose-lg max-w-none">
            <p>This is a placeholder for the lesson content. In a real implementation, this would contain:</p>
            <ul>
              <li>Written tutorial content</li>
              <li>Code snippets with syntax highlighting</li>
              <li>Interactive examples</li>
              <li>Diagrams and illustrations</li>
            </ul>

            <h2>Interactive Example</h2>
            <div className="example-container flex items-center justify-center bg-gray-100">
              <p className="text-gray-500">Interactive 3D example would be displayed here</p>
            </div>

            <h2>Code Example</h2>
            <pre className="overflow-x-auto rounded-md bg-gray-800 p-4 text-white">
              <code>
                {`// Example iR Engine code
import { createEntity, setComponent } from '@ir-engine/ecs'
import { TransformComponent } from '@ir-engine/spatial'

// Create a new entity
const entity = createEntity()

// Add transform component
setComponent(entity, TransformComponent, {
  position: { x: 0, y: 1, z: 0 },
  rotation: { x: 0, y: 0, z: 0, w: 1 },
  scale: { x: 1, y: 1, z: 1 }
})`}
              </code>
            </pre>
          </div>
        </div>

        {/* Lesson Navigation */}
        <div className="flex flex-col items-center justify-between rounded-lg bg-white p-6 shadow-md sm:flex-row">
          <div>
            {prevLesson ? (
              <Link to={`/lessons/${prevLesson.slug}`} className="flex items-center text-blue-600 hover:text-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Previous: {prevLesson.title}
              </Link>
            ) : (
              <span className="text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 inline h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                This is the first lesson
              </span>
            )}
          </div>

          <div className="my-4 sm:my-0">
            <Button
              variant={isCompleted ? 'secondary' : 'primary'}
              onClick={handleMarkAsComplete}
              disabled={isCompleted}
            >
              {isCompleted ? 'Completed ✓' : 'Mark as Complete'}
            </Button>
          </div>

          <div>
            {nextLesson ? (
              <Link to={`/lessons/${nextLesson.slug}`} className="flex items-center text-blue-600 hover:text-blue-800">
                Next: {nextLesson.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            ) : (
              <span className="text-gray-400">
                This is the last lesson
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 inline h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
