import { motion } from 'framer-motion';

const RiskCharts = () => {
    // Neural Distribution Data (Mock Institutional Data)
    const points = [40, 65, 30, 85, 45, 95, 20, 75, 50, 60, 40];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Neural Risk Distribution Chart */}
            <div className="glass-panel p-8 rounded-[2rem] overflow-hidden group">
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-1">Neural Volatility Index</h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase">Real-time vector distribution</p>
                    </div>
                    <div className="px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full">
                        <span className="text-[10px] font-black text-violet-400 uppercase tracking-widest">Live Flow</span>
                    </div>
                </div>

                <div className="h-48 flex items-end justify-between space-x-1 relative">
                    {/* Animated SVG Path for the main curve */}
                    <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                        <motion.path
                            d={`M 0 100 ${points.map((p, i) => `L ${(i / (points.length - 1)) * 100}% ${100 - p}%`).join(' ')} V 100 H 0 Z`}
                            fill="url(#gradient-violet)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                        <defs>
                            <linearGradient id="gradient-violet" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {points.map((p, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end group/bar">
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${p}%` }}
                                transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                                className="w-full bg-gradient-to-t from-violet-600/20 to-violet-400/40 rounded-t-sm group-hover/bar:from-violet-500 group-hover/bar:to-violet-300 transition-all cursor-crosshair relative"
                            >
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 border border-white/10 px-2 py-1 rounded text-[10px] font-black text-white opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap z-20">
                                    {p}.{Math.floor(Math.random() * 9)}%
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/5 flex justify-between">
                    <div className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_8px_#8b5cf6]" />
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Exposure</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-slate-700" />
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Baseline</span>
                        </div>
                    </div>
                    <div className="text-[10px] font-black text-white uppercase tracking-widest">Σ = 1.0423</div>
                </div>
            </div>

            {/* Institutional Confidence Matrix */}
            <div className="glass-panel p-8 rounded-[2rem] group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl -z-10" />

                <div className="mb-8">
                    <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-1">Asset Allocation Probability</h4>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Multi-vector analysis</p>
                </div>

                <div className="space-y-6">
                    {[
                        { label: 'Liquidity Solvency', value: 92, color: 'bg-emerald-500' },
                        { label: 'Risk Mitigation', value: 78, color: 'bg-amber-500' },
                        { label: 'Neural Precision', value: 96, color: 'bg-blue-500' },
                    ].map((item, i) => (
                        <div key={i} className="space-y-2">
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                                <span className="text-slate-400">{item.label}</span>
                                <span className="text-white">{item.value}%</span>
                            </div>
                            <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-white/5">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${item.value}%` }}
                                    transition={{ duration: 2, delay: i * 0.2, ease: "circOut" }}
                                    className={`h-full rounded-full ${item.color} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                    <div className="flex items-center justify-between">
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Global Stability Index</div>
                        <div className="text-sm font-black text-white italic">AA+ PROTECTED</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RiskCharts;
