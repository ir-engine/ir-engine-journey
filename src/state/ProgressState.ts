import { defineState } from '@ir-engine/hyperflux'

export interface LessonProgress {
  lessonId: string
  completed: boolean
  startedAt?: number
  completedAt?: number
  notes?: string
}

export interface ProgressStateType {
  lessonProgress: Record<string, LessonProgress>
  totalCompleted: number
  totalLessons: number
}

export const ProgressState = defineState({
  name: 'ir.journey.ProgressState',
  initial: {
    lessonProgress: {},
    totalCompleted: 0,
    totalLessons: 0
  } as ProgressStateType
})
