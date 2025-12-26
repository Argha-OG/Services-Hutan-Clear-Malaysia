import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const galleryImages = [
    // 1. Heavy Machinery / Land Clearing (Replacing the old excavator)
    "https://t4.ftcdn.net/jpg/03/52/73/59/360_F_352735994_4FpchPEOdipty9TvI4WWjjI1xgJdB5m6.jpg?auto=compress&cs=tinysrgb&w=800", 
    
    // 2. Professional Arborist Climbing (Shows the "service" in action)
    "https://lawlegalhub.com/wp-content/uploads/2024/04/Cutting-Trees.webp?auto=compress&cs=tinysrgb&w=800", 
    
    // 3. Tree Trimming / Bucket Work (Professional maintenance)
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-IsRG6l-8F0swqMrYobUW8hGQSN6sLD7GA&s?auto=compress&cs=tinysrgb&w=800", 
    
    // 4. Chainsaw Detail (Action shot of tree cutting)
    "https://i0.wp.com/www.malaysiaworldnews.com/wp-content/uploads/2024/05/FB_IMG_1715635597652.jpg?fit=960%2C642&ssl=1?auto=compress&cs=tinysrgb&w=800", 
    
    // 5. Wood & Log Management (The result of removal/logging)
    "https://treecutter.my/wp-content/uploads/2023/06/dsc4659.jpg?s=612x612&w=0&k=20&c=tWWpff8RBPVMiEenMooVf4yfFP9smdPfBQr-82dwZis=?auto=compress&cs=tinysrgb&w=800", 
    
    // 6. Residential Tree Care (Focus on a clean garden/yard service)
    "https://cdn-kjbab.nitrocdn.com/xDiGSwyqWOsYDfdqxaQvLSKEqdvOPGZS/assets/images/optimized/rev-d142cbd/treecutting.my/wp-content/uploads/2023/10/IMG-20230326-WA0032.jpg?auto=compress&cs=tinysrgb&w=800"
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
