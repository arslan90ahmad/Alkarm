"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Premium 3D background — drifting low-poly architecture + particle field,
 * with mouse parallax, fog depth, and accent lights matched to the brand palette.
 *
 * - Auto-disables on prefers-reduced-motion (CSS gradient mesh below shows through).
 * - Pauses when tab is hidden.
 * - Resizes with viewport.
 */
export default function PremiumBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const host = ref.current;
    if (!host) return;

    let disposed = false;

    const w = window.innerWidth;
    const h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.6);

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050b18, 0.018);

    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 220);
    camera.position.set(0, 4, 38);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }
    renderer.setPixelRatio(dpr);
    renderer.setSize(w, h);
    renderer.setClearColor(0x050b18, 1);
    host.appendChild(renderer.domElement);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.display = "block";

    // Lights — accent lights matched to brand palette
    scene.add(new THREE.AmbientLight(0x4264a0, 0.32));
    const azure = new THREE.PointLight(0x4fa8ff, 1.8, 90);
    azure.position.set(-22, 14, 12);
    scene.add(azure);
    const champagne = new THREE.PointLight(0xe8c672, 1.1, 80);
    champagne.position.set(20, -10, -4);
    scene.add(champagne);
    const rim = new THREE.DirectionalLight(0x8bbef0, 0.4);
    rim.position.set(0, 12, -10);
    scene.add(rim);

    // Architectural shapes — wireframe edges floating like distant buildings
    const buildings = new THREE.Group();
    scene.add(buildings);

    const edgeMat = new THREE.LineBasicMaterial({
      color: 0x4fa8ff,
      transparent: true,
      opacity: 0.45,
    });
    const fillMat = new THREE.MeshStandardMaterial({
      color: 0x0c1628,
      metalness: 0.6,
      roughness: 0.32,
      transparent: true,
      opacity: 0.78,
    });

    const COUNT = 26;
    const buildingData: {
      mesh: THREE.Mesh;
      edges: THREE.LineSegments;
      rotSpeed: number;
      floatSpeed: number;
      floatPhase: number;
      origY: number;
    }[] = [];
    for (let i = 0; i < COUNT; i++) {
      const tall = Math.random() > 0.55;
      const wWidth = THREE.MathUtils.randFloat(1.2, 3.2);
      const wHeight = tall
        ? THREE.MathUtils.randFloat(5, 13)
        : THREE.MathUtils.randFloat(1.4, 4);
      const wDepth = THREE.MathUtils.randFloat(1.2, 3.2);
      const geo = new THREE.BoxGeometry(wWidth, wHeight, wDepth);
      const mesh = new THREE.Mesh(geo, fillMat);
      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(geo),
        edgeMat
      );
      mesh.add(edges);

      const radius = THREE.MathUtils.randFloat(14, 64);
      const angle = Math.random() * Math.PI * 2;
      mesh.position.set(
        Math.cos(angle) * radius,
        THREE.MathUtils.randFloat(-12, 8),
        Math.sin(angle) * radius - 14
      );
      mesh.rotation.y = Math.random() * Math.PI;
      mesh.rotation.x = THREE.MathUtils.randFloat(-0.04, 0.04);

      buildings.add(mesh);
      buildingData.push({
        mesh,
        edges,
        rotSpeed: THREE.MathUtils.randFloat(-0.12, 0.12) * 0.01,
        floatSpeed: THREE.MathUtils.randFloat(0.18, 0.36),
        floatPhase: Math.random() * Math.PI * 2,
        origY: mesh.position.y,
      });
    }

    // Particle field — golden + azure motes
    const particleCount = 380;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const azureColor = new THREE.Color(0x4fa8ff);
    const champagneColor = new THREE.Color(0xe8c672);
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = THREE.MathUtils.randFloat(-80, 80);
      positions[i3 + 1] = THREE.MathUtils.randFloat(-40, 40);
      positions[i3 + 2] = THREE.MathUtils.randFloat(-60, 30);
      const c = Math.random() > 0.78 ? champagneColor : azureColor;
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Ground "horizon" plane with subtle gradient
    const planeGeo = new THREE.PlaneGeometry(220, 220, 1, 1);
    const planeMat = new THREE.ShaderMaterial({
      uniforms: {
        uTop: { value: new THREE.Color(0x0a1226) },
        uBot: { value: new THREE.Color(0x050b18) },
      },
      vertexShader: `
        varying float vY;
        void main() {
          vY = position.y;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uTop;
        uniform vec3 uBot;
        varying float vY;
        void main() {
          float t = smoothstep(-110.0, 110.0, vY);
          gl_FragColor = vec4(mix(uBot, uTop, t), 1.0);
        }
      `,
      depthWrite: false,
    });
    const plane = new THREE.Mesh(planeGeo, planeMat);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -22;
    scene.add(plane);

    // Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    let camTargetX = 0;
    let camTargetY = 4;
    const onMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

    // Resize
    const onResize = () => {
      const nw = window.innerWidth;
      const nh = window.innerHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    // Visibility pause
    let running = true;
    const onVis = () => {
      running = document.visibilityState === "visible";
      if (running) tick();
    };
    document.addEventListener("visibilitychange", onVis);

    // Animation loop (performance.now — avoids THREE.Clock deprecation console.error)
    let raf = 0;
    const startMs = performance.now();
    let lastMs = startMs;
    const tick = () => {
      if (!running || disposed) return;
      const now = performance.now();
      const dt = Math.min((now - lastMs) / 1000, 0.1);
      lastMs = now;
      const t = (now - startMs) / 1000;

      buildings.rotation.y += dt * 0.024;
      buildingData.forEach((b) => {
        b.mesh.rotation.y += b.rotSpeed;
        b.mesh.position.y = b.origY + Math.sin(t * b.floatSpeed + b.floatPhase) * 0.6;
      });

      particles.rotation.y += dt * 0.012;
      particles.rotation.x = Math.sin(t * 0.08) * 0.04;

      // Azure light orbits subtly
      azure.position.x = Math.cos(t * 0.18) * 26;
      azure.position.z = Math.sin(t * 0.18) * 26 + 6;
      champagne.position.x = Math.cos(t * 0.12 + 2) * 22;
      champagne.position.z = Math.sin(t * 0.12 + 2) * 22 - 4;

      camTargetX += (mouseX * 4 - camTargetX) * 0.04;
      camTargetY += (4 - mouseY * 2.5 - camTargetY) * 0.04;
      camera.position.x = camTargetX;
      camera.position.y = camTargetY;
      camera.lookAt(0, 0, -8);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      disposed = true;
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      planeGeo.dispose();
      planeMat.dispose();
      buildingData.forEach((b) => {
        b.mesh.geometry.dispose();
        (b.edges.geometry as THREE.BufferGeometry).dispose();
      });
      edgeMat.dispose();
      fillMat.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ contain: "strict" }}
    />
  );
}
