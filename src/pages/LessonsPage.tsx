import { getMutableState } from '@ir-engine/hyperflux'
import React, { useEffect, useState } from 'react'
import { Layout } from '../components/layout/Layout'
import { LessonCard } from '../components/ui/LessonCard'
import { getSections, lessons } from '../data/lessons'
import { LessonsState } from '../state/LessonsState'

export const LessonsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSection, setSelectedSection] = useState<string | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)

  const sections = getSections()
  const difficulties = ['beginner', 'intermediate', 'advanced']

  const lessonsState = getMutableState(LessonsState)

  // Filter lessons based on search term, section, and difficulty
  useEffect(() => {
    const filtered = lessons.filter((lesson) => {
      const matchesSearch =
        searchTerm === '' ||
        lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lesson.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lesson.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesSection = selectedSection === null || lesson.section === selectedSection
      const matchesDifficulty = selectedDifficulty === null || lesson.difficulty === selectedDifficulty

      return matchesSearch && matchesSection && matchesDifficulty
    })

    lessonsState.filteredLessons.set(filtered)
    lessonsState.filters.set({
      section: selectedSection,
      difficulty: selectedDifficulty,
      searchTerm
    })
  }, [searchTerm, selectedSection, selectedDifficulty])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleSectionChange = (section: string | null) => {
    setSelectedSection(section === selectedSection ? null : section)
  }

  const handleDifficultyChange = (difficulty: string | null) => {
    setSelectedDifficulty(difficulty === selectedDifficulty ? null : difficulty)
  }

  const handleClearFilters = () => {
    setSearchTerm('')
    setSelectedSection(null)
    setSelectedDifficulty(null)
  }

  const filteredLessons = lessonsState.filteredLessons.value.length > 0 ? lessonsState.filteredLessons.value : lessons

  return (
    <Layout>
      <div className="container-custom mx-auto py-12">
        <h1 className="section-title mb-8">All Lessons</h1>

        {/* Filters */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <div className="mb-4">
            <label htmlFor="search" className="mb-1 block text-sm font-medium text-gray-700">
              Search Lessons
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search by title, description, or tags..."
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <p className="mb-2 block text-sm font-medium text-gray-700">Filter by Section</p>
              <div className="flex flex-wrap gap-2">
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => handleSectionChange(section)}
                    className={`rounded-full px-3 py-1 text-sm ${
                      selectedSection === section
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 block text-sm font-medium text-gray-700">Filter by Difficulty</p>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => handleDifficultyChange(difficulty)}
                    className={`rounded-full px-3 py-1 text-sm ${
                      selectedDifficulty === difficulty
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {(searchTerm || selectedSection || selectedDifficulty) && (
            <div className="flex justify-end">
              <button onClick={handleClearFilters} className="text-sm text-blue-600 hover:text-blue-800">
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Results */}
        <div>
          <p className="mb-4 text-gray-600">
            Showing {filteredLessons.length} of {lessons.length} lessons
          </p>

          {filteredLessons.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-xl text-gray-600">No lessons match your filters.</p>
              <button onClick={handleClearFilters} className="mt-4 font-medium text-blue-600 hover:text-blue-800">
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredLessons.map((lesson) => (
                <LessonCard key={lesson.id} lesson={lesson} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
