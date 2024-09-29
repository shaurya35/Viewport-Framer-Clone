"use client"
import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const components = [
  { id: 'button', content: 'Button' },
  { id: 'input', content: 'Text Input' },
  { id: 'image', content: 'Image' },
];

const Sidebar = () => {
  return (
    <div className="w-1/4 h-screen bg-gray-100 p-4">
      <h3 className="text-xl font-bold mb-4">Components</h3>
      <Droppable droppableId="sidebar">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="space-y-4"
          >
            {components.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="p-4 bg-white border rounded shadow cursor-pointer"
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Sidebar;
