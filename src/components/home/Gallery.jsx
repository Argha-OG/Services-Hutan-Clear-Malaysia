import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.jpeg';
import img4 from '../../assets/img4.jpeg';
import img5 from '../../assets/img5.jpeg';
import img6 from '../../assets/img6.jpeg';
import img7 from '../../assets/img7.jpeg';
import img8 from '../../assets/img8.jpeg';
import img9 from '../../assets/img9.jpeg';

const galleryImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9
];

export default function Gallery() {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section id="gallery" className="py-24 bg-neutral-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Work Gallery</h2>
                    <p className="text-gray-400">Sneak peek into our recent projects and machinery.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={index}
                            layoutId={`card-${index}`}
                            onClick={() => setSelectedId(index)}
                            className={`relative cursor-pointer rounded-xl overflow-hidden group ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}
                            whileHover={{ scale: 1.02 }}
                        >
                            <img
                                src={img}
                                alt={`Gallery project ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                            onClick={() => setSelectedId(null)}
                        >
                            <button className="absolute top-4 right-4 text-white p-2">
                                <X className="w-8 h-8" />
                            </button>

                            <motion.div
                                layoutId={`card-${selectedId}`}
                                className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={galleryImages[selectedId]}
                                    alt="Selected project"
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
