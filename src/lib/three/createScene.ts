import * as THREE from 'three';
import { disposeNode } from './disposalUtils';

export interface SceneFactoryOptions {
  fov?: number;
  near?: number;
  far?: number;
  cameraPosition?: [number, number, number];
}

export interface SceneFactoryResult {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  clock: THREE.Clock;
  resize: () => void;
  dispose: () => void;
}

function readCanvasSize(canvas: HTMLCanvasElement): { width: number; height: number } {
  const width = Math.max(1, canvas.clientWidth || window.innerWidth || 1);
  const height = Math.max(1, canvas.clientHeight || window.innerHeight || 1);
  return { width, height };
}

export function createScene(
  canvas: HTMLCanvasElement,
  options: SceneFactoryOptions = {},
): SceneFactoryResult {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(options.fov ?? 45, 1, options.near ?? 0.1, options.far ?? 1000);
  if (options.cameraPosition) {
    camera.position.set(...options.cameraPosition);
  }

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  });

  const clock = new THREE.Clock();

  const resize = (): void => {
    const { width, height } = readCanvasSize(canvas);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height, false);
  };

  const dispose = (): void => {
    disposeNode(scene);
    renderer.dispose();
    renderer.forceContextLoss();
  };

  resize();

  return { scene, camera, renderer, clock, resize, dispose };
}
