'use client';

import init from '@/app/webgpu/init';
import { Ref } from '@/app/page';
import { useEffect } from 'react';

export default function useWebgpu(canvasRef: Ref): void {
  useEffect(() => {
    (async () => {
      await init(canvasRef);
    })();
  }, [canvasRef]);
}
