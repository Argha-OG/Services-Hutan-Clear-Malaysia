import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Sparkles, Float, PerspectiveCamera } from '@react-three/drei';
import { Phone } from 'lucide-react';

function Scene() {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <Sparkles count={100} scale={[12, 12, 12]} size={6} speed={0.4} opacity={1} color="#4ade80" />
                <Sparkles count={50} scale={[10, 10, 10]} size={4} speed={0.2} opacity={0.8} color="#ffffff" />
            </Float>
        </>
    );
}

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background with Parallax effect (CSS-based for simplicity or Framer Motion) */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop")', // Forest placeholder
                    filter: 'brightness(0.4)'
                }}
            />

            {/* 3D Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <Canvas>
                    <Scene />
                </Canvas>
            </div>

            <div className="container relative z-20 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-primary font-bold tracking-widest text-sm md:text-base mb-4 uppercase">
                        Hutan Services Malaysia
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                        Complete Tree & <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-600">
                            Land Clearing
                        </span> Solutions
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Professional forestry, tree care, and land preparation.
                        We provide safe, efficient, and reliable services across all of Malaysia.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#services"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold transition-all w-full sm:w-auto"
                        >
                            Our Services
                        </a>
                        <a
                            href="https://wa.me/601127866206"
                            className="group px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] w-full sm:w-auto"
                        >
                            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            <span>When Ready Just Call Me</span>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
