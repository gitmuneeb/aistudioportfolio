
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
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 4;

    // Create a group to hold everything
    const group = new THREE.Group();
    scene.add(group);

    // Geometry 1: Abstract Torus Knot (Wireframe)
    const geometry = new THREE.TorusKnotGeometry(1.5, 0.4, 120, 20);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x6366f1, 
      wireframe: true, 
      transparent: true, 
      opacity: 0.15 
    });
    const mesh = new THREE.Mesh(geometry, material);
    group.add(mesh);

    // Geometry 2: Floating Particles
    const particlesCount = 800;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 12;
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.004,
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Interaction Variables
    let mouseX = 0;
    let mouseY = 0;
    let scrollY = 0;

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

      // Rotation
      mesh.rotation.y += 0.003;
      mesh.rotation.z += 0.001;
      particlesMesh.rotation.y -= 0.0005;

      // Interaction lerping
      group.position.x += (mouseX * 2 - group.position.x) * 0.05;
      group.position.y += (-mouseY * 2 - group.position.y) * 0.05;
      
      // Scroll effect
      group.position.z = scrollY * 0.002;
      group.rotation.x = scrollY * 0.001;

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
    };
  }, []);

  return null;
};

export default ThreeScene;
