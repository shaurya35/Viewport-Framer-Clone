import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, Layers, Square, Type, Users } from "lucide-react";

import dynamic from "next/dynamic";
const Canvas = dynamic(() => import("@/components/stage/Canvas"), {
  ssr: false,
});

export default function Stage() {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-4">
          <Square className="w-8 h-8 text-blue-400" />
          <h1 className="text-xl font-semibold">Viewport</h1>
          <nav className="hidden md:flex space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-gray-700"
            >
              File
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Edit
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-gray-700"
            >
              View
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Help
            </Button>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="text-gray-100 border-gray-600 hover:border-gray-500 hover:text-white bg-gray-700 hover:bg-gray-600"
          >
            Share
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Users className="mr-2 h-4 w-4" />
            Collaborate
          </Button>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar */}
        <aside className="w-64 bg-gray-800 text-gray-300 flex flex-col py-4 space-y-4 border-r border-gray-700">
          <div className="px-4">
            <Button
              variant="ghost"
              className="w-full justify-start hover:bg-gray-700 hover:text-white"
            >
              <Layers className="h-5 w-5 mr-2" />
              Layers
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start hover:bg-gray-700 hover:text-white"
            >
              <Type className="h-5 w-5 mr-2" />
              Text
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start hover:bg-gray-700 hover:text-white"
            >
              <Square className="h-5 w-5 mr-2" />
              Shapes
            </Button>
          </div>
          <div className="px-4 pt-4 border-t border-gray-700">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Recent Files
            </h2>
            <ul className="space-y-2">
              <li>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start hover:bg-gray-700 hover:text-white"
                >
                  Project A
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start hover:bg-gray-700 hover:text-white"
                >
                  Website Mockup
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start hover:bg-gray-700 hover:text-white"
                >
                  App Design
                </Button>
              </li>
            </ul>
          </div>
        </aside>

        {/* Canvas */}
        <main className="flex-1 overflow-auto bg-gray-900 p-4 pt-20">
          <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg h-[300] w-[50rem] mx-auto">
            {/* Canvas content would go here */}
            <Canvas />
          </div>
        </main>

        {/* Right sidebar */}
        <aside className="w-64 bg-gray-800 border-l border-gray-700 p-4 overflow-y-auto">
          <Tabs defaultValue="design">
            <TabsList className="grid w-full grid-cols-2 bg-gray-700">
              <TabsTrigger
                value="design"
                className="data-[state=active]:bg-gray-600 text-gray-300 data-[state=active]:text-white"
              >
                Design
              </TabsTrigger>
              <TabsTrigger
                value="prototype"
                className="data-[state=active]:bg-gray-600 text-gray-300 data-[state=active]:text-white"
              >
                Prototype
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Opacity
              </label>
              <Slider
                defaultValue={[100]}
                max={100}
                step={1}
                className="mt-2"
                style={
                  {
                    "--slider-track-background": "#4B5563",
                    "--slider-range-background": "#3B82F6",
                    "--slider-thumb-background": "#3B82F6",
                    "--slider-thumb-border": "2px solid #3B82F6",
                  } as React.CSSProperties
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Fill
              </label>
              <div className="mt-2 flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full" />
                <Input
                  type="text"
                  value="#3B82F6"
                  className="w-24 bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Stroke
              </label>
              <div className="mt-2 flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-400 rounded-full" />
                <Input
                  type="text"
                  value="#9CA3AF"
                  className="w-24 bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
