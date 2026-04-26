import * as THREE from 'three';

function isDisposableTexture(value: unknown): value is THREE.Texture {
  return Boolean(value) && typeof value === 'object' && 'isTexture' in value;
}

function disposeMaterial(material: THREE.Material): void {
  const materialValues = Object.values(material as Record<string, unknown>);
  for (const value of materialValues) {
    if (isDisposableTexture(value)) {
      value.dispose();
    }
  }
  material.dispose();
}

export function disposeNode(node: THREE.Object3D): void {
  node.traverse((child) => {
    const maybeMesh = child as THREE.Mesh | THREE.Points;

    if ('geometry' in maybeMesh && maybeMesh.geometry) {
      maybeMesh.geometry.dispose();
    }

    if ('material' in maybeMesh && maybeMesh.material) {
      if (Array.isArray(maybeMesh.material)) {
        maybeMesh.material.forEach((material) => disposeMaterial(material));
      } else {
        disposeMaterial(maybeMesh.material);
      }
    }
  });
}
