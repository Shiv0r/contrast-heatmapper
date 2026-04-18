'use client';

import { useRef } from 'react';
import useWebgpu from './Components/hooks/useWebgpu';

export type Ref = React.RefObject<HTMLCanvasElement | null>;

export default function Home() {
  const webgpuCanvas: Ref = useRef(null);
  useWebgpu(webgpuCanvas);

  return (
    <>
      <p>blabla</p>
      <div>
        <canvas ref={webgpuCanvas} height={512} width={512}></canvas>
      </div>
    </>
  );
}
