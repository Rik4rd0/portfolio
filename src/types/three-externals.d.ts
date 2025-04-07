declare module 'three/examples/jsm/loaders/GLTFLoader' {
  import { Loader } from 'three';
  import { Object3D } from 'three';

  export class GLTFLoader extends Loader {
    load(
      url: string,
      onLoad: (gltf: { scene: Object3D }) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
}