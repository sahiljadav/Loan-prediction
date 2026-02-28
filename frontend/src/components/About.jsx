import { motion } from 'framer-motion';
import { Cpu, Target, Zap, ShieldCheck, Database, LineChart } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-32 pb-24 max-w-5xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="flex items-center space-x-3 text-violet-500 mb-6 font-bold">
                    <Database size={20} />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Institutional Methodology</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-10 italic">
                    THE ARCHITECTURE OF <span className="text-gradient">CERTAINTY</span>
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-12 space-y-8">
                        <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-3xl">
                            CrediVault AI utilizes a proprietary <span className="text-white">Neural-Logistic Hybrid Architecture</span> with specialized class-weight balances calibrated for the modern volatile economy.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 pt-16 border-t border-white/5">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-black text-white tracking-tight flex items-center space-x-3">
                                    <Cpu size={24} className="text-violet-500" />
                                    <span>Risk Vector Integration</span>
                                </h3>
                                <p className="text-slate-500 leading-relaxed font-medium">
                                    Our protocol ingests 16 multidimensional data points across three primary analytical domains:
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {[
                                        { title: 'Identity', desc: 'Stability' },
                                        { title: 'Economy', desc: 'Solvency' },
                                        { title: 'Protocol', desc: 'Exposure' }
                                    ].map((item, i) => (
                                        <li key={i} className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                                            <div className="text-[10px] font-black text-white uppercase tracking-widest mb-1">{item.title}</div>
                                            <div className="text-[10px] text-slate-600 font-bold uppercase">{item.desc}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-black text-white tracking-tight flex items-center space-x-3">
                                    <ShieldCheck size={24} className="text-amber-500" />
                                    <span>Institutional Security</span>
                                </h3>
                                <p className="text-slate-500 leading-relaxed font-medium">
                                    Every calculation is protected by our proprietary entropy-based verification layer, ensuring that institutional decisions are backed by statistically absolute certainty and zero-bias modeling.
                                </p>
                                <div className="p-4 bg-amber-500/5 border border-amber-500/10 rounded-2xl flex items-center justify-between">
                                    <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Protocol Version</span>
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest">v2.4.0-STABLE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
