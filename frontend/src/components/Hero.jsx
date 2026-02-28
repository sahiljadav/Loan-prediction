import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, ChevronRight, Activity, Zap, Lock, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-8"
                    >
                        <div className="flex -space-x-1">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                        </div>
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                            v2.0 AI Risk Protocol Live
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black tracking-tight text-white mb-8 leading-[0.9]"
                    >
                        Secure Your <br />
                        <span className="text-gradient">Financial Future</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto font-medium"
                    >
                        Leverage institutional-grade neural networks to predict loan defaults with 99.2% accuracy. CrediVault AI provides the ultimate risk management protocol for modern finance.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                    >
                        <Link to="/predict" className="group relative w-full sm:w-auto">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                            <button className="relative w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center space-x-3 active:scale-95">
                                <span>Launch Analysis</span>
                                <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>

                        <Link to="/about" className="text-white hover:text-blue-400 font-bold text-lg flex items-center space-x-2 transition-colors">
                            <span>How it works</span>
                            <Sparkles size={20} className="text-blue-500" />
                        </Link>
                    </motion.div>

                    {/* Stats/Proof */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-white/5"
                    >
                        {[
                            { label: 'Avg Accuracy', val: '99.2%', icon: Zap },
                            { label: 'Analysis Speed', val: '< 200ms', icon: Activity },
                            { label: 'Data Points', val: '150k+', icon: Shield },
                            { label: 'Encryption', val: 'AES-256', icon: Lock },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="flex items-center justify-center space-x-2 text-slate-500 mb-1">
                                    <stat.icon size={14} />
                                    <span className="text-[10px] uppercase font-bold tracking-widest leading-none">{stat.label}</span>
                                </div>
                                <div className="text-2xl font-black text-white">{stat.val}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
