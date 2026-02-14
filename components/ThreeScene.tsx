import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<boolean>(false);

  useEffect(() => {
    if (mountRef.current) return;
    mountRef.current = true;

    const canvas = document.getElementById('three-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance" 
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 8;

    // Particle Flux System
    const count = 1500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const color1 = new THREE.Color("#6366f1"); // Primary
    const color2 = new THREE.Color("#ffffff"); // White accents

    for (let i = 0; i < count; i++) {
      // Randomly place particles in a cylindrical/vortex shape
      const angle = Math.random() * Math.PI * 2;
      const radius = 5 + Math.random() * 15;
      const x = Math.cos(angle) * radius;
      const y = (Math.random() - 0.5) * 30;
      const z = Math.sin(angle) * radius;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Blend colors
      const mixedColor = color1.clone().lerp(color2, Math.random() * 0.2);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;

      sizes[i] = Math.random() * 2;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Grid Plane (Subtle background reference)
    const gridHelper = new THREE.GridHelper(50, 50, 0x6366f1, 0x111111);
    gridHelper.position.y = -10;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.05;
    scene.add(gridHelper);

    // Interaction Variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;
    let time = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) - 0.5;
      mouseY = (event.clientY / window.innerHeight) - 0.5;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.002;

      // Rotate points based on time and scroll
      points.rotation.y = time * 0.5 + scrollY * 0.0005;
      points.rotation.z = time * 0.2;

      // Mouse following
      targetX = mouseX * 2;
      targetY = -mouseY * 2;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Pulse points
      material.opacity = 0.3 + Math.sin(time * 5) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return null;
};

export default ThreeScene;