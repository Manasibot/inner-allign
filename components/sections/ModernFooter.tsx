'use client';

export default function ModernFooter() {
    return (
        <footer className="py-24 px-6 border-t border-primary/5 relative overflow-hidden bg-neutral-offwhite">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <div className="max-w-content mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-2">
                        <span className="text-neutral-heading font-outfit font-bold text-[24px] tracking-tighter block mb-6 uppercase">
                            The Inner <span className="text-gradient italic">Alignment</span>
                        </span>
                        <p className="text-neutral-subheading/40 text-[13px] max-w-[300px] leading-relaxed uppercase tracking-widest font-bold">
                            An elite 3-day leadership intensive for women architecting the next era of influence.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-neutral-heading font-outfit font-semibold text-[14px] uppercase tracking-widest mb-6 border-b border-primary/5 pb-2">Navigation</h4>
                        <ul className="space-y-4">
                            {['Philosophy', 'Method', 'Journey', 'Faculty'].map(link => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase()}`} className="text-neutral-subheading/40 hover:text-primary transition-colors text-[13px] uppercase tracking-widest font-bold">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-neutral-heading font-outfit font-semibold text-[14px] uppercase tracking-widest mb-6 border-b border-primary/5 pb-2">Connect</h4>
                        <ul className="space-y-4">
                            {['Instagram', 'LinkedIn', 'Curator Email'].map(item => (
                                <li key={item}>
                                    <a href="#" className="text-neutral-subheading/40 hover:text-primary transition-colors text-[13px] uppercase tracking-widest font-bold">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-neutral-subheading/20 text-[10px] uppercase tracking-[0.3em] font-bold">
                        © 2024 THE INNER ALIGNMENT EXPERIENCE. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-neutral-subheading/20 hover:text-neutral-subheading/40 text-[10px] uppercase tracking-widest font-bold transition-colors">Privacy Policy</a>
                        <a href="#" className="text-neutral-subheading/20 hover:text-neutral-subheading/40 text-[10px] uppercase tracking-widest font-bold transition-colors">Terms of Intake</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
