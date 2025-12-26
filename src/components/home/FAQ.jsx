import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Do you provide services outside of Kuala Lumpur?",
        answer: "Yes, we provide services throughout all of Malaysia, including rural areas and other states."
    },
    {
        question: "How do you charge for tree cutting?",
        answer: "Pricing depends on the size of the tree, location, and risk factors (e.g., near houses/power lines). Send us a photo on WhatsApp for a quick quote."
    },
    {
        question: "Can you remove the tree stumps?",
        answer: "Yes, we offer complete stump removal and grinding services so you can replant or build on the same spot immediately."
    },
    {
        question: "Is your team insured for accidents?",
        answer: "Absolutely. Safety is our priority. We follow strict safety protocols and are covered for third-party liabilities."
    },
    {
        question: "Do you handle the waste disposal?",
        answer: "Yes, we clean up the site completely. We can chop the wood for your use or haul everything away to a disposal site."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-[#050505] relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-400">Everything you need to know about our process.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border transition-all duration-300 ${openIndex === index ? 'bg-white/5 border-primary/50' : 'bg-transparent border-white/10 hover:border-white/20'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`text-lg font-semibold ${openIndex === index ? 'text-primary' : 'text-white'}`}>
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-primary" />
                                ) : (
                                    <Plus className="w-5 h-5 text-gray-500" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        overflow="hidden"
                                    >
                                        <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
