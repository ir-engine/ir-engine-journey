import { getState } from '@ir-engine/hyperflux'
import React from 'react'
import { Link } from 'react-router-dom'
import { Lesson } from '../../state/LessonsState'
import { ProgressState } from '../../state/ProgressState'
import { Card, CardBody, CardDescription, CardFooter, CardImage, CardTitle } from './Card'

interface LessonCardProps {
  lesson: Lesson
  className?: string
}

export const LessonCard: React.FC<LessonCardProps> = ({ lesson, className = '' }) => {
  const { lessonProgress } = getState(ProgressState)
  const isCompleted = lessonProgress[lesson.id]?.completed || false

  const difficultyColor = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  }[lesson.difficulty]

  return (
    <Link to={`/lessons/${lesson.slug}`} className="block">
      <Card hoverable className={className}>
        {lesson.thumbnailUrl && <CardImage src={lesson.thumbnailUrl} alt={lesson.title} />}
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-500">Lesson {lesson.id}</span>
            <span className={`rounded-full px-2 py-1 text-xs ${difficultyColor}`}>{lesson.difficulty}</span>
          </div>
          <CardTitle>{lesson.title}</CardTitle>
          <CardDescription>{lesson.description}</CardDescription>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <div className="flex space-x-2">
            {lesson.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                {tag}
              </span>
            ))}
          </div>
          {isCompleted && (
            <span className="flex items-center text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Completed
            </span>
          )}
        </CardFooter>
      </Card>
    </Link>
  )
}
