import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, ChevronRight, BarChart3, Info, Home as HomeIcon } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/', icon: HomeIcon },
        { name: 'Analysis', path: '/predict', icon: BarChart3 },
        { name: 'About', path: '/about', icon: Info },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className={`relative flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${scrolled ? 'bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl' : 'bg-transparent border border-transparent'}`}>

                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative bg-slate-950 p-2 rounded-lg border border-white/10">
                                <Shield className="text-blue-500 group-hover:text-blue-400 transition-colors" size={24} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black tracking-tighter text-white">
                                CREDI<span className="text-blue-500">VAULT</span>
                            </span>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] -mt-1">
                                AI Risk Protocol
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${location.pathname === link.path ? 'text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
                                    />
                                )}
                            </Link>
                        ))}
                        <div className="pl-4 ml-4 border-l border-white/10">
                            <Link to="/predict" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-500/25 active:scale-95">
                                <span>Get Started</span>
                                <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-400 hover:text-white transition-colors">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 right-0 mt-2 px-6"
                    >
                        <div className="bg-slate-900/95 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-3xl space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/5 transition-colors"
                                >
                                    <div className="p-2 bg-slate-800 rounded-lg text-blue-500">
                                        <link.icon size={20} />
                                    </div>
                                    <span className="text-lg font-bold text-white">{link.name}</span>
                                </Link>
                            ))}
                            <Link
                                to="/predict"
                                onClick={() => setIsOpen(false)}
                                className="w-full flex items-center justify-center space-x-2 bg-blue-600 p-4 rounded-2xl text-white font-bold"
                            >
                                <span>Get Started</span>
                                <ChevronRight size={20} />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
