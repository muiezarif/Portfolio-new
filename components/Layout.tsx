import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import styles from '../styles/Home.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('three').then((THREE) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);

        const geometries = [
          new THREE.BoxGeometry(1, 1, 1),
          new THREE.SphereGeometry(0.7, 32, 32),
          new THREE.TorusGeometry(0.6, 0.2, 8, 16),
          new THREE.IcosahedronGeometry(0.8)
        ];

        const materials = [
          new THREE.MeshBasicMaterial({ color: 0x3b82f6, wireframe: true, transparent: true, opacity: 0.3 }),
          new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true, transparent: true, opacity: 0.2 }),
          new THREE.MeshBasicMaterial({ color: 0x06b6d4, wireframe: true, transparent: true, opacity: 0.25 })
        ];

        const meshes: any[] = [];
        const meshAnimations: { speed: number, direction: any, rotationSpeed: any }[] = [];
        
        for (let i = 0; i < 25; i++) {
          const geometry = geometries[Math.floor(Math.random() * geometries.length)];
          const material = materials[Math.floor(Math.random() * materials.length)];
          const mesh = new THREE.Mesh(geometry, material);
          
          mesh.position.set((Math.random() - 0.5) * 30, (Math.random() - 0.5) * 25, (Math.random() - 0.5) * 25);
          scene.add(mesh);
          meshes.push(mesh);
          
          meshAnimations.push({
            speed: 0.001,
            direction: new THREE.Vector3((Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.01),
            rotationSpeed: new THREE.Vector3((Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.01)
          });
        }

        camera.position.z = 10;

        const animate = () => {
          requestAnimationFrame(animate);
          const time = Date.now() * 0.001;
          meshes.forEach((mesh, index) => {
            const anim = meshAnimations[index];
            mesh.rotation.x += anim.rotationSpeed.x;
            mesh.rotation.y += anim.rotationSpeed.y;
            mesh.position.x += Math.sin(time + index) * 0.005;
            mesh.position.y += Math.cos(time + index) * 0.005;
          });
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
          window.removeEventListener('resize', handleResize);
          renderer.dispose();
        };
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <canvas ref={canvasRef} className={styles.threeCanvas} />
      <Navbar />
      <div className={styles.layoutContent}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
