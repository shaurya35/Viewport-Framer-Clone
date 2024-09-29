"use client";

import React, { useState, useEffect } from 'react';

interface PropertiesPanelProps {
  selectedComponent: any;
  updateComponentProperties: (id: string, newProperties: any) => void;
}

const PropertiesPanel = ({ selectedComponent, updateComponentProperties }: PropertiesPanelProps) => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [padding, setPadding] = useState('0');
  const [margin, setMargin] = useState('0');
  const [borderRadius, setBorderRadius] = useState('0');

  useEffect(() => {
    if (selectedComponent) {
      setBackgroundColor(selectedComponent.properties.backgroundColor || '#ffffff');
      setPadding(selectedComponent.properties.padding || '0');
      setMargin(selectedComponent.properties.margin || '0');
      setBorderRadius(selectedComponent.properties.borderRadius || '0');
    }
  }, [selectedComponent]);

  const handleUpdate = () => {
    const newProperties = { backgroundColor, padding, margin, borderRadius };
    updateComponentProperties(selectedComponent.id, newProperties);
  };

  if (!selectedComponent) return null;

  return (
    <div className="w-1/4 h-screen bg-gray-100 p-4">
      <h3 className="text-xl font-bold mb-4">Component Properties</h3>

      <label className="block mb-2">Background Color</label>
      <input
        type="color"
        value={backgroundColor}
        onChange={(e) => setBackgroundColor(e.target.value)}
        className="p-2 mb-4 w-full"
      />

      <label className="block mb-2">Padding (px)</label>
      <input
        type="number"
        value={padding}
        onChange={(e) => setPadding(e.target.value)}
        className="p-2 border mb-4 w-full"
      />

      <label className="block mb-2">Margin (px)</label>
      <input
        type="number"
        value={margin}
        onChange={(e) => setMargin(e.target.value)}
        className="p-2 border mb-4 w-full"
      />

      <label className="block mb-2">Border Radius (px)</label>
      <input
        type="number"
        value={borderRadius}
        onChange={(e) => setBorderRadius(e.target.value)}
        className="p-2 border mb-4 w-full"
      />

      <button onClick={handleUpdate} className="bg-blue-500 text-white p-2 rounded w-full">
        Update Component
      </button>
    </div>
  );
};

export default PropertiesPanel;
