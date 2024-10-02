"use client";  
import React, { useState, useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Sidebar from '@/components/Sidebar';
import Canvas from '@/components/Canvas';
import PropertiesPanel from '@/components/PropertiesPanel';
import Controls from '@/components/Controls';

interface CanvasComponent {
  id: string;
  type: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  properties: any;
}

export default function Home() {
  const [canvasComponents, setCanvasComponents] = useState<CanvasComponent[]>([]);
  const [selectedComponentId, setSelectedComponentId] = useState<string | null>(null);
  const [undoStack, setUndoStack] = useState<CanvasComponent[][]>([]);
  const [redoStack, setRedoStack] = useState<CanvasComponent[][]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedComponents = JSON.parse(localStorage.getItem('canvasComponents') || '[]');
    if (savedComponents.length > 0) {
      setCanvasComponents(savedComponents);
    }
  }, []);

  // Save to localStorage when components change
  useEffect(() => {
    localStorage.setItem('canvasComponents', JSON.stringify(canvasComponents));
  }, [canvasComponents]);

  // Handle Drag End
  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    if (destination.droppableId === 'canvas') {
      const newComponent: CanvasComponent = {
        id: `${draggableId}-${canvasComponents.length + 1}`,
        type: draggableId,
        position: { 
          x: destination?.droppableProps?.style?.left || 100,  // Capturing the drop position for x
          y: destination?.droppableProps?.style?.top || 100,   // Capturing the drop position for y
        },
        size: { width: 100, height: 100 },
        properties: {},  // Initially empty, customized later
      };

      setUndoStack([...undoStack, canvasComponents]);  // Save current state for undo
      setRedoStack([]);  // Clear redo stack after new action

      setCanvasComponents([...canvasComponents, newComponent]);
    }
  };

  // Undo/Redo handlers
  const handleUndo = () => {
    if (undoStack.length === 0) return;
    const previousState = undoStack.pop();
    setRedoStack([...redoStack, canvasComponents]);
    setCanvasComponents(previousState!);
  };

  const handleRedo = () => {
    if (redoStack.length === 0) return;
    const nextState = redoStack.pop();
    setUndoStack([...undoStack, canvasComponents]);
    setCanvasComponents(nextState!);
  };

  // Delete Component handler
  const handleDelete = () => {
    if (selectedComponentId) {
      setUndoStack([...undoStack, canvasComponents]);
      setCanvasComponents((prevComponents) =>
        prevComponents.filter((component) => component.id !== selectedComponentId)
      );
      setSelectedComponentId(null);
    }
  };

  // Keyboard shortcuts for Delete and Undo/Redo
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Delete' && selectedComponentId) {
        handleDelete();
      }
      if (event.ctrlKey && event.key === 'z') {
        handleUndo();
      }
      if (event.ctrlKey && event.key === 'y') {
        handleRedo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedComponentId, canvasComponents, undoStack, redoStack]);

  const updateComponentProperties = (id: string, newProperties: any) => {
    setUndoStack([...undoStack, canvasComponents]);  // Save current state for undo
    setCanvasComponents((prevComponents) =>
      prevComponents.map((component) =>
        component.id === id ? { ...component, properties: newProperties } : component
      )
    );
  };

  const selectedComponent = canvasComponents.find((component) => component.id === selectedComponentId);

  const handleExport = () => {
    const generatedCode = generateJSXCode(canvasComponents);
    downloadCode(generatedCode, 'page.jsx', 'text/plain');  // Download the code as a JSX file
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex">
        <Sidebar />
        <Canvas
          components={canvasComponents}
          setComponents={setCanvasComponents}
          setSelectedComponentId={setSelectedComponentId}
        />
        <PropertiesPanel
          selectedComponent={selectedComponent}
          updateComponentProperties={updateComponentProperties}
          handleDelete={handleDelete}
        />
      </div>
      <Controls handleUndo={handleUndo} handleRedo={handleRedo} handleExport={handleExport} />
    </DragDropContext>
  );
}

// Helper function to generate JSX code from canvas components
const generateJSXCode = (components: CanvasComponent[]) => {
  return components
    .map((component) => {
      const { type, size, position, properties } = component;

      let componentCode = '';

      if (type === 'button') {
        componentCode = `<button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 w-full h-full" style={{
          backgroundColor: '${properties.backgroundColor}',
        }}>
          ${properties.text || 'Button'}
        </button>`;
      } else if (type === 'input') {
        componentCode = `<input type="text" placeholder="${properties.placeholder || 'Text Input'}" className="border p-2 w-full" style={{
          fontSize: '${properties.fontSize}px',
          padding: '${properties.padding}px',
        }} />`;
      } else if (type === 'image') {
        componentCode = `<img src="${properties.src || '/example.jpg'}" alt="Image" className="w-full h-full object-cover" />`;
      } else if (type === 'slider') {
        componentCode = `<input type="range" className="w-full" />`;
      }

      return `
        <div className="absolute" style={{
          top: '${position.y}px',
          left: '${position.x}px',
          width: '${size.width}px',
          height: '${size.height}px',
        }}>
          ${componentCode}
        </div>
      `;
    })
    .join('\n');
};

// Utility to download generated JSX code as a file
const downloadCode = (code: string, fileName: string, fileType: string) => {
  const blob = new Blob([code], { type: fileType });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
