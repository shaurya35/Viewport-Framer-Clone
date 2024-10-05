"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Square, Eye, EyeOff, Layers, Type, Users, Zap, Star, Sparkles } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-900 text-gray-100">
      <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:px-8 xl:px-12">
        <div className="w-full max-w-sm mx-auto">
          <div className="flex items-center mb-8">
            <Square className="w-10 h-10 text-blue-400 mr-4" />
            <span className="text-2xl font-bold">Viewport</span>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold">Sign in to your account</h2>
            <p className="mt-2 text-sm text-gray-400">
              Or{' '}
              <a href="#" className="font-medium text-blue-400 hover:text-blue-300">
                start your 14-day free trial
              </a>
            </p>
          </div>

          <div className="mt-8">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <Label htmlFor="login-email" className="block text-sm font-medium text-gray-300">
                  Email address
                </Label>
                <div className="mt-1">
                  <Input
                    id="login-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="bg-gray-800 border-gray-700 text-gray-100 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="login-password" className="block text-sm font-medium text-gray-300">
                  Password
                </Label>
                <div className="mt-1 relative">
                  <Input
                    id="login-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="bg-gray-800 border-gray-700 text-gray-100 focus:ring-blue-500 focus:border-blue-500 pr-10"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="login-remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-700 rounded bg-gray-800"
                  />
                  <Label htmlFor="login-remember-me" className="ml-2 block text-sm text-gray-300">
                    Remember me
                  </Label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-400 hover:text-blue-300">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Sign in
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="relative flex-1 hidden lg:block bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
        <div className="absolute inset-0 w-full h-full bg-opacity-70 bg-gray-900 flex flex-col items-center justify-center p-12">
          <div className="text-center space-y-6 mb-12">
            <h3 className="text-4xl font-bold text-gray-100">Welcome to <span className="text-blue-400">FigmaClone</span></h3>
            <p className="text-xl text-gray-300">Design, prototype, and collaborate all in the browser</p>
          </div>
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col items-center space-y-4 p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="p-3 bg-blue-500 rounded-full">
                <Layers className="h-8 w-8 text-white" />
              </div>
              <span className="text-lg font-medium text-gray-100">Powerful Layers</span>
              <p className="text-sm text-gray-400 text-center">Organize your design with an intuitive layering system</p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="p-3 bg-green-500 rounded-full">
                <Type className="h-8 w-8 text-white" />
              </div>
              <span className="text-lg font-medium text-gray-100">Typography Control</span>
              <p className="text-sm text-gray-400 text-center">Fine-tune your text with advanced typography options</p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="p-3 bg-purple-500 rounded-full">
                <Users className="h-8 w-8 text-white" />
              </div>
              <span className="text-lg font-medium text-gray-100">Collaboration</span>
              <p className="text-sm text-gray-400 text-center">Work together seamlessly with your team in real-time</p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="p-3 bg-yellow-500 rounded-full">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <span className="text-lg font-medium text-gray-100">Lightning Fast</span>
              <p className="text-sm text-gray-400 text-center">Experience smooth performance and quick load times</p>
            </div>
          </div>
          <div className="w-full max-w-md">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-7 py-6 bg-gray-900 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-slate-300">Learn about our latest features</p>
                  <a href="#" className="block text-indigo-400 group-hover:text-slate-100 transition duration-200">
                    Read our blog →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <Star className="h-6 w-6 text-yellow-400 animate-pulse" />
          <Sparkles className="h-6 w-6 text-blue-400 animate-spin-slow" />
        </div>
      </div>
    </div>
  )
}