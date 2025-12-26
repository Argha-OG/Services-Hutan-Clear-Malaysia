import React from 'react';
import { Phone } from 'lucide-react';

export default function CTABanner() {
    return (
        <section id="contact" className="py-20 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
                <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10">
                    Professional, fast, and reliable clearing services are just one call away.
                </p>

                <a
                    href="https://wa.me/601127866206"
                    className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-1 transform duration-300"
                >
                    <Phone className="w-6 h-6" />
                    <span>Call +60 11-2786 6206</span>
                </a>
            </div>
        </section>
    );
}
