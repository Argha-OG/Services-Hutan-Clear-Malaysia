import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import AboutusPhoto from './../../assets/aboutus.jpeg';

export default function About() {
    return (
        <section id="about" className="py-24 bg-neutral-900 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden relative z-10">
                            <img
                                src={AboutusPhoto}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-primary/20 rounded-3xl z-0" />
                        <div className="absolute top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-[50px] z-0" />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Who We Are</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Expert Land Clearing & Forestry Services</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Services Hutan Clear Malaysia is your trusted partner for all land preparation needs.
                            With over 10 years of experience, we combine heavy machinery with skilled manpower to tackle
                            projects of any scale – from small backyard tree removals to massive jungle clearing for development.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {['Licensed Professionals', 'Modern Machinery', 'Safety First Approach', 'Nationwide Coverage'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                    <span className="text-gray-200 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-8 border-t border-white/10 pt-8">
                            <div>
                                <span className="block text-4xl font-bold text-white mb-1">10+</span>
                                <span className="text-sm text-gray-500">Years Experience</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-bold text-white mb-1">500+</span>
                                <span className="text-sm text-gray-500">Projects Done</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-bold text-white mb-1">100%</span>
                                <span className="text-sm text-gray-500">Satisfaction</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
