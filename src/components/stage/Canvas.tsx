"use client";
import { useState } from "react";
import { KonvaEventObject } from "konva/lib/Node";
import Konva from "konva";

// @ts-ignore
import { Stage, Layer, Rect, Line } from "react-konva";

type TDimension2D = {
  x: number;
  y: number;
};

export default function Canvas() {
  const [coordinates, setCoordinates] = useState<TDimension2D>({
    x: 10,
    y: 10,
  });

  const gridSize = 10;

  const drawGrid = (width: number, height: number) => {
    const lines = [];

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

  const snapToGrid = (value: number) => {
    return Math.round(value / gridSize) * gridSize;
  };

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
            {drawGrid(window.innerWidth, window.innerHeight)}

            <Rect
              {...coordinates}
              draggable
              width={150}
              height={50}
              fill="red"
            />
          </Layer>
        </Stage>
      </main>
    </>
  );
}
