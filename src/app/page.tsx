import Sidebar from '@/components/stage/Sidebar'

import dynamic from 'next/dynamic';

const Canvas = dynamic(() => import('@/components/stage/Canvas'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <main className="flex">
        <Sidebar/>
        <Canvas/>
      </main>
    </>
  );
}
