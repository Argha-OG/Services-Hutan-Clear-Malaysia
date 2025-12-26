import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Ahmad Razak",
        role: "Project Manager, KL Construction",
        content: "Professional team and excellent machinery. They cleared our 5-acre site in record time. Highly recommended for big projects.",
        rating: 5
    },
    {
        name: "Sarah Lim",
        role: "Homeowner, Ipoh",
        content: "Very careful with the large tree near my house. They used a crane and safety was their top priority. Cleaned up everything after.",
        rating: 5
    },
    {
        name: "Suresh Kumar",
        role: "Landscape Architect",
        content: "Reliable partners for my landscaping projects. THe stump grinding service is particularly good and thorough.",
        rating: 4
    }
];

export default function Testimonials() {
    return (
        <section id="reviews" className="py-24 bg-white dark:bg-[#111] overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 dark:text-white">What Our Clients Say</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="p-8 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 relative"
                        >
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, starIndex) => (
                                    <Star
                                        key={starIndex}
                                        className={`w-5 h-5 ${starIndex < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 mb-6 relative z-10 leading-relaxed">
                                "{t.content}"
                            </p>

                            <div>
                                <h4 className="font-bold text-lg dark:text-white">{t.name}</h4>
                                <span className="text-sm text-primary">{t.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
