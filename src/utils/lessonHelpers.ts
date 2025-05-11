import { getState } from '@ir-engine/hyperflux'
import { Lesson } from '../state/LessonsState'
import { ProgressState } from '../state/ProgressState'

/**
 * Check if a lesson is completed
 */
export const isLessonCompleted = (lessonId: string): boolean => {
  const { lessonProgress } = getState(ProgressState)
  return lessonProgress[lessonId]?.completed || false
}

/**
 * Get the completion percentage for a section
 */
export const getSectionCompletionPercentage = (lessons: Lesson[], section: string): number => {
  const sectionLessons = lessons.filter((lesson) => lesson.section === section)
  if (sectionLessons.length === 0) return 0

  const { lessonProgress } = getState(ProgressState)
  const completedCount = sectionLessons.filter((lesson) => lessonProgress[lesson.id]?.completed).length

  return Math.round((completedCount / sectionLessons.length) * 100)
}

/**
 * Get the overall completion percentage
 */
export const getOverallCompletionPercentage = (lessons: Lesson[]): number => {
  if (lessons.length === 0) return 0

  const { lessonProgress } = getState(ProgressState)
  const completedCount = lessons.filter((lesson) => lessonProgress[lesson.id]?.completed).length

  return Math.round((completedCount / lessons.length) * 100)
}

/**
 * Format a date from timestamp
 */
export const formatDate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

/**
 * Calculate time spent on a lesson
 */
export const calculateTimeSpent = (startedAt: number, completedAt?: number): string => {
  const endTime = completedAt || Date.now()
  const timeSpentMs = endTime - startedAt

  // Convert to minutes
  const timeSpentMinutes = Math.floor(timeSpentMs / (1000 * 60))

  if (timeSpentMinutes < 1) {
    return 'Less than a minute'
  } else if (timeSpentMinutes === 1) {
    return '1 minute'
  } else if (timeSpentMinutes < 60) {
    return `${timeSpentMinutes} minutes`
  } else {
    const hours = Math.floor(timeSpentMinutes / 60)
    const minutes = timeSpentMinutes % 60

    if (minutes === 0) {
      return hours === 1 ? '1 hour' : `${hours} hours`
    } else {
      return `${hours} hour${hours > 1 ? 's' : ''} ${minutes} minute${minutes > 1 ? 's' : ''}`
    }
  }
}
