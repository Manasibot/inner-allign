'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function ModernNavigation() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (

        <motion.nav
            initial={{ y: -120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                padding: isScrolled ? '16px 40px' : '24px 40px',
                transition: 'all .5s ease',
                backdropFilter: isScrolled ? 'blur(14px)' : 'none',
                background: isScrolled
                    ? 'linear-gradient(135deg, rgba(123,92,255,0.95), rgba(244,114,182,0.95))'
                    : 'linear-gradient(135deg, rgba(123,92,255,0.65), rgba(244,114,182,0.65))',

                boxShadow: isScrolled
                    ? '0 8px 30px rgba(123,92,255,.15)'
                    : 'none'
            }}
        >

            <div
                style={{
                    maxWidth: 1200,
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >

                {/* LOGO */}

                <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        cursor: 'pointer'
                    }}
                >

                    <motion.div
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: .6 }}
                        style={{
                            width: 24,
                            height: 24,
                            borderRadius: 4,
                            background: 'linear-gradient(135deg,#7B5CFF,#F472B6)',
                            transform: 'rotate(45deg)'
                        }}
                    />

                    <span
                        style={{
                            fontFamily: 'Outfit',
                            fontWeight: 600,
                            fontSize: 16,
                            color: '#ffffff',
                            letterSpacing: '0.02em'
                        }}
                    >
                        The Inner
                        <span
                            style={{
                                background: 'linear-gradient(135deg,#8FCF9A,#6EE7B7)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                fontStyle: 'italic',
                                marginLeft: 4
                            }}
                        >
                            Alignment
                        </span>
                    </span>

                </motion.div>

                {/* DESKTOP MENU */}

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 40
                    }}
                >

                    {['Philosophy', 'Method', 'Journey', 'Faculty'].map((item) => (

                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            whileHover={{
                                y: -2,
                                scale: 1.05,
                                borderColor: '#8FCF9A',
                                backgroundColor: 'rgba(143,207,154,0.12)'
                            }}
                            whileTap={{ scale: .95 }}
                            transition={{ duration: 0.25 }}
                            style={{
                                fontFamily: 'Outfit',
                                fontSize: 13,
                                letterSpacing: '0.18em',
                                textTransform: 'uppercase',
                                fontWeight: 500,
                                color: '#ffffff',
                                cursor: 'pointer',
                                padding: '6px 14px',
                                borderRadius: '999px',
                                border: '1px solid transparent',
                                transition: 'all .3s ease'
                            }}
                        >
                            {item}
                        </motion.a>

                    ))}


                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 10px 25px rgba(244,114,182,0.65))'
                        }}
                        whileTap={{ scale: .95 }}
                        style={{
                            padding: '10px 24px',
                            borderRadius: 30,
                            border: 'none',
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: '0.08em',
                            cursor: 'pointer',
                            color: '#3F2A56',
                            background: 'linear-gradient(135deg,#8FCF9A,#8FCF9A)',
                            transition: 'all .3s ease'
                        }}
                    >

                        Apply for Sept '25

                    </motion.button>

                </div>

                {/* MOBILE TOGGLE */}

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#ffffff'
                    }}
                >

                    {isMobileMenuOpen ? <X /> : <Menu />}

                </button>

            </div>

            {/* MOBILE MENU */}

            <AnimatePresence>

                {isMobileMenuOpen && (

                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: .4 }}
                        style={{
                            overflow: 'hidden',
                            background: 'linear-gradient(135deg,#87ae73,#aac69c)',
                            marginTop: 20,
                            borderRadius: 16
                        }}
                    >

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 24,
                                padding: 24
                            }}
                        >

                            {['Philosophy', 'Method', 'Journey', 'Faculty'].map((item) => (

                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    whileHover={{
                                        x: 6,
                                        borderColor: '#8FCF9A',
                                        backgroundColor: 'rgba(143,207,154,0.12)'
                                    }}
                                    whileTap={{ scale: .96 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    transition={{ duration: 0.25 }}
                                    style={{
                                        fontFamily: 'Outfit',
                                        fontSize: 18,
                                        fontWeight: 500,
                                        color: '#ffffff',
                                        cursor: 'pointer',
                                        padding: '8px 16px',
                                        borderRadius: '999px',
                                        border: '1px solid transparent',
                                        transition: 'all .25s ease'
                                    }}
                                >

                                    {item}

                                </motion.a>

                            ))}


                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 10px 25px rgba(143,207,154,.4)'
                                }}
                                whileTap={{ scale: .95 }}
                                style={{
                                    marginTop: 10,
                                    padding: '12px 24px',
                                    borderRadius: 30,
                                    border: 'none',
                                    fontWeight: 600,
                                    fontSize: 14,
                                    color: '#3F2A56',
                                    // background: 'linear-gradient(135deg,#8FCF9A,#6EE7B7)',
                                       background: 'linear-gradient(135deg,#7B5CFF,#F472B6)',
                                    cursor: 'pointer'
                                }}
                            >

                                Apply for Sept '25

                            </motion.button>

                        </div>

                    </motion.div>

                )}

            </AnimatePresence>

        </motion.nav>

    )

}
