"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Eye, Shield, Cpu, Volume2, RotateCcw, Box } from "lucide-react";

export interface SubsystemInfo {
  id: "all" | "cameras" | "sonar" | "compute" | "audio";
  name: string;
  badge: string;
  description: string;
  specs: string;
}

const SUBSYSTEMS: SubsystemInfo[] = [
  {
    id: "all",
    name: "Full Hardware Assembly",
    badge: "Integrated Rig",
    description: "Lightweight titanium-acetate frame integrating edge computer vision and spatial distance sensors.",
    specs: "Weight: 48g · Battery: 4.5h continuous inference",
  },
  {
    id: "cameras",
    name: "Dual Miniature Vision Sensors",
    badge: "Stereo Perception",
    description: "Twin forward-facing 120° FOV micro-cameras delivering low-latency video feed for YOLO obstacle detection.",
    specs: "1080p @ 30fps · Low-light ISP · 15ms frame capture",
  },
  {
    id: "sonar",
    name: "Ultrasonic Distance Transducer",
    badge: "Proximity Sensor",
    description: "Bridge-mounted sonar emitter calculating precise distance (0.1m - 4.0m) to obstacles independent of ambient light.",
    specs: "40kHz ultrasonic pulse · ±1.5cm spatial resolution",
  },
  {
    id: "compute",
    name: "ESP32 / Edge Neural Compute Unit",
    badge: "Edge Processing",
    description: "Temple-embedded microcontroller and Bluetooth bridge orchestrating real-time sensor fusion and alert dispatch.",
    specs: "Dual-core 240MHz · BLE 5.0 telemetry · On-device filtering",
  },
  {
    id: "audio",
    name: "Bone-Conduction Audio Transducers",
    badge: "Directional Feedback",
    description: "Mastoid contact transducers delivering directional audio cues without blocking natural ambient ear perception.",
    specs: "Directional stereo panning · Frequency: 20Hz - 20kHz",
  },
];

