'use client';
import dynamic from 'next/dynamic';

const Canvas = dynamic(() => import('@/components/stage/Canvas'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <main className="">
        <Canvas/>
      </main>
    </>
  );
}
