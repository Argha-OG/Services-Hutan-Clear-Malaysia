import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, TreePine } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import logo from '../../assets/shcm.png';
import GoogleTranslate from '../common/GoogleTranslate';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Services', href: '#services' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-primary/30 group-hover:scale-105 transition-transform">
                        <img src={logo} alt="" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-white tracking-tight">Forest Clearing Services</span>
                        <span className="text-xs text-gray-300 uppercase tracking-widest">Malaysia</span>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
                        >
                            {link.name}
                        </a>
                    ))}
                    <GoogleTranslate id="google_translate_element" />
                    <div className="mr-4"></div>
                    <a
                        href="https://wa.me/601127866206"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                    >
                        <Phone className="w-4 h-4" />
                        <span>Call Us</span>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-8 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-white hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="py-2 flex justify-center">
                                <GoogleTranslate id="google_translate_element_mobile" />
                            </div>
                            <a
                                href="https://wa.me/601127866206"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-bold"
                            >
                                <Phone className="w-5 h-5" />
                                <span>Call Us Now</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
