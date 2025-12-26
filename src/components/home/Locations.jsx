import React from 'react';
import { MapPin } from 'lucide-react';

export default function Locations() {
    return (
        <section className="py-24 bg-[#0a0a0a] relative flex items-center justify-center overflow-hidden">
            {/* Stylized Map Background (CSS Art or simple representation) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                <div className="w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-primary mb-8 animate-bounce">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-semibold">Nationwide Coverage</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                    SERVING ALL <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600">
                        MALAYSIA
                    </span>
                </h2>

                <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg">
                    From urban centers in Kuala Lumpur to remote sites in Borneo.
                    Wherever your land is, our team can reach it.
                </p>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {['Kuala Lumpur', 'Selangor', 'Johor', 'Penang', 'Perak', 'Pahang', 'Negeri Sembilan', 'Melaka', 'Kedah', 'Terengganu', 'Kelantan'].map((place) => (
                        <div key={place} className="px-6 py-3 rounded-xl bg-white/5 border border-white/5 text-gray-300 font-medium hover:bg-white/10 hover:text-white hover:border-primary/50 transition-all cursor-default">
                            {place}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