export default function SafeSightModel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedSubsystem, setSelectedSubsystem] = useState<SubsystemInfo["id"]>("all");
  const [isInteracting, setIsInteracting] = useState(false);

  // References to keep animation and Three.js state across renders
  const stateRef = useRef<{
    renderer: THREE.WebGLRenderer | null;
    scene: THREE.Scene | null;
    camera: THREE.PerspectiveCamera | null;
    modelGroup: THREE.Group | null;
    cameraPods: THREE.Group | null;
    sonarMesh: THREE.Group | null;
    computePod: THREE.Group | null;
    audioTransducers: THREE.Group | null;
    targetRotation: { x: number; y: number };
    currentRotation: { x: number; y: number };
    isDragging: boolean;
    previousMousePosition: { x: number; y: number };
    animId: number | null;
  }>({
    renderer: null,
    scene: null,
    camera: null,
    modelGroup: null,
    cameraPods: null,
    sonarMesh: null,
    computePod: null,
    audioTransducers: null,
    targetRotation: { x: 0.15, y: -0.35 },
    currentRotation: { x: 0.15, y: -0.35 },
    isDragging: false,
    previousMousePosition: { x: 0, y: 0 },
    animId: null,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 400;

    // 1. Scene & Camera setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.25, 2.6);

    // 2. High-performance Antialiased WebGLRenderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.appendChild(renderer.domElement);

    // 3. Lighting Setup (PBR Metallic-Roughness Environment Simulation)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.4);
    dirLight1.position.set(2, 4, 3);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x35b6a5, 0.65);
    dirLight2.position.set(-3, -1, 2);
    scene.add(dirLight2);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.8);
    rimLight.position.set(0, 3, -4);
    scene.add(rimLight);

    // 4. Procedural Geometry Assembly (Procedural Three.js Model)
    const modelGroup = new THREE.Group();

    // Standard PBR Materials per img2threejs specs
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x181c20,
      metalness: 0.2,
      roughness: 0.35,
    });

    const titaniumMat = new THREE.MeshStandardMaterial({
      color: 0x242a30,
      metalness: 0.75,
      roughness: 0.25,
    });

    const lensMat = new THREE.MeshPhysicalMaterial({
      color: 0x1c6d60,
      transmission: 0.88,
      opacity: 1,
      transparent: true,
      roughness: 0.08,
      ior: 1.52,
      thickness: 0.05,
      reflectivity: 0.6,
    });

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xdde3ea,
      metalness: 0.95,
      roughness: 0.15,
    });

    const sensorGlowMat = new THREE.MeshStandardMaterial({
      color: 0x35b6a5,
      emissive: 0x35b6a5,
      emissiveIntensity: 0.9,
      roughness: 0.2,
    });

    const rubberMat = new THREE.MeshStandardMaterial({
      color: 0x0f1114,
      metalness: 0.05,
      roughness: 0.8,
    });

    // --- Subsystem 1: Front Spectacle Rims & Bridge ---
    const frameGroup = new THREE.Group();

    // Left and Right Eye Rims
    const rimGeo = new THREE.TorusGeometry(0.32, 0.022, 16, 48);
    
    const leftRim = new THREE.Mesh(rimGeo, frameMat);
    leftRim.position.set(-0.44, 0, 0);
    leftRim.scale.set(1.15, 0.92, 1);
    frameGroup.add(leftRim);

    const rightRim = new THREE.Mesh(rimGeo, frameMat);
    rightRim.position.set(0.44, 0, 0);
    rightRim.scale.set(1.15, 0.92, 1);
    frameGroup.add(rightRim);

    // Center Bridge
    const bridgeGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.26, 16);
    const bridge = new THREE.Mesh(bridgeGeo, titaniumMat);
    bridge.rotation.z = Math.PI / 2;
    bridge.position.set(0, 0.08, 0.02);
    frameGroup.add(bridge);

    // Left & Right Optical Lenses
    const lensGeo = new THREE.CylinderGeometry(0.31, 0.31, 0.012, 32);
    
    const leftLens = new THREE.Mesh(lensGeo, lensMat);
    leftLens.rotation.x = Math.PI / 2;
    leftLens.position.set(-0.44, 0, 0);
    leftLens.scale.set(1.13, 1, 0.9);
    frameGroup.add(leftLens);

    const rightLens = new THREE.Mesh(lensGeo, lensMat);
    rightLens.rotation.x = Math.PI / 2;
    rightLens.position.set(0.44, 0, 0);
    rightLens.scale.set(1.13, 1, 0.9);
    frameGroup.add(rightLens);

    // Left & Right Temple Arms
    const templeArmGeo = new THREE.BoxGeometry(0.035, 0.045, 1.1);
    
    const leftArm = new THREE.Mesh(templeArmGeo, frameMat);
    leftArm.position.set(-0.84, 0.02, -0.55);
    leftArm.rotation.y = 0.04;
    frameGroup.add(leftArm);

    const rightArm = new THREE.Mesh(templeArmGeo, frameMat);
    rightArm.position.set(0.84, 0.02, -0.55);
    rightArm.rotation.y = -0.04;
    frameGroup.add(rightArm);

    modelGroup.add(frameGroup);

    // --- Subsystem 2: Dual Miniature Cameras ---
    const cameraPods = new THREE.Group();
    const camHousingGeo = new THREE.CylinderGeometry(0.042, 0.042, 0.05, 20);
    const camLensGeo = new THREE.SphereGeometry(0.028, 16, 16);

    // Left Camera Pod
    const leftCamHousing = new THREE.Mesh(camHousingGeo, chromeMat);
    leftCamHousing.rotation.x = Math.PI / 2;
    leftCamHousing.position.set(-0.82, 0.04, 0.04);
    cameraPods.add(leftCamHousing);

    const leftCamLens = new THREE.Mesh(camLensGeo, sensorGlowMat);
    leftCamLens.position.set(-0.82, 0.04, 0.065);
    leftCamLens.scale.set(1, 1, 0.4);
    cameraPods.add(leftCamLens);

    // Right Camera Pod
    const rightCamHousing = new THREE.Mesh(camHousingGeo, chromeMat);
    rightCamHousing.rotation.x = Math.PI / 2;
    rightCamHousing.position.set(0.82, 0.04, 0.04);
    cameraPods.add(rightCamHousing);

    const rightCamLens = new THREE.Mesh(camLensGeo, sensorGlowMat);
    rightCamLens.position.set(0.82, 0.04, 0.065);
    rightCamLens.scale.set(1, 1, 0.4);
    cameraPods.add(rightCamLens);

    modelGroup.add(cameraPods);

    // --- Subsystem 3: Central Ultrasonic Sonar Transducer ---
    const sonarMesh = new THREE.Group();
    const sonarGeo = new THREE.CylinderGeometry(0.052, 0.052, 0.045, 24);
    const sonarBarrel = new THREE.Mesh(sonarGeo, chromeMat);
    sonarBarrel.rotation.x = Math.PI / 2;
    sonarBarrel.position.set(0, 0.08, 0.05);
    sonarMesh.add(sonarBarrel);

    const sonarInnerGeo = new THREE.CylinderGeometry(0.038, 0.038, 0.046, 20);
    const sonarInner = new THREE.Mesh(sonarInnerGeo, sensorGlowMat);
    sonarInner.rotation.x = Math.PI / 2;
    sonarInner.position.set(0, 0.08, 0.052);
    sonarMesh.add(sonarInner);

    modelGroup.add(sonarMesh);

    // --- Subsystem 4: Right Temple ESP32 Neural Compute Pod ---
    const computePod = new THREE.Group();
    const computeBodyGeo = new THREE.BoxGeometry(0.06, 0.075, 0.42);
    const computeBody = new THREE.Mesh(computeBodyGeo, titaniumMat);
    computeBody.position.set(0.86, 0.02, -0.42);
    computePod.add(computeBody);

    const ledGeo = new THREE.SphereGeometry(0.012, 12, 12);
    const ledMesh = new THREE.Mesh(ledGeo, sensorGlowMat);
    ledMesh.position.set(0.895, 0.04, -0.32);
    computePod.add(ledMesh);

    modelGroup.add(computePod);

    // --- Subsystem 5: Bone-Conduction Audio Transducers ---
    const audioTransducers = new THREE.Group();
    const audioGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.03, 16);

    const leftAudio = new THREE.Mesh(audioGeo, rubberMat);
    leftAudio.rotation.z = Math.PI / 2;
    leftAudio.position.set(-0.82, -0.04, -1.02);
    audioTransducers.add(leftAudio);

    const rightAudio = new THREE.Mesh(audioGeo, rubberMat);
    rightAudio.rotation.z = Math.PI / 2;
    rightAudio.position.set(0.82, -0.04, -1.02);
    audioTransducers.add(rightAudio);

    modelGroup.add(audioTransducers);

    // Add fully assembled model to scene
    scene.add(modelGroup);

    // Store references
    stateRef.current.renderer = renderer;
    stateRef.current.scene = scene;
    stateRef.current.camera = camera;
    stateRef.current.modelGroup = modelGroup;
    stateRef.current.cameraPods = cameraPods;
    stateRef.current.sonarMesh = sonarMesh;
    stateRef.current.computePod = computePod;
    stateRef.current.audioTransducers = audioTransducers;

    // 5. Mouse / Touch Orbit Event Handlers
    const onMouseDown = (e: MouseEvent) => {
      stateRef.current.isDragging = true;
      setIsInteracting(true);
      stateRef.current.previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!stateRef.current.isDragging) return;
      const deltaX = e.clientX - stateRef.current.previousMousePosition.x;
      const deltaY = e.clientY - stateRef.current.previousMousePosition.y;

      stateRef.current.targetRotation.y += deltaX * 0.008;
      stateRef.current.targetRotation.x = Math.max(
        -0.6,
        Math.min(0.6, stateRef.current.targetRotation.x + deltaY * 0.008)
      );

      stateRef.current.previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      stateRef.current.isDragging = false;
      setTimeout(() => setIsInteracting(false), 2000);
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        stateRef.current.isDragging = true;
        setIsInteracting(true);
        stateRef.current.previousMousePosition = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!stateRef.current.isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - stateRef.current.previousMousePosition.x;
      const deltaY = e.touches[0].clientY - stateRef.current.previousMousePosition.y;

      stateRef.current.targetRotation.y += deltaX * 0.01;
      stateRef.current.targetRotation.x = Math.max(
        -0.6,
        Math.min(0.6, stateRef.current.targetRotation.x + deltaY * 0.01)
      );

      stateRef.current.previousMousePosition = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    };

    const domEl = renderer.domElement;
    domEl.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    domEl.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onMouseUp);

    // 6. Responsive Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    // 7. Continuous Smooth Animation Loop (60 FPS with Damped Physics)
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Inertial damping towards target rotation
      stateRef.current.currentRotation.x +=
        (stateRef.current.targetRotation.x - stateRef.current.currentRotation.x) * 0.08;
      stateRef.current.currentRotation.y +=
        (stateRef.current.targetRotation.y - stateRef.current.currentRotation.y) * 0.08;

      // Auto-rotation when not user-interacting
      if (!stateRef.current.isDragging && !isInteracting) {
        stateRef.current.targetRotation.y += 0.003;
      }

      if (modelGroup) {
        modelGroup.rotation.x = stateRef.current.currentRotation.x;
        modelGroup.rotation.y = stateRef.current.currentRotation.y;
        // Subtle levitation breath
        modelGroup.position.y = Math.sin(elapsed * 1.5) * 0.025;
      }

      // Sensor LED pulse animation
      if (ledMesh) {
        (ledMesh.material as THREE.MeshStandardMaterial).emissiveIntensity =
          0.6 + Math.sin(elapsed * 4) * 0.4;
      }

      renderer.render(scene, camera);
      stateRef.current.animId = requestAnimationFrame(animate);
    };

    animate();

    // 8. Cleanup and Resource Disposal
    return () => {
      if (stateRef.current.animId) cancelAnimationFrame(stateRef.current.animId);
      window.removeEventListener("resize", handleResize);
      domEl.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      domEl.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onMouseUp);

      renderer.dispose();
      if (container.contains(domEl)) {
        container.removeChild(domEl);
      }
    };
  }, [isInteracting]);

  // Focus view on specific subsystem
  const handleSelectSubsystem = (subId: SubsystemInfo["id"]) => {
    setSelectedSubsystem(subId);
    setIsInteracting(true);

    if (subId === "all") {
      stateRef.current.targetRotation = { x: 0.15, y: -0.35 };
    } else if (subId === "cameras") {
      stateRef.current.targetRotation = { x: 0.05, y: -0.55 };
    } else if (subId === "sonar") {
      stateRef.current.targetRotation = { x: -0.05, y: 0.0 };
    } else if (subId === "compute") {
      stateRef.current.targetRotation = { x: 0.25, y: -1.25 };
    } else if (subId === "audio") {
      stateRef.current.targetRotation = { x: 0.45, y: -2.35 };
    }
  };

  const handleResetView = () => {
    setSelectedSubsystem("all");
    stateRef.current.targetRotation = { x: 0.15, y: -0.35 };
  };

  const activeSubsystem = SUBSYSTEMS.find((s) => s.id === selectedSubsystem) || SUBSYSTEMS[0];

  return (
    <div className="rounded-xl border border-border-subtle bg-bg-secondary p-5 sm:p-6 space-y-4 shadow-sm">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-border-subtle">
        <div className="flex items-center gap-2">
          <Box className="w-4 h-4 text-accent-primary" />
          <h4 className="font-heading font-semibold text-sm sm:text-base text-text-primary">
            Procedural 3D Hardware Model (Three.js)
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-accent-primary bg-accent-surface px-2.5 py-1 rounded-md border border-accent-primary/20">
            Interactive Orbit · Drag to rotate
          </span>
          <button
            type="button"
            onClick={handleResetView}
            className="p-1.5 rounded-md border border-border-subtle text-text-muted hover:text-text-primary hover:border-accent-primary transition-colors min-h-[32px] flex items-center justify-center"
            title="Reset 3D camera angle"
            aria-label="Reset 3D view"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3D Canvas Viewport */}
      <div className="relative w-full h-72 sm:h-96 rounded-lg bg-bg-subtle/30 overflow-hidden cursor-grab active:cursor-grabbing border border-border-subtle">
        <div ref={containerRef} className="w-full h-full" />

        {/* Floating Subsystem Indicator Overlay */}
        <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-bg-secondary/90 backdrop-blur-md border border-border-subtle p-3 rounded-md shadow-sm max-w-sm pointer-events-none">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-accent-primary" />
            <span className="text-xs font-mono font-medium text-text-primary">
              {activeSubsystem.name}
            </span>
          </div>
          <p className="text-xs text-text-secondary leading-snug">
            {activeSubsystem.description}
          </p>
          <div className="mt-1.5 pt-1.5 border-t border-border-subtle/60 text-xs font-mono text-accent-primary">
            {activeSubsystem.specs}
          </div>
        </div>
      </div>

      {/* Subsystem Selection Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1" role="tablist" aria-label="SafeSight 3D Subsystems">
        {SUBSYSTEMS.map((sub) => {
          const isSelected = selectedSubsystem === sub.id;
          const icons = {
            all: <Eye className="w-3.5 h-3.5" />,
            cameras: <Eye className="w-3.5 h-3.5" />,
            sonar: <Shield className="w-3.5 h-3.5" />,
            compute: <Cpu className="w-3.5 h-3.5" />,
            audio: <Volume2 className="w-3.5 h-3.5" />,
          };

          return (
            <button
              type="button"
              role="tab"
              key={sub.id}
              aria-selected={isSelected}
              onClick={() => handleSelectSubsystem(sub.id)}
              className={`p-2.5 rounded-md border text-left text-xs font-mono transition-all duration-150 min-h-[44px] flex flex-col justify-between ${
                isSelected
                  ? "bg-accent-surface border-accent-primary text-accent-primary shadow-xs"
                  : "bg-bg-primary border-border-subtle text-text-secondary hover:border-accent-primary hover:text-text-primary"
              }`}
            >
              <div className="flex items-center gap-1.5 font-medium">
                {icons[sub.id]}
                <span className="truncate">{sub.badge}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
