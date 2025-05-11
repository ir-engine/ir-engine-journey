import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Card, CardBody, CardDescription, CardTitle } from '../components/ui/Card'

interface Resource {
  title: string
  description: string
  url: string
  category: string
}

const resources: Resource[] = [
  // Documentation
  {
    title: 'iR Engine Documentation',
    description: 'Official documentation for iR Engine with API references and guides.',
    url: 'https://ir-engine.io/docs',
    category: 'Documentation'
  },
  {
    title: 'Getting Started Guide',
    description: 'A comprehensive guide to getting started with iR Engine.',
    url: 'https://ir-engine.io/docs/getting-started',
    category: 'Documentation'
  },

  // Examples
  {
    title: 'Official Examples',
    description: 'Collection of official examples demonstrating various features of iR Engine.',
    url: 'https://ir-engine.io/examples',
    category: 'Examples'
  },
  {
    title: 'Demo Showcase',
    description: 'Showcase of projects built with iR Engine by the community.',
    url: 'https://ir-engine.io/showcase',
    category: 'Examples'
  },

  // Tools
  {
    title: 'iR Engine CLI',
    description: 'Command-line interface for creating and managing iR Engine projects.',
    url: 'https://github.com/ir-engine/ir-engine-cli',
    category: 'Tools'
  },
  {
    title: 'Visual Studio Code Extension',
    description: 'VS Code extension for iR Engine development with syntax highlighting and snippets.',
    url: 'https://marketplace.visualstudio.com/items?itemName=ir-engine.ir-engine-tools',
    category: 'Tools'
  },

  // Community
  {
    title: 'GitHub Repository',
    description: 'The official iR Engine GitHub repository.',
    url: 'https://github.com/ir-engine/ir-engine',
    category: 'Community'
  },
  {
    title: 'Discord Server',
    description: 'Join the iR Engine community on Discord for discussions and help.',
    url: 'https://discord.gg/ir-engine',
    category: 'Community'
  },

  // Learning
  {
    title: 'Three.js Fundamentals',
    description: 'Learn the fundamentals of Three.js, which iR Engine is built upon.',
    url: 'https://threejs.org/manual/',
    category: 'Learning'
  },
  {
    title: 'WebGL Fundamentals',
    description: 'Understand the basics of WebGL, the underlying technology for 3D on the web.',
    url: 'https://webglfundamentals.org/',
    category: 'Learning'
  }
]

export const ResourcesPage: React.FC = () => {
  // Group resources by category
  const resourcesByCategory = resources.reduce(
    (acc, resource) => {
      if (!acc[resource.category]) {
        acc[resource.category] = []
      }
      acc[resource.category].push(resource)
      return acc
    },
    {} as Record<string, Resource[]>
  )

  const categories = Object.keys(resourcesByCategory)

  return (
    <Layout>
      <div className="container-custom mx-auto py-12">
        <h1 className="section-title mb-8">Resources</h1>

        <p className="mb-12 max-w-3xl text-xl text-gray-600">
          Explore these resources to enhance your learning experience and find additional information about iR Engine
          and related technologies.
        </p>

        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="subsection-title">{category}</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {resourcesByCategory[category].map((resource, index) => (
                <a key={index} href={resource.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <Card hoverable className="h-full">
                    <CardBody>
                      <CardTitle>{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardBody>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-12 rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h2 className="mb-4 text-xl font-semibold text-blue-800">Suggest a Resource</h2>
          <p className="mb-4 text-blue-700">
            Know of a great resource that should be included here? Let us know by submitting a pull request or opening
            an issue on GitHub.
          </p>
          <a
            href="https://github.com/ir-engine/ir-engine-journey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
          >
            Contribute on GitHub
          </a>
        </div>
      </div>
    </Layout>
  )
}
