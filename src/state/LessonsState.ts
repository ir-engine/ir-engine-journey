import { defineState } from '@ir-engine/hyperflux'

export interface Lesson {
  id: string
  title: string
  section: string
  sectionNumber: number
  lessonNumber: number
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  tags: string[]
  slug: string
  thumbnailUrl?: string
  demoUrl?: string
  sourceCodeUrl?: string
}

export interface LessonsStateType {
  lessons: Lesson[]
  currentLessonId: string | null
  filteredLessons: Lesson[]
  filters: {
    section: string | null
    difficulty: string | null
    searchTerm: string
  }
}

export const LessonsState = defineState({
  name: 'ir.journey.LessonsState',
  initial: {
    lessons: [],
    currentLessonId: null,
    filteredLessons: [],
    filters: {
      section: null,
      difficulty: null,
      searchTerm: ''
    }
  } as LessonsStateType
})
