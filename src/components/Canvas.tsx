"use client";

import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Draggable from 'react-draggable';
import { Resizable, ResizeCallbackData } from 'react-resizable';
import FramerLikeGrid from './FramerLikeGrid';

interface CanvasProps {
  components: Array<{ id: string; type: string; position: { x: number; y: number }; size: { width: number; height: number }; properties: any }>;
  setComponents: React.Dispatch<React.SetStateAction<any[]>>;
  setSelectedComponentId: React.Dispatch<React.SetStateAction<string | null>>;
}

const SNAP_GRID_SIZE = 20; // Snap to 20px grid

const snapToGrid = (value: number, gridSize: number) => {
  return Math.round(value / gridSize) * gridSize;
};

const Canvas = ({ components, setComponents, setSelectedComponentId }: CanvasProps) => {

  const handleResize = (index: number, _event: any, { size }: ResizeCallbackData) => {
    const updatedComponents = [...components];
    updatedComponents[index].size = { width: size.width, height: size.height };
    setComponents(updatedComponents);
  };

  const handleDrag = (index: number, _e: any, data: any) => {
    const updatedComponents = [...components];
    const newX = Math.max(0, Math.min(data.x, 800 - updatedComponents[index].size.width));  // Assuming canvas width of 800px
    const newY = Math.max(0, Math.min(data.y, 600 - updatedComponents[index].size.height)); // Assuming canvas height of 600px
    updatedComponents[index].position = {
      x: snapToGrid(newX, SNAP_GRID_SIZE),
      y: snapToGrid(newY, SNAP_GRID_SIZE),
    };
    setComponents(updatedComponents);
  };

  return (
    <div className="w-3/4 h-screen relative bg-gray-50 p-4 overflow-hidden">
      <FramerLikeGrid gap={SNAP_GRID_SIZE} />
      
      <Droppable droppableId="canvas">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="w-full h-full bg-white border-2 border-dashed border-gray-300 relative"
          >
            {components.map((component, index) => {
              const properties = component.properties || {}; // Ensure properties is defined
              const { backgroundColor = '#ffffff', padding = '0px', margin = '0px', borderRadius = '0px' } = properties;

              return (
                <Draggable
                  key={component.id}
                  defaultPosition={{ x: component.position.x, y: component.position.y }}
                  grid={[SNAP_GRID_SIZE, SNAP_GRID_SIZE]}  // Snap to grid while dragging
                  onStop={(e, data) => handleDrag(index, e, data)}
                >
                  <div style={{ width: `${component.size.width}px`, height: `${component.size.height}px` }}>
                    <Resizable
                      width={component.size.width}
                      height={component.size.height}
                      onResize={(e, data) => handleResize(index, e, data)} // Track resize in real-time
                      onResizeStop={(e, data) => handleResize(index, e, data)} // Ensure resize persists after stop
                      minConstraints={[50, 50]}
                      className="group"
                    >
                      <div
                        onClick={() => setSelectedComponentId(component.id)}
                        style={{
                          width: `${component.size.width}px`,
                          height: `${component.size.height}px`,
                          border: '1px solid #ccc',
                          backgroundColor,  // Use destructured default value
                          padding,  // Use destructured default value
                          margin,  // Ensure no default margin
                          textAlign: 'center',
                          borderRadius,  // Ensure no default border-radius
                          cursor: 'move',
                          position: 'relative',
                        }}
                        className="group relative"
                      >
                        {/* Render based on component type */}
                        {component.type === 'button' && (
                          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 w-full h-full">
                            {properties?.text || 'Button'}
                          </button>
                        )}
                        {component.type === 'input' && (
                          <input
                            type="text"
                            placeholder={properties?.placeholder || 'Text Input'}
                            className="border p-2 w-full rounded-lg"
                            style={{ fontSize: properties?.fontSize || '16px' }}
                          />
                        )}
                        {component.type === 'image' && (
                          <img
                            src={properties?.src || '/example.jpg'}
                            alt="Example"
                            className="w-full h-full rounded-lg object-cover"
                          />
                        )}
                        {component.type === 'slider' && (
                          <input type="range" className="w-full rounded-lg" />
                        )}
                      </div>
                    </Resizable>
                  </div>
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Canvas;
