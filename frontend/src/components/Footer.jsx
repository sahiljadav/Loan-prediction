import { Shield, Github, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative mt-20 border-t border-white/5 bg-slate-950/50 backdrop-blur-3xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <Link to="/" className="flex items-center space-x-3 group w-fit">
                            <div className="relative bg-slate-900 p-2 rounded-lg border border-white/10 group-hover:border-blue-500/30 transition-colors">
                                <Shield className="text-blue-500" size={24} />
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-white">
                                CREDI<span className="text-blue-500">VAULT</span>
                            </span>
                        </Link>
                        <p className="text-slate-500 max-w-sm font-medium leading-relaxed">
                            Empowering financial institutions with institutional-grade predictive intelligence. Our neural architecture sets the global standard for credit risk mitigation.
                        </p>
                        <div className="flex items-center space-x-4">
                            {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                                <a key={i} href="#" className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-slate-500 hover:text-blue-400 hover:border-blue-500/30 transition-all hover:-translate-y-1">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-8 md:col-span-2">
                        <div className="space-y-6">
                            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em]">Platform</h4>
                            <ul className="space-y-4">
                                {['Analysis Engine', 'Risk Protocols', 'API Documentation', 'Neural Models'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="group flex items-center space-x-2 text-sm text-slate-500 hover:text-blue-400 transition-colors">
                                            <span>{item}</span>
                                            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em]">Company</h4>
                            <ul className="space-y-4">
                                {['Our Mission', 'Methodology', 'Privacy Vault', 'Security Standards'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest italic">
                        &copy; {currentYear} CREDI-VAULT AI PROTOCOL. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex items-center space-x-6 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                        <a href="#" className="hover:text-white transition-colors">Compliance</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
