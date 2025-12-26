import React from 'react';
import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black/80 border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold text-white mb-6">Services Hutan Clear Malaysia</h2>
                        <p className="text-gray-400 mb-8 max-w-md">
                            Professional and reliable forestry, tree care, and land clearing services across Malaysia.
                            We provide complete solutions for residential, commercial, and industrial needs.
                        </p>
                        <div className="flex gap-4">
                            {/* Social placeholders */}
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                                <MessageCircle className="text-white w-5 h-5" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">Service Areas</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="hover:text-primary transition-colors cursor-pointer">Kuala Lumpur</li>
                            <li className="hover:text-primary transition-colors cursor-pointer">Selangor</li>
                            <li className="hover:text-primary transition-colors cursor-pointer">Negeri Sembilan</li>
                            <li className="hover:text-primary transition-colors cursor-pointer">All Peninsular Malaysia</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <a href="tel:+601127866206" className="hover:text-white transition-colors">+60 11-2786 6206</a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <span>Full Malaysia Coverage</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Services Hutan Clear Malaysia. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
