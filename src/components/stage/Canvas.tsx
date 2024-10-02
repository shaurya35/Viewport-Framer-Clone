"use client";
import { useState } from "react";
import { KonvaEventObject } from "konva/lib/Node";
import { Stage, Layer, Rect, Line } from 'react-konva';
import Konva from 'konva';

type TDimension2D = {
  x: number;
  y: number;
};

export default function Canvas() {
  const [coordinates, setCoordinates] = useState<TDimension2D>({
    x: 10,
    y: 10,
  });

  // Recommended grid size for web components
  const gridSize = 10;  // Can also try 8px depending on preference

  // Function to generate grid lines
  const drawGrid = (width: number, height: number) => {
    const lines = [];
    
    // Vertical grid lines
    for (let i = 0; i < width / gridSize; i++) {
      lines.push(
        <Line
          key={`v-${i}`}
          points={[i * gridSize, 0, i * gridSize, height]}
          stroke="lightgrey"
          strokeWidth={0.5}
        />
      );
    }
    
    // Horizontal grid lines
    for (let j = 0; j < height / gridSize; j++) {
      lines.push(
        <Line
          key={`h-${j}`}
          points={[0, j * gridSize, width, j * gridSize]}
          stroke="lightgrey"
          strokeWidth={0.5}
        />
      );
    }

    return lines;
  };

  // Snap the shape to the grid
  const snapToGrid = (value: number) => {
    return Math.round(value / gridSize) * gridSize;
  };

  // Handle drag end event and snap the component to grid
  const handleChangeShapePosition = (e: KonvaEventObject<MouseEvent>) => {
    setCoordinates({
      x: snapToGrid(e.target.x()),
      y: snapToGrid(e.target.y()),
    });
  };

  return (
    <>
      <main className="">
        <Stage
          onDragEnd={handleChangeShapePosition}
          width={window.innerWidth}
          height={window.innerHeight}
          className="bg-white"
        >
          <Layer>
            {/* Render the grid */}
            {drawGrid(window.innerWidth, window.innerHeight)}

            {/* Example component: a draggable rectangle */}
            <Rect
              {...coordinates}
              draggable
              width={150}  // Example web component width
              height={50}  // Example web component height
              fill="red"
            />
          </Layer>
        </Stage>
      </main>
    </>
  );
}
