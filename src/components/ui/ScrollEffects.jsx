import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

function ScrollScene({ scrollYProgress }) {
    const groupRef = useRef();

    // Create random particles/leaves data
    const particleCount = 40;
    const particles = useRef([...Array(particleCount)].map(() => ({
        position: [
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 10
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
        scale: Math.random() * 0.5 + 0.2,
        speed: Math.random() * 0.5 + 0.2
    })));

    useFrame((state) => {
        if (!groupRef.current) return;

        // Get current scroll progress (0 to 1)
        const scroll = scrollYProgress.get();

        // Rotate the entire group based on scroll
        groupRef.current.rotation.y = scroll * Math.PI * 0.5;
        groupRef.current.position.y = scroll * 5; // Move up as we scroll

        // Animate individual particles
        groupRef.current.children.forEach((child, i) => {
            const t = state.clock.getElapsedTime();
            const p = particles.current[i];

            child.rotation.x += 0.01 * p.speed;
            child.rotation.y += 0.01 * p.speed;

            // Floating effect combined with scroll
            child.position.y += Math.sin(t * p.speed) * 0.002;
        });
    });

    return (
        <group ref={groupRef}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            {particles.current.map((p, i) => (
                <Float key={i} speed={p.speed} rotationIntensity={1} floatIntensity={2}>
                    <mesh position={p.position} rotation={p.rotation} scale={p.scale}>
                        <dodecahedronGeometry args={[0.2, 0]} />
                        <meshStandardMaterial
                            color={i % 2 === 0 ? "#10b981" : "#059669"} // Green tones
                            transparent
                            opacity={0.6}
                            roughness={0.2}
                            metalness={0.8}
                        />
                    </mesh>
                </Float>
            ))}
        </group>
    );
}

export default function ScrollEffects({ children }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="relative min-h-screen">
            {/* Global reading progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
                style={{ scaleX: scrollYProgress }}
            />

            {/* Fixed 3D Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <ScrollScene scrollYProgress={scrollYProgress} />
                </Canvas>
            </div>

            {/* Content Wrapper - ensure it's above the canvas */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
