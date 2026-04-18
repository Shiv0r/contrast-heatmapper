import { Ref } from '@/app/page';

export default async function init(canvasRef: Ref) {
  if (!navigator.gpu) throw new Error('Webgpu ist not supported.');

  let adapter;
  try {
    adapter = await navigator.gpu.requestAdapter();
  } catch (err) {
    console.error(err);
  }

  if (!adapter) throw new Error("Couldn't initials Webgpu adapter.");

  const device = await adapter.requestDevice();
  const canvasFormat = navigator.gpu.getPreferredCanvasFormat();
  const canvas = canvasRef.current;
  const context = canvas?.getContext('webgpu') as GPUCanvasContext | null;
  if (!context) throw new Error('Webgpu context not available.');

  context.configure({
    device,
    format: canvasFormat,
  });

  const encoder = device.createCommandEncoder();
  const pass = encoder.beginRenderPass({
    colorAttachments: [
      {
        view: context.getCurrentTexture().createView(),
        loadOp: 'clear',
        storeOp: 'store',
      },
    ],
  });

  pass.end();
  const commandBuffer = encoder.finish();
  device.queue.submit([commandBuffer]);
}
