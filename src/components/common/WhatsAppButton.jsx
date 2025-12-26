import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/601127866206"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
        >
            <div className="relative">
                {/* Pulse effect */}
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>

                <div className="relative flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105">
                    <MessageCircle className="w-6 h-6" />
                    <span className="font-bold hidden md:block pr-2">Chat on WhatsApp</span>
                </div>
            </div>
        </a>
    );
}
