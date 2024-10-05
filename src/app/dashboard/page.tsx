import React from "react";
import Stage from "@/components/Stage";
// import dynamic from 'next/dynamic';
// const Canvas = dynamic(() => import('@/components/stage/Canvas'), {
//   ssr: false,
// });
export default function page() {
  return (
    <main>
      <Stage />
    </main>
  );
}
