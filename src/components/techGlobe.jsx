import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const TechGlobe = () => {
  const mountRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    /* ================= SCENE ================= */
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const world = new THREE.Group();
    scene.add(world);

    /* ================= GLOBE ================= */
    const globeWire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.8, 2),
      new THREE.MeshBasicMaterial({
        color: 0x4da6ff,
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      })
    );
    world.add(globeWire);

    const innerGlobe = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.75, 2),
      new THREE.MeshPhongMaterial({
        color: 0x0a2a4d,
        flatShading: true,
        transparent: true,
        opacity: 0.75,
        shininess: 10,
      })
    );
    world.add(innerGlobe);

    /* ================= NEURAL NET ================= */
    const network = new THREE.Group();
    world.add(network);

    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x88ccff });
    const nodes = [];

    for (let i = 0; i < 40; i++) {
      const phi = Math.acos(-1 + (2 * i) / 40);
      const theta = Math.sqrt(40 * Math.PI) * phi;
      const r = 3.2;

      const pos = new THREE.Vector3(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi)
      );

      const node = new THREE.Mesh(
        new THREE.SphereGeometry(0.03, 8, 8),
        nodeMaterial
      );
      node.position.copy(pos);
      network.add(node);
      nodes.push(pos);
    }

    const netLineMat = new THREE.LineBasicMaterial({
      color: 0x4da6ff,
      transparent: true,
      opacity: 0.12,
    });

    nodes.forEach((a, i) => {
      nodes.forEach((b, j) => {
        if (i < j && a.distanceTo(b) < 2.5) {
          const geo = new THREE.BufferGeometry().setFromPoints([a, b]);
          network.add(new THREE.Line(geo, netLineMat));
        }
      });
    });

    /* ================= ORBITS ================= */
    const orbits = [
      { radius: 4.8, tilt: 0.3, rotation: 0 },
      { radius: 5.9, tilt: 0.6, rotation: Math.PI * 0.4 },
      { radius: 7.0, tilt: 0.9, rotation: Math.PI * 0.7 },
    ];

    orbits.forEach((o) => {
      const pts = [];
      for (let i = 0; i <= 160; i++) {
        const a = (i / 160) * Math.PI * 2;
        pts.push(
          new THREE.Vector3(
            Math.cos(a) * o.radius,
            0,
            Math.sin(a) * o.radius
          )
        );
      }
      const ring = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(pts),
        new THREE.LineBasicMaterial({
          color: 0x4da6ff,
          transparent: true,
          opacity: 0.25,
        })
      );
      ring.rotation.x = o.tilt;
      ring.rotation.z = o.rotation;
      world.add(ring);
    });

    /* ================= SKILLS ================= */
    const skills = [
      { icon: "⚛", label: "React", color: "#61DAFB", orbit: 0 },
      { icon: "N", label: "Node.js", color: "#3C873A", orbit: 0 },
      { icon: "M", label: "MongoDB", color: "#47A248", orbit: 0 },

      { icon: "TS", label: "TypeScript", color: "#3178C6", orbit: 1 },
      { icon: "Py", label: "Python", color: "#3776AB", orbit: 1 },
      { icon: "V", label: "Vue", color: "#42B883", orbit: 1 },

      { icon: "▲", label: "Next.js", color: "#ffffff", orbit: 2 },
      { icon: "R", label: "Rust", color: "#DEA584", orbit: 2 },
    ];

    const sprites = [];
    const lines = [];

    const createSkillSprite = (skill) => {
      const canvas = document.createElement("canvas");
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext("2d");

      // Glow
      const g = ctx.createRadialGradient(256, 256, 40, 256, 256, 240);
      g.addColorStop(0, `${skill.color}cc`);
      g.addColorStop(0.6, `${skill.color}66`);
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 512, 512);

      // Icon
      ctx.fillStyle = "#fff";
      ctx.font = "bold 140px Inter, Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(skill.icon, 256, 230);

      // Label
      ctx.globalAlpha = 0.85;
      ctx.font = "600 42px Inter, Arial";
      ctx.fillText(skill.label, 256, 350);

      return new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: new THREE.CanvasTexture(canvas),
          transparent: true,
        })
      );
    };

    skills.forEach((skill, i) => {
      const sprite = createSkillSprite(skill);
      sprite.scale.set(1.5, 1.5, 1);
      sprite.userData = {
        orbit: orbits[skill.orbit],
        angle: (i / skills.length) * Math.PI * 2,
        speed: 0.0004 + skill.orbit * 0.00015,
      };

      world.add(sprite);
      sprites.push(sprite);

      const line = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(),
          new THREE.Vector3(),
        ]),
        new THREE.LineBasicMaterial({
          color: new THREE.Color(skill.color),
          transparent: true,
          opacity: 0.45,
        })
      );
      world.add(line);
      lines.push({ sprite, line });
    });

    /* ================= LIGHT ================= */
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const glowLight = new THREE.PointLight(0x4da6ff, 2, 30);
    glowLight.position.set(5, 5, 5);
    scene.add(glowLight);

    /* ================= ANIMATE ================= */
    let t = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      t += 0.01;

      world.rotation.y += 0.0008;
      network.rotation.y -= 0.0005;

      sprites.forEach((s, i) => {
        const { orbit } = s.userData;
        s.userData.angle += s.userData.speed;

        const a = s.userData.angle;
        const x = Math.cos(a) * orbit.radius;
        const z = Math.sin(a) * orbit.radius;

        const y = -z * Math.sin(orbit.tilt);
        const z2 = z * Math.cos(orbit.tilt);

        s.position.set(
          x * Math.cos(orbit.rotation) - z2 * Math.sin(orbit.rotation),
          y,
          x * Math.sin(orbit.rotation) + z2 * Math.cos(orbit.rotation)
        );

        const pulse = 1.45 + Math.sin(t * 2 + i) * 0.15;
        s.scale.set(pulse, pulse, 1);
      });

      lines.forEach(({ sprite, line }) => {
        const dir = sprite.position.clone().normalize().multiplyScalar(2.7);
        const pos = line.geometry.attributes.position.array;
        pos[0] = dir.x;
        pos[1] = dir.y;
        pos[2] = dir.z;
        pos[3] = sprite.position.x;
        pos[4] = sprite.position.y;
        pos[5] = sprite.position.z;
        line.geometry.attributes.position.needsUpdate = true;
      });

      renderer.render(scene, camera);
    };

    animate();
    setIsLoading(false);

    return () => {
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-blue-400 text-xl font-mono animate-pulse">
            INITIALIZING SKILL MATRIX...
          </div>
        </div>
      )}
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
};

export default TechGlobe;
