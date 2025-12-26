import React from 'react';
import { extraServices } from '@/data/services';
import { CheckCircle2, Truck, Hammer, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const categoryIcons = {
    "Construction & Renovation": Hammer,
    "Moving & Transport": Truck,
    "Additional Support": Users
};

export default function ExtraServices() {
    return (
        <section className="py-24 bg-white dark:bg-[#1a1a1a] relative overflow-hidden">
            {/* Background noise/pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold dark:text-white mb-4">Detailed Specialized Services</h2>
                    <p className="text-gray-500 dark:text-gray-400">Beyond forestry, we offer comprehensive construction and logistic support.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {extraServices.map((section, idx) => {
                        const Icon = categoryIcons[section.category] || CheckCircle2;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                whileHover={{ y: -5 }}
                                className="bg-gray-50 dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 hover:border-primary/30 transition-all shadow-lg hover:shadow-2xl"
                            >
                                <div className="h-48 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black/40 z-10" />
                                    <img src={section.image} alt={section.category} className="w-full h-full object-cover" />
                                    <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                                            <Icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white text-shadow">{section.category}</h3>
                                    </div>
                                </div>

                                <div className="p-8 space-y-6">
                                    {section.items.map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-semibold dark:text-gray-200">{item.title}</h4>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="px-8 pb-8 pt-4 border-t border-gray-100 dark:border-white/5">
                                    <a href="https://wa.me/601127866206" className="text-primary font-semibold hover:underline flex items-center gap-2 text-sm justify-end">
                                        Get a Quote →
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
