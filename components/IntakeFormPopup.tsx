'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { useState } from 'react';

interface IntakeFormPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function IntakeFormPopup({ isOpen, onClose }: IntakeFormPopupProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
        // Reset after 3 seconds and close
        setTimeout(() => {
            setIsSuccess(false);
            onClose();
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-plum/40 backdrop-blur-md"
                    />

                    {/* Window */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        className="relative w-full max-w-[600px] bg-petal rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Architectural Header */}
                        <div className="h-2 bg-rose-gold w-full" />

                        <div className="p-8 md:p-16 max-h-[90vh] overflow-y-auto">
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-plum/40 hover:text-rose-gold transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {!isSuccess ? (
                                <>
                                    <div className="mb-10 text-center">
                                        <span className="section-label-elegant mb-3 block">Begin Selection Process</span>
                                        <h2 className="text-[28px] md:text-[32px] font-garamond font-bold text-plum tracking-tight">
                                            The <span className="text-rose-gold italic">Intake</span>
                                        </h2>
                                        <div className="w-12 h-px bg-rose-gold/30 mx-auto mt-4" />
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] uppercase tracking-widest font-bold text-plum/40 ml-1">Full Name</label>
                                                <input required type="text" className="w-full bg-petal-dark border border-plum/5 rounded-full px-5 py-3 font-outfit text-plum focus:outline-none focus:border-rose-gold/50 transition-colors" placeholder="e.g. Sarah Jenkins" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] uppercase tracking-widest font-bold text-plum/40 ml-1">LinkedIn Profile</label>
                                                <input required type="url" className="w-full bg-petal-dark border border-plum/5 rounded-full px-5 py-3 font-outfit text-plum focus:outline-none focus:border-rose-gold/50 transition-colors" placeholder="linkedin.com/in/..." />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] uppercase tracking-widest font-bold text-plum/40 ml-1">Organization</label>
                                                <input required type="text" className="w-full bg-petal-dark border border-plum/5 rounded-full px-5 py-3 font-outfit text-plum focus:outline-none focus:border-rose-gold/50 transition-colors" placeholder="Company or Entity" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] uppercase tracking-widest font-bold text-plum/40 ml-1">Age</label>
                                                <input required type="number" className="w-full bg-petal-dark border border-plum/5 rounded-full px-5 py-3 font-outfit text-plum focus:outline-none focus:border-rose-gold/50 transition-colors" placeholder="Years" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] uppercase tracking-widest font-bold text-plum/40 ml-1">Country</label>
                                                <input required type="text" className="w-full bg-petal-dark border border-plum/5 rounded-full px-5 py-3 font-outfit text-plum focus:outline-none focus:border-rose-gold/50 transition-colors" placeholder="Current location" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] uppercase tracking-widest font-bold text-plum/40 ml-1">Mobile Number</label>
                                                <input required type="tel" className="w-full bg-petal-dark border border-plum/5 rounded-full px-5 py-3 font-outfit text-plum focus:outline-none focus:border-rose-gold/50 transition-colors" placeholder="+ country code" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-[10px] uppercase tracking-widest font-bold text-plum/40 ml-1">Professional Email</label>
                                            <input required type="email" className="w-full bg-petal-dark border border-plum/5 rounded-full px-5 py-3 font-outfit text-plum focus:outline-none focus:border-rose-gold/50 transition-colors" placeholder="s.jenkins@executive.com" />
                                        </div>

                                        <div className="pt-6">
                                            <button
                                                disabled={isSubmitting}
                                                type="submit"
                                                className="btn-rose w-full group flex items-center justify-center gap-3 py-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? 'Processing Application...' : 'Begin Admission Process'}
                                                {!isSubmitting && <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />}
                                            </button>
                                            <p className="mt-4 text-center text-[11px] text-plum/30 uppercase tracking-[0.2em] font-bold">
                                                Rigorous Selection · High Fidelity Growth
                                            </p>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-12 text-center"
                                >
                                    <div className="w-20 h-20 bg-rose-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-rose-gold/20">
                                        <Send size={32} className="text-rose-gold" />
                                    </div>
                                    <h2 className="text-[24px] font-garamond font-bold text-plum mb-4">Application Received.</h2>
                                    <p className="text-plum/60 font-light leading-relaxed max-w-[340px] mx-auto">
                                        The curation team will review your professional context. Expect an update within 48 hours.
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
