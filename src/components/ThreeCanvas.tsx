import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.035);

    // Camera
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.z = 24;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Main 3D World Group
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // 1. Primary Rotating Wireframe Globe (Behind Hero & responsive to scroll)
    const globeGroup = new THREE.Group();
    globeGroup.position.set(0, 0, 0);
    worldGroup.add(globeGroup);

    // Outer Icosahedron Wireframe Sphere
    const outerGeo = new THREE.IcosahedronGeometry(9, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0xF27D26,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    globeGroup.add(outerMesh);

    // Inner Geometric Dodecahedron Core
    const innerGeo = new THREE.DodecahedronGeometry(5.4, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    globeGroup.add(innerMesh);

    // Vertices Node Points on the Outer Globe
    const vertexPositions = outerGeo.attributes.position;
    const vertexPointsGeo = new THREE.BufferGeometry();
    vertexPointsGeo.setAttribute('position', vertexPositions);
    const vertexPointsMat = new THREE.PointsMaterial({
      color: 0xF27D26,
      size: 0.35,
      transparent: true,
      opacity: 0.85,
    });
    const vertexPoints = new THREE.Points(vertexPointsGeo, vertexPointsMat);
    globeGroup.add(vertexPoints);

    // 2. Orbital Rings around Globe
    const ringGeo1 = new THREE.TorusGeometry(12, 0.04, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xF27D26,
      transparent: true,
      opacity: 0.35,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 3;
    globeGroup.add(ringMesh1);

    const ringGeo2 = new THREE.TorusGeometry(14, 0.03, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.2,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.y = Math.PI / 4;
    ringMesh2.rotation.x = -Math.PI / 6;
    globeGroup.add(ringMesh2);

    // 3. Floating Secondary Geometric Wireframe Nodes distributed across the page height
    const secondaryNodesGroup = new THREE.Group();
    worldGroup.add(secondaryNodesGroup);

    const smallGeo1 = new THREE.OctahedronGeometry(2.2, 0);
    const smallMat1 = new THREE.MeshBasicMaterial({
      color: 0xF27D26,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const smallNode1 = new THREE.Mesh(smallGeo1, smallMat1);
    smallNode1.position.set(-18, -15, -10);
    secondaryNodesGroup.add(smallNode1);

    const smallGeo2 = new THREE.IcosahedronGeometry(2.8, 0);
    const smallMat2 = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    });
    const smallNode2 = new THREE.Mesh(smallGeo2, smallMat2);
    smallNode2.position.set(19, -32, -8);
    secondaryNodesGroup.add(smallNode2);

    const smallGeo3 = new THREE.TetrahedronGeometry(3.2, 0);
    const smallMat3 = new THREE.MeshBasicMaterial({
      color: 0xF27D26,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const smallNode3 = new THREE.Mesh(smallGeo3, smallMat3);
    smallNode3.position.set(-16, -55, -12);
    secondaryNodesGroup.add(smallNode3);

    const smallGeo4 = new THREE.DodecahedronGeometry(2.5, 0);
    const smallMat4 = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const smallNode4 = new THREE.Mesh(smallGeo4, smallMat4);
    smallNode4.position.set(17, -78, -10);
    secondaryNodesGroup.add(smallNode4);

    // 4. Starfield / Constellation Particle Cloud distributed through the entire page depth
    const particleCount = 350;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const orangeColor = new THREE.Color(0xF27D26);
    const whiteColor = new THREE.Color(0xffffff);
    const amberColor = new THREE.Color(0xffaa44);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 60; // X spread
      positions[i + 1] = (Math.random() - 0.5) * 140 - 20; // Y spread down the scroll
      positions[i + 2] = (Math.random() - 0.5) * 45 - 5; // Z depth

      const rand = Math.random();
      const chosenColor = rand > 0.65 ? orangeColor : rand > 0.3 ? whiteColor : amberColor;
      colors[i] = chosenColor.r;
      colors[i + 1] = chosenColor.g;
      colors[i + 2] = chosenColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    worldGroup.add(particles);

    // Scroll & Mouse Interaction Tracking
    let scrollY = 0;
    let targetScrollY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleScroll = () => {
      targetScrollY = window.scrollY || document.documentElement.scrollTop;
    };

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.0006;
      mouseY = (event.clientY - windowHalfY) * 0.0006;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetMouseX += (mouseX - targetMouseX) * 0.05;
      targetMouseY += (mouseY - targetMouseY) * 0.05;

      // Smooth scroll interpolation
      scrollY += (targetScrollY - scrollY) * 0.05;

      // Camera responds to scroll smoothly
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const scrollFraction = scrollY / maxScroll;
      camera.position.y = -scrollFraction * 50;

      // Primary Globe rotations
      globeGroup.rotation.y = elapsedTime * 0.12 + targetMouseX * 1.5;
      globeGroup.rotation.x = elapsedTime * 0.08 + targetMouseY * 1.5;
      globeGroup.rotation.z = Math.sin(elapsedTime * 0.05) * 0.1;

      // Core counter-rotation
      innerMesh.rotation.y = -elapsedTime * 0.18;
      innerMesh.rotation.x = -elapsedTime * 0.14;

      // Orbital rings rotation
      ringMesh1.rotation.z = elapsedTime * 0.1;
      ringMesh2.rotation.z = -elapsedTime * 0.08;

      // Secondary nodes continuous ambient floating and rotating
      smallNode1.rotation.x = elapsedTime * 0.2;
      smallNode1.rotation.y = elapsedTime * 0.25;
      smallNode1.position.y = -15 + Math.sin(elapsedTime * 0.8) * 1.5;

      smallNode2.rotation.y = elapsedTime * 0.18;
      smallNode2.rotation.z = elapsedTime * 0.22;
      smallNode2.position.y = -32 + Math.cos(elapsedTime * 0.7) * 1.5;

      smallNode3.rotation.x = -elapsedTime * 0.25;
      smallNode3.rotation.z = elapsedTime * 0.15;
      smallNode3.position.y = -55 + Math.sin(elapsedTime * 0.9) * 1.8;

      smallNode4.rotation.y = -elapsedTime * 0.2;
      smallNode4.rotation.x = elapsedTime * 0.18;
      smallNode4.position.y = -78 + Math.cos(elapsedTime * 0.6) * 1.5;

      // Particle cloud subtle ambient drift
      particles.rotation.y = elapsedTime * 0.02 + targetMouseX * 0.4;
      particles.rotation.x = -elapsedTime * 0.015 + targetMouseY * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      vertexPointsGeo.dispose();
      vertexPointsMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      smallGeo1.dispose();
      smallMat1.dispose();
      smallGeo2.dispose();
      smallMat2.dispose();
      smallGeo3.dispose();
      smallMat3.dispose();
      smallGeo4.dispose();
      smallMat4.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      id="three-canvas-container"
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-85"
      aria-hidden="true"
    />
  );
};
