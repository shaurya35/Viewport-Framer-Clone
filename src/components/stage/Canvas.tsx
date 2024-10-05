"use client";
import { useState, useEffect, useRef } from "react";
import { KonvaEventObject } from "konva/lib/Node";

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
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const mainRef = useRef<HTMLDivElement | null>(null);

  const gridSize = 50;

  const drawGrid = (width: number, height: number) => {
    const lines = [];

    for (let i = 0; i < width / gridSize; i++) {
      lines.push(
        <Line
          key={`v-${i}`}
          points={[i * gridSize, 0, i * gridSize, height]}
          stroke="#374151" 
          strokeWidth={0.5}
        />
      );
    }

    for (let j = 0; j < height / gridSize; j++) {
      lines.push(
        <Line
          key={`h-${j}`}
          points={[0, j * gridSize, width, j * gridSize]}
          stroke="#374151" 
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

  useEffect(() => {
    const updateDimensions = () => {
      if (mainRef.current) {
        setDimensions({
          width: mainRef.current.offsetWidth,
          height: window.innerHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <>
      <main ref={mainRef} className="w-full h-full">
        {dimensions.width > 0 && (
          <Stage
            onDragEnd={handleChangeShapePosition}
            width={dimensions.width}
            height={dimensions.height}
            className="bg-gray-800" 
          >
            <Layer>
              {drawGrid(dimensions.width, dimensions.height)}

              <Rect
                {...coordinates}
                draggable
                width={150}
                height={50}
                fill="#3B82F6" 
                stroke="#1E3A8A"
                strokeWidth={2}
              />
            </Layer>
          </Stage>
        )}
      </main>
    </>
  );
}
