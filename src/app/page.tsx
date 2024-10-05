'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Square, Layers, Type, Users, Code, Github } from "lucide-react"
import { useRouter } from 'next/navigation'

export default function LandingPageComponent() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container max-w-7xl mx-auto flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 px-4 md:px-6"> {/* Added max-w-7xl */}
          <div className="flex gap-6 md:gap-10">
            <Square className="h-6 w-6 text-blue-400" />
            <span className="hidden font-bold sm:inline-block">Viewport</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Button variant="ghost" className="text-sm font-medium text-gray-300 hover:text-white">Features</Button>
              <Button variant="ghost" className="text-sm font-medium text-gray-300 hover:text-white">Pricing</Button>
              <Button variant="ghost" className="text-sm font-medium text-gray-300 hover:text-white">About</Button>
              <Button variant="ghost" className="text-sm font-medium text-gray-300 hover:text-white">Contact</Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center"> {/* Centered and set max width */}
            <div className="flex flex-col items-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Design Without Limits
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl dark:text-gray-400">
                  FigmaClone brings your ideas to life. Collaborate in real-time, prototype with ease, and create stunning designs.
                </p>
              </div>
              <div className="space-x-4">
                <Button onClick={() => router.push('/dashboard')} className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
                <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center"> {/* Centered container */}
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">Features</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-full bg-gray-700 p-4">
                  <Layers className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Powerful Layers</h3>
                <p className="text-gray-400">Organize your design with intuitive layering system.</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-full bg-gray-700 p-4">
                  <Type className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Typography Control</h3>
                <p className="text-gray-400">Fine-tune your text with advanced typography options.</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-full bg-gray-700 p-4">
                  <Users className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Real-time Collaboration</h3>
                <p className="text-gray-400">Work together seamlessly with your team in real-time.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Designing?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl dark:text-gray-400">
                  Join thousands of designers and teams who trust FigmaClone for their creative projects.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input
                    className="flex-1 bg-gray-800 border-gray-700 text-gray-300 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Sign Up
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Releases</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Newsletter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Events</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 sm:mb-0">
              <a href="https://github.com/shaurya35/Viewport-Framer-Clone" target="_blank" className="text-gray-400 hover:text-white">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://x.com/_shaurya35" target="_blank" className="text-gray-400 hover:text-white">
                <Code className="h-6 w-6" />
                <span className="sr-only">Developer API</span>
              </a>
            </div>
            <p className="text-sm text-gray-400">© 2023 FigmaClone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
