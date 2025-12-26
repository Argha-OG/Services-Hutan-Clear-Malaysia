import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/data/services';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    show: { opacity: 1, y: 0, rotateX: 0 }
};

export default function Services() {
    return (
        <section id="services" className="py-24 bg-neutral-900 relative z-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Core Services</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        From tree removal to complete land clearing, we have the expertise and equipment to handle any job safely.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={idx}
                                variants={item}
                                whileHover={{ y: -10, rotateX: 5, rotateY: 5, scale: 1.02 }}
                                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/5 shadow-xl transition-all duration-300"
                                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                            >
                                {/* Image Header */}
                                <div className="h-48 w-full overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <div className="w-10 h-10 rounded-lg bg-primary/90 flex items-center justify-center backdrop-blur-sm">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
