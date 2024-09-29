"use client";

import React from 'react';

interface ControlsProps {
  handleUndo: () => void;
  handleRedo: () => void;
  handleExport: () => void;  // Export to JSX/HTML
}

const Controls = ({ handleUndo, handleRedo, handleExport }: ControlsProps) => {
  return (
    <div className="fixed bottom-4 left-4">
      <button
        onClick={handleUndo}
        className="bg-gray-800 text-white p-2 rounded mr-2"
      >
        Undo
      </button>
      <button
        onClick={handleRedo}
        className="bg-gray-800 text-white p-2 rounded mr-2"
      >
        Redo
      </button>
      <button
        onClick={handleExport}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Export to Code
      </button>
    </div>
  );
};

export default Controls;
