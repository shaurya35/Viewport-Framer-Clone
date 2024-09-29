"use client"; // Ensures this is a client-side component

import React, { FC } from "react";

interface GridProps {
  gap: number;
}

const FramerLikeGrid: FC<GridProps> = ({ gap }) => {
  const gridStyle = {
    backgroundSize: `${gap}px ${gap}px`,
    backgroundImage: `linear-gradient(to right, #ddd 1px, transparent 1px), 
                      linear-gradient(to bottom, #ddd 1px, transparent 1px)`,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  return <div style={gridStyle} />;
};

export default FramerLikeGrid;
