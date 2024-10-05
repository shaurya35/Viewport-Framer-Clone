
// import dynamic from 'next/dynamic';
// const Canvas = dynamic(() => import('@/components/stage/Canvas'), {
  //   ssr: false,
  // });
  
  import Stage from '@/components/Stage'
export default function Home() {
  return (
    <>
      <main className="">
        <Stage/>
        {/* <Canvas/> */}
      </main>
    </>
  );
}
