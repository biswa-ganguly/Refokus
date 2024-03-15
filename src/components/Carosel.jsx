import React, { useState } from 'react';
import { useSpring, a } from 'react-spring/three';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';

const ThreeDCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    'https://picsum.photos/id/1015/536/354',
    'https://picsum.photos/id/1016/536/354',
    'https://picsum.photos/id/1018/536/354',
    'https://picsum.photos/id/1019/536/354',
    'https://picsum.photos/id/1020/536/354',
  ];

  const imageSprings = useSpring({
    transform: images.map((_, index) =>
      index === activeIndex
        ? `rotateY(0deg) translateZ(200px)`
        : `rotateY(${index * 30}deg) translateZ(0px)`
    ),
  });

  useFrame(() => {
    imageSprings.start({
      transform: images.map((_, index) =>
        index === activeIndex
          ? `rotateY(0deg) translateZ(200px)`
          : `rotateY(${index * 30}deg) translateZ(0px)`
      ),
    });
  });

  return (
    <div className="relative w-full h-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight intensity={0.8} position={[50, 50, 50]} />
        <OrbitControls enableZoom={false} />
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <a.mesh
              key={index}
              position={[0, 0, 0]}
              rotation={[0, Math.PI * 2 * index / images.length, 0]}
              scale={imageSprings.transform[index].map((val) => val)}
            >
              <planeBufferGeometry args={[1, 1, 32, 32]} />
              <a.meshBasicMaterial attach="material" side={THREE.DoubleSide}>
                <a.image url={image} />
              </a.meshBasicMaterial>
            </a.mesh>
          ))}
        </div>
      </Canvas>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gray-900 flex justify-center items-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full mx-2 cursor-pointer ${
              index === activeIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ThreeDCarousel;