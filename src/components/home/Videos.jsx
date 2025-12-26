import React from 'react';

export default function Videos() {
    return (
        <section className="py-24 bg-black text-white relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black pointer-events-none" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-12">Video Tour</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Placeholders for Youtube embeds */}
                    <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden border border-white/10 shadow-2xl hover:border-primary/50 transition-colors group">
                        <iframe
                            className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                            src="https://www.youtube.com/embed/6Ow45l7iQHY?mute=1" // Placeholder ID
                            title="Tree Cutting Video 1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden border border-white/10 shadow-2xl hover:border-primary/50 transition-colors group">
                        <iframe
                            className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                            src="https://www.youtube.com/embed/hLLuCq_7OmQ?mute=1"
                            title="Land Clearing Video 2"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
