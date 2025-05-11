import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Card, CardBody, CardDescription, CardTitle } from '../components/ui/Card'

export const CommunityPage: React.FC = () => {
  return (
    <Layout>
      <div className="container-custom mx-auto py-12">
        <h1 className="section-title mb-8">Community</h1>

        <p className="mb-12 max-w-3xl text-xl text-gray-600">
          Join the iR Engine community to connect with other developers, share your projects, get help, and contribute
          to the ecosystem.
        </p>

        {/* Community Platforms */}
        <div className="mb-12">
          <h2 className="subsection-title">Connect With Us</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <a
              href="https://github.com/ir-engine/ir-engine/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card hoverable className="h-full">
                <CardBody>
                  <div className="mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3 h-8 w-8 text-gray-700"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                      />
                    </svg>
                    <CardTitle>GitHub Discussions</CardTitle>
                  </div>
                  <CardDescription>
                    Ask questions, share ideas, and participate in discussions about iR Engine.
                  </CardDescription>
                </CardBody>
              </Card>
            </a>

            <a href="https://discord.gg/ir-engine" target="_blank" rel="noopener noreferrer" className="block">
              <Card hoverable className="h-full">
                <CardBody>
                  <div className="mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3 h-8 w-8 text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                    <CardTitle>Discord</CardTitle>
                  </div>
                  <CardDescription>
                    Join our Discord server for real-time chat, help, and community events.
                  </CardDescription>
                </CardBody>
              </Card>
            </a>

            <a href="https://twitter.com/ir_engine" target="_blank" rel="noopener noreferrer" className="block">
              <Card hoverable className="h-full">
                <CardBody>
                  <div className="mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3 h-8 w-8 text-blue-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    <CardTitle>Twitter</CardTitle>
                  </div>
                  <CardDescription>
                    Follow us on Twitter for announcements, tips, and community highlights.
                  </CardDescription>
                </CardBody>
              </Card>
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="subsection-title">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-lg font-semibold">How can I contribute to iR Engine?</h3>
              <p className="text-gray-600">
                You can contribute to iR Engine by submitting pull requests, reporting bugs, improving documentation, or
                creating examples. Check out our{' '}
                <a
                  href="https://github.com/ir-engine/ir-engine/blob/main/CONTRIBUTING.md"
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  contribution guidelines
                </a>{' '}
                to get started.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-lg font-semibold">Where can I get help if I'm stuck?</h3>
              <p className="text-gray-600">
                If you're stuck, you can ask questions on{' '}
                <a
                  href="https://github.com/ir-engine/ir-engine/discussions"
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Discussions
                </a>{' '}
                or join our{' '}
                <a
                  href="https://discord.gg/ir-engine"
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord server
                </a>{' '}
                for real-time help from the community.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-lg font-semibold">How can I showcase my iR Engine project?</h3>
              <p className="text-gray-600">
                You can showcase your project by posting it on GitHub Discussions, sharing it on Discord, or submitting
                it to our showcase gallery. Tag us on social media with #iREngine to get featured.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-lg font-semibold">Is iR Engine suitable for commercial projects?</h3>
              <p className="text-gray-600">
                Yes, iR Engine is licensed under the CPAL-1.0 License, which allows for commercial use. Be sure to
                review the license terms to understand the requirements for attribution and source code availability.
              </p>
            </div>
          </div>
        </div>

        {/* Community Showcase Placeholder */}
        <div>
          <h2 className="subsection-title">Community Showcase</h2>

          <p className="mb-6 text-gray-600">
            Check out these amazing projects created by the iR Engine community. Want to see your project here? Share it
            with us!
          </p>

          <div className="rounded-lg bg-gray-100 p-12 text-center">
            <p className="mb-4 text-gray-500">Community showcase coming soon!</p>
            <p className="text-gray-500">
              In the meantime, share your projects on our Discord server or GitHub Discussions.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
