"use client";
import { useState, useEffect, useRef } from "react";
import { KonvaEventObject } from "konva/lib/Node";

import { Stage, Layer, Rect, Line } from "react-konva";

type TDimension2D = {
  x: number;
  y: number;
};

export default function Canvas() {
  const [coordinates, setCoordinates] = useState<TDimension2D>({
    x: 20,
    y: 20,
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
          // stroke="#374151"
          // stroke="white"
          strokeWidth={0.5}
        />
      );
    }

    for (let j = 0; j < height / gridSize; j++) {
      lines.push(
        <Line
          key={`h-${j}`}
          points={[0, j * gridSize, width, j * gridSize]}
          // stroke="#374151"
          // stroke="white"
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
          height: mainRef.current.offsetWidth,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const stageWidth = 1118;
  const stageHeight = 500;

  return (
    <>
      <main ref={mainRef} className="">
        {dimensions.width > 0 && (
          <Stage
            draggable
            // width={dimensions.width}
            // height={dimensions.height}
            // width={stageWidth}
            // height={stageHeight}
            width={window.innerWidth}
            height={window.innerHeight}
            style={{ width: "100vw", height: "100vh" }}
            className="bg-gray-900"
          >
            <Layer>
              {drawGrid(window.innerWidth, window.innerHeight)}
              <Rect
                {...coordinates}
                draggable
                x={0}
                y={0}
                width={stageWidth}
                height={stageHeight}
                fill="white"
                strokeWidth={2}
              />
            </Layer>
            {/* <Layer>
              {drawGrid(dimensions.width, dimensions.height)}
              <Rect
                {...coordinates}
                draggable
                onDragEnd={handleChangeShapePosition}
                width={75}
                height={25}
                fill="#3B82F6"
                stroke="#1E3A8A"
                strokeWidth={2}
              />
            </Layer> */}
          </Stage>
        )}
      </main>
    </>
  );
}
