import { Lesson } from '../state/LessonsState'

export const lessons: Lesson[] = [
  // Section 1: Fundamentals
  {
    id: '1.1',
    title: 'Introduction to iR Engine',
    section: 'Fundamentals',
    sectionNumber: 1,
    lessonNumber: 1,
    description: 'Learn about iR Engine, its relationship to Three.js, and how to set up your development environment.',
    difficulty: 'beginner',
    tags: ['introduction', 'setup'],
    slug: 'introduction-to-ir-engine',
    thumbnailUrl: '/lessons/1.1/thumbnail.jpg'
  },
  {
    id: '1.2',
    title: 'Your First Scene',
    section: 'Fundamentals',
    sectionNumber: 1,
    lessonNumber: 2,
    description:
      'Create your first 3D scene with iR Engine, add objects, set up a camera, and implement a basic renderer.',
    difficulty: 'beginner',
    tags: ['scene', 'basics'],
    slug: 'your-first-scene',
    thumbnailUrl: '/lessons/1.2/thumbnail.jpg'
  },
  {
    id: '1.3',
    title: 'Transforms and Coordinate Systems',
    section: 'Fundamentals',
    sectionNumber: 1,
    lessonNumber: 3,
    description: 'Learn about position, rotation, scale, and how coordinate systems work in 3D space.',
    difficulty: 'beginner',
    tags: ['transforms', 'coordinates'],
    slug: 'transforms-and-coordinate-systems',
    thumbnailUrl: '/lessons/1.3/thumbnail.jpg'
  },
  {
    id: '1.4',
    title: 'Animation Fundamentals',
    section: 'Fundamentals',
    sectionNumber: 1,
    lessonNumber: 4,
    description: 'Understand animation loops, delta time, and basic animation principles in iR Engine.',
    difficulty: 'beginner',
    tags: ['animation', 'time'],
    slug: 'animation-fundamentals',
    thumbnailUrl: '/lessons/1.4/thumbnail.jpg'
  },

  // Section 2: Core Building Blocks
  {
    id: '2.1',
    title: 'Geometries',
    section: 'Core Building Blocks',
    sectionNumber: 2,
    lessonNumber: 1,
    description: 'Explore built-in primitives, custom geometries, buffer geometries, and geometry manipulation.',
    difficulty: 'beginner',
    tags: ['geometry', 'mesh'],
    slug: 'geometries',
    thumbnailUrl: '/lessons/2.1/thumbnail.jpg'
  },
  {
    id: '2.2',
    title: 'Materials',
    section: 'Core Building Blocks',
    sectionNumber: 2,
    lessonNumber: 2,
    description: 'Learn about standard materials, PBR principles, material properties, and custom materials.',
    difficulty: 'intermediate',
    tags: ['materials', 'appearance'],
    slug: 'materials',
    thumbnailUrl: '/lessons/2.2/thumbnail.jpg'
  }

  // Add more lessons as needed...
]

// Helper functions
export const getLessonById = (id: string): Lesson | undefined => {
  return lessons.find((lesson) => lesson.id === id)
}

export const getLessonBySlug = (slug: string): Lesson | undefined => {
  return lessons.find((lesson) => lesson.slug === slug)
}

export const getNextLesson = (currentId: string): Lesson | undefined => {
  const currentIndex = lessons.findIndex((lesson) => lesson.id === currentId)
  if (currentIndex === -1 || currentIndex === lessons.length - 1) return undefined
  return lessons[currentIndex + 1]
}

export const getPreviousLesson = (currentId: string): Lesson | undefined => {
  const currentIndex = lessons.findIndex((lesson) => lesson.id === currentId)
  if (currentIndex <= 0) return undefined
  return lessons[currentIndex - 1]
}

export const getLessonsBySection = (section: string): Lesson[] => {
  return lessons.filter((lesson) => lesson.section === section)
}

export const getSections = (): string[] => {
  return [...new Set(lessons.map((lesson) => lesson.section))]
}

export const filterLessons = (
  searchTerm: string = '',
  section: string | null = null,
  difficulty: string | null = null
): Lesson[] => {
  return lessons.filter((lesson) => {
    const matchesSearch =
      searchTerm === '' ||
      lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesSection = section === null || lesson.section === section
    const matchesDifficulty = difficulty === null || lesson.difficulty === difficulty

    return matchesSearch && matchesSection && matchesDifficulty
  })
}
