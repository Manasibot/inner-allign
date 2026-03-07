import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TreeBackground.css';

gsap.registerPlugin(ScrollTrigger);

const TreeBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // SCENE SETUP
        const scene = new THREE.Scene();

        // Add fog to blend ground into background
        scene.fog = new THREE.FogExp2(0x06110a, 0.012);

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 5, 18); // Broader view
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        // LIGHTING (Cinematic sunrise - Upped for visibility)
        const ambientLight = new THREE.HemisphereLight(0xFBF8F5, 0x06110A, 1.2);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xF4E3A6, 2.0);
        dirLight.position.set(10, 20, 10);
        scene.add(dirLight);

        // MATERIALS (Brightened)
        const seedMat = new THREE.MeshStandardMaterial({ color: 0x8B5A2B, roughness: 0.5 });
        const woodMat = new THREE.MeshStandardMaterial({ color: 0x5D4037, roughness: 0.7 });
        const leafMat = new THREE.MeshStandardMaterial({ color: 0x4A6B53, roughness: 0.4, flatShading: true });
        const groundMat = new THREE.MeshStandardMaterial({
            color: 0x1A2E21,
            roughness: 1,
            transparent: true,
            opacity: 0.3
        });

        // GROUP FOR ENTIRE TREE
        const treeGroup = new THREE.Group();
        treeGroup.scale.set(1.5, 1.5, 1.5); // Make it BIGGER
        scene.add(treeGroup);

        // 1. SEED
        const seed = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), seedMat);
        seed.scale.set(1, 1.4, 1);
        seed.position.y = 15;
        treeGroup.add(seed);

        // 2. GROUND
        const ground = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.position.y = 0;
        scene.add(ground);

        // 3. ROOTS
        const rootGroup = new THREE.Group();
        rootGroup.position.y = 0;

        const createRoot = (radiusTop, radiusBottom, height, posX, rotZ, delayScale) => {
            const geo = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, 8);
            geo.translate(0, -height / 2, 0);
            const rootMesh = new THREE.Mesh(geo, woodMat);
            rootMesh.position.set(posX, 0, 0);
            rootMesh.rotation.z = rotZ;
            rootMesh.scale.y = 0.001;
            rootMesh.userData = { maxScale: 1, delayOffset: delayScale };
            return rootMesh;
        };

        const rootTransforms = [
            createRoot(0.15, 0.02, 4, 0, 0, 0),
            createRoot(0.1, 0.01, 3, 0.1, 0.5, 0.2),
            createRoot(0.1, 0.01, 3.5, -0.1, -0.4, 0.1),
            createRoot(0.08, 0.01, 2, 0, 0.8, 0.4),
            createRoot(0.06, 0.01, 2.5, 0, -0.7, 0.3)
        ];
        rootTransforms.forEach(r => rootGroup.add(r));
        treeGroup.add(rootGroup);

        // 4. TRUNK
        const trunkHeight = 8;
        const trunkGeo = new THREE.CylinderGeometry(0.2, 0.4, trunkHeight, 12);
        trunkGeo.translate(0, trunkHeight / 2, 0);
        const trunk = new THREE.Mesh(trunkGeo, woodMat);
        trunk.scale.y = 0.001;
        trunk.scale.x = 0.2;
        trunk.scale.z = 0.2;
        treeGroup.add(trunk);

        // 5. CANOPY
        const canopyGroup = new THREE.Group();
        canopyGroup.position.y = trunkHeight;
        canopyGroup.scale.set(0.001, 0.001, 0.001);

        const addLeafCluster = (x, y, z, size) => {
            const cluster = new THREE.Mesh(new THREE.IcosahedronGeometry(size, 1), leafMat);
            cluster.position.set(x, y, z);
            cluster.userData = {
                origX: x, origY: y, origZ: z,
                speed: Math.random() * 0.02 + 0.01,
                offset: Math.random() * Math.PI * 2
            };
            canopyGroup.add(cluster);
        };

        addLeafCluster(0, 2, 0, 2);
        addLeafCluster(-1.5, 0, 1, 1.8);
        addLeafCluster(1.5, 0.5, 0.5, 1.9);
        addLeafCluster(0, -1, -1.5, 1.7);
        addLeafCluster(-0.5, 0, -1.2, 1.5);

        trunk.add(canopyGroup);

        // 6. PARTICLES
        const particleCount = 200;
        const particleGeo = new THREE.BufferGeometry();
        const particlePos = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            particlePos[i * 3] = (Math.random() - 0.5) * 40;
            particlePos[i * 3 + 1] = Math.random() * 20 - 5;
            particlePos[i * 3 + 2] = (Math.random() - 0.5) * 40;
        }
        particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
        const particleMat = new THREE.PointsMaterial({
            color: 0xD4AF37,
            size: 0.15, // Slightly bigger
            transparent: true,
            opacity: 0.6 // More visible
        });
        const particles = new THREE.Points(particleGeo, particleMat);
        scene.add(particles);

        // DUST IMPACT
        const impactParticles = new THREE.Points(
            new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(new Float32Array(30 * 3), 3)),
            new THREE.PointsMaterial({ color: 0x8B9D8B, size: 0.15, transparent: true, opacity: 0 })
        );
        scene.add(impactParticles);

        // GSAP TIMELINE
        const scrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 1.5,
            }
        });

        const animState = {
            seedY: 15,
            impactOpacity: 0,
            impactScale: 0.1,
            rootScale: 0,
            trunkScaleY: 0.001,
            trunkWidth: 0.2,
            canopyScale: 0,
            cameraY: 5,
            cameraZ: 18
        };

        scrollTl.to(animState, {
            seedY: 0.3,
            ease: "power2.inOut",
            duration: 1.5,
            onUpdate: () => seed.position.y = animState.seedY
        }, 0);

        scrollTl.to(animState, {
            impactOpacity: 0.8,
            impactScale: 2,
            duration: 0.5,
            ease: "power2.out",
            onUpdate: () => {
                impactParticles.material.opacity = animState.impactOpacity;
                impactParticles.scale.set(animState.impactScale, animState.impactScale, animState.impactScale);
                const pos = impactParticles.geometry.attributes.position.array;
                for (let i = 0; i < 30; i++) {
                    const angle = (i / 30) * Math.PI * 2;
                    const r = animState.impactScale * 0.5;
                    pos[i * 3] = Math.cos(angle) * r;
                    pos[i * 3 + 1] = 0.1;
                    pos[i * 3 + 2] = Math.sin(angle) * r;
                }
                impactParticles.geometry.attributes.position.needsUpdate = true;
            }
        }, 1.3);

        scrollTl.to(animState, {
            impactOpacity: 0,
            duration: 0.5,
            onUpdate: () => impactParticles.material.opacity = animState.impactOpacity
        }, 1.8);

        scrollTl.to(seed.scale, { x: 0, y: 0, z: 0, duration: 0.5 }, 1.8);

        scrollTl.to(animState, {
            rootScale: 1,
            duration: 2,
            ease: "power1.inOut",
            onUpdate: () => {
                rootTransforms.forEach(root => {
                    let s = animState.rootScale - root.userData.delayOffset;
                    s = Math.max(0.001, Math.min(1, s * 1.5));
                    root.scale.y = s * root.userData.maxScale;
                });
            }
        }, 1.5);

        scrollTl.to(animState, {
            trunkScaleY: 1,
            trunkWidth: 1,
            duration: 3,
            ease: "power1.inOut",
            onUpdate: () => {
                trunk.scale.y = Math.max(0.001, animState.trunkScaleY);
                trunk.scale.x = animState.trunkWidth;
                trunk.scale.z = animState.trunkWidth;
            }
        }, 2);

        scrollTl.to(animState, {
            canopyScale: 1,
            duration: 2.5,
            ease: "back.out(1.2)",
            onUpdate: () => {
                const s = Math.max(0.001, animState.canopyScale);
                canopyGroup.scale.set(s, s, s);
            }
        }, 3.5);

        scrollTl.to(animState, {
            cameraY: 8,
            cameraZ: 28,
            duration: 3,
            ease: "power1.inOut",
            onUpdate: () => {
                camera.position.y = animState.cameraY;
                camera.position.z = animState.cameraZ;
                camera.lookAt(0, 4, 0);
            }
        }, 3.5);

        // RENDER LOOP
        let time = 0;
        const animate = () => {
            time += 0.01;
            const pos = particleGeo.attributes.position.array;
            for (let i = 0; i < particleCount; i++) {
                pos[i * 3 + 1] += 0.01;
                pos[i * 3] += Math.sin(time + i) * 0.01;
                if (pos[i * 3 + 1] > 15) pos[i * 3 + 1] = -5;
            }
            particleGeo.attributes.position.needsUpdate = true;

            if (canopyGroup.scale.x > 0.1) {
                canopyGroup.children.forEach(cluster => {
                    const ud = cluster.userData;
                    cluster.rotation.z = Math.sin(time * 2 * ud.speed + ud.offset) * 0.05;
                    cluster.rotation.x = Math.cos(time * 1.5 * ud.speed + ud.offset) * 0.05;
                });
            }

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
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
            if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
            seedMat.dispose();
            woodMat.dispose();
            leafMat.dispose();
            groundMat.dispose();
            renderer.dispose();
        };
    }, []);

    return <div className="tree-background" ref={mountRef}></div>;
};

export default TreeBackground;
