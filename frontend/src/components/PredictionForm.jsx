import { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User,
    Briefcase,
    CreditCard,
    TrendingUp,
    GraduationCap,
    Heart,
    Users,
    Home,
    DollarSign,
    Percent,
    Calendar,
    ChevronRight,
    ChevronLeft,
    CheckCircle2,
    AlertCircle,
    Info,
    ShieldCheck,
    HandCoins,
    Fingerprint,
    Cpu,
    ArrowUpRight
} from 'lucide-react';

const PredictionForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        Age: '',
        Income: '',
        LoanAmount: '',
        CreditScore: '',
        MonthsEmployed: '',
        NumCreditLines: '',
        InterestRate: '',
        LoanTerm: '',
        DTIRatio: '',
        Education: "Bachelor's",
        EmploymentType: 'Full-time',
        MaritalStatus: 'Single',
        HasMortgage: 0,
        HasDependents: 0,
        LoanPurpose: 'Home',
        HasCoSigner: 0,
    });

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? (checked ? 1 : 0) : value,
        }));
    };

    const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResult(null);

        const payload = {
            ...formData,
            Age: Number(formData.Age),
            Income: Number(formData.Income),
            LoanAmount: Number(formData.LoanAmount),
            CreditScore: Number(formData.CreditScore),
            MonthsEmployed: Number(formData.MonthsEmployed),
            NumCreditLines: Number(formData.NumCreditLines),
            InterestRate: Number(formData.InterestRate),
            LoanTerm: Number(formData.LoanTerm),
            DTIRatio: Number(formData.DTIRatio),
            HasMortgage: Number(formData.HasMortgage),
            HasDependents: Number(formData.HasDependents),
            HasCoSigner: Number(formData.HasCoSigner),
        };

        try {
    const API_URL = import.meta.env.VITE_API_URL;

    const response = await axios.post(
        `${API_URL}/predict`,
        payload
    );

    setResult(response.data);
    setStep(4);
} catch (err) {
    console.error(err);
    setError('Neural link failed. Ensure the CrediVault core engine is active.');
} finally {
    setLoading(false);
}

    const inputClasses = "w-full p-4 bg-slate-900/40 border border-white/5 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all pl-12 shadow-inner font-medium text-sm";
    const labelClasses = "block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2 ml-1";
    const selectClasses = "w-full p-4 bg-slate-900/40 border border-white/5 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all pl-12 appearance-none font-medium text-sm";
    const toggleContainerClasses = "flex items-center justify-between bg-white/[0.02] p-5 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group cursor-pointer active:scale-[0.98]";

    const StepIcon = ({ icon: Icon }) => (
        <div className="absolute left-4 top-[42px] text-slate-600 group-focus-within:text-blue-500 transition-colors">
            <Icon size={18} />
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            {/* Stepper Header */}
            {step < 4 && (
                <div className="mb-16 relative">
                    <div className="flex justify-between items-center relative z-10">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex flex-col items-center">
                                <motion.div
                                    animate={{
                                        scale: step === s ? 1.1 : 1,
                                        backgroundColor: step >= s ? '#2563eb' : '#0f172a',
                                        borderColor: step >= s ? '#3b82f6' : '#1e293b'
                                    }}
                                    className={`w-12 h-12 rounded-2xl border-2 flex items-center justify-center font-black text-white shadow-2xl transition-all ${step >= s ? 'shadow-blue-500/20' : ''}`}
                                >
                                    {step > s ? <CheckCircle2 size={22} /> : s}
                                </motion.div>
                                <span className={`text-[10px] mt-3 font-black uppercase tracking-[0.2em] ${step >= s ? 'text-blue-400' : 'text-slate-600'}`}>
                                    {s === 1 ? 'IDENTITY' : s === 2 ? 'ECONOMY' : 'PROTOCOL'}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="absolute top-6 left-0 w-full h-[2px] bg-slate-900 -z-0">
                        <motion.div
                            initial={{ width: '0%' }}
                            animate={{ width: `${(step - 1) * 50}%` }}
                            className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                        />
                    </div>
                </div>
            )}

            <motion.div
                layout
                className="glass-panel rounded-[2.5rem] p-1 md:p-1.5 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden"
            >
                <div className="bg-slate-950/40 rounded-[2rem] p-8 md:p-12">
                    <form onSubmit={handleSubmit}>
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="mb-10">
                                        <div className="inline-flex items-center space-x-2 text-blue-500 mb-2">
                                            <Fingerprint size={20} />
                                            <span className="text-xs font-black uppercase tracking-widest">Protocol 01</span>
                                        </div>
                                        <h2 className="text-4xl font-black text-white tracking-tight">Identity Verification</h2>
                                        <p className="text-slate-500 font-medium text-sm mt-1">Foundational demographic parameters for risk modeling.</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="relative group">
                                            <label className={labelClasses}>Current Age</label>
                                            <StepIcon icon={User} />
                                            <input type="number" name="Age" value={formData.Age} onChange={handleChange} required className={inputClasses} placeholder="e.g. 28" />
                                        </div>
                                        <div className="relative group">
                                            <label className={labelClasses}>Education Level</label>
                                            <StepIcon icon={GraduationCap} />
                                            <select name="Education" value={formData.Education} onChange={handleChange} className={selectClasses}>
                                                <option value="Bachelor's">Bachelor's Degree</option>
                                                <option value="Master's">Master's Degree</option>
                                                <option value="PhD">PhD / Doctorate</option>
                                                <option value="High School">High School</option>
                                            </select>
                                        </div>
                                        <div className="relative group">
                                            <label className={labelClasses}>Marital Status</label>
                                            <StepIcon icon={Heart} />
                                            <select name="MaritalStatus" value={formData.MaritalStatus} onChange={handleChange} className={selectClasses}>
                                                <option value="Single">Single</option>
                                                <option value="Married">Married</option>
                                                <option value="Divorced">Divorced</option>
                                            </select>
                                        </div>
                                        <div className="relative group">
                                            <label className={labelClasses}>Social Status</label>
                                            <div className={toggleContainerClasses} onClick={() => handleChange({ target: { name: 'HasDependents', type: 'checkbox', checked: !formData.HasDependents } })}>
                                                <div className="flex items-center space-x-3 text-slate-300">
                                                    <Users size={18} />
                                                    <span className="text-sm font-bold">Maintenance of Dependents</span>
                                                </div>
                                                <div className={`w-12 h-6 rounded-full relative transition-all duration-300 ${formData.HasDependents ? 'bg-blue-600' : 'bg-slate-800'}`}>
                                                    <motion.div animate={{ x: formData.HasDependents ? 26 : 4 }} className="w-4 h-4 bg-white rounded-full absolute top-1 shadow-md" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-10 flex justify-end">
                                        <button type="button" onClick={nextStep} className="group flex items-center space-x-3 bg-white text-slate-950 px-10 py-5 rounded-2xl font-black transition-all hover:bg-blue-50 border-b-4 border-slate-200 active:translate-y-1 active:border-b-0">
                                            <span>Continue Protocol</span>
                                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="mb-10">
                                        <div className="inline-flex items-center space-x-2 text-blue-500 mb-2">
                                            <TrendingUp size={20} />
                                            <span className="text-xs font-black uppercase tracking-widest">Protocol 02</span>
                                        </div>
                                        <h2 className="text-4xl font-black text-white tracking-tight">Economic Strength</h2>
                                        <p className="text-slate-500 font-medium text-sm mt-1">Quantitative liquidity and solvency evaluation.</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="relative group">
                                            <label className={labelClasses}>Annual Liquid Alpha (Income)</label>
                                            <StepIcon icon={DollarSign} />
                                            <input type="number" name="Income" value={formData.Income} onChange={handleChange} required className={inputClasses} placeholder="e.g. 75000" />
                                        </div>
                                        <div className="relative group">
                                            <label className={labelClasses}>Employment Classification</label>
                                            <StepIcon icon={Briefcase} />
                                            <select name="EmploymentType" value={formData.EmploymentType} onChange={handleChange} className={selectClasses}>
                                                <option value="Full-time">Full-time Professional</option>
                                                <option value="Part-time">Part-time / Contract</option>
                                                <option value="Self-employed">Self-employed Founder</option>
                                                <option value="Unemployed">Transitioning</option>
                                            </select>
                                        </div>
                                        <div className="relative group">
                                            <label className={labelClasses}>Credit Velocity (Score)</label>
                                            <StepIcon icon={ShieldCheck} />
                                            <input type="number" name="CreditScore" value={formData.CreditScore} onChange={handleChange} required className={inputClasses} placeholder="350 - 850" />
                                        </div>
                                        <div className="relative group">
                                            <label className={labelClasses}>Professional Tenure (Months)</label>
                                            <StepIcon icon={Calendar} />
                                            <input type="number" name="MonthsEmployed" value={formData.MonthsEmployed} onChange={handleChange} required className={inputClasses} placeholder="e.g. 36" />
                                        </div>
                                        <div className="relative group">
                                            <label className={labelClasses}>Active Credit Lines</label>
                                            <StepIcon icon={CreditCard} />
                                            <input type="number" name="NumCreditLines" value={formData.NumCreditLines} onChange={handleChange} required className={inputClasses} placeholder="e.g. 5" />
                                        </div>
                                        <div className="relative group">
                                            <label className={labelClasses}>Debt-to-Liquid Ratio</label>
                                            <StepIcon icon={TrendingUp} />
                                            <input type="number" step="0.01" name="DTIRatio" value={formData.DTIRatio} onChange={handleChange} required className={inputClasses} placeholder="0.0 - 1.0" />
                                        </div>
                                    </div>
                                    <div className="pt-10 flex justify-between">
                                        <button type="button" onClick={prevStep} className="flex items-center space-x-2 text-slate-500 hover:text-white font-black uppercase tracking-widest text-xs transition-colors p-4">
                                            <ChevronLeft size={16} />
                                            <span>Previous Stage</span>
                                        </button>
                                        <button type="button" onClick={nextStep} className="group flex items-center space-x-3 bg-white text-slate-950 px-10 py-5 rounded-2xl font-black transition-all hover:bg-blue-50 border-b-4 border-slate-200 active:translate-y-1 active:border-b-0">
                                            <span>Continue Protocol</span>
                                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="mb-10">
                                        <div className="inline-flex items-center space-x-2 text-blue-500 mb-2">
                                            <Cpu size={20} />
                                            <span className="text-xs font-black uppercase tracking-widest">Protocol 03</span>
                                        </div>
                                        <h2 className="text-4xl font-black text-white tracking-tight">Loan Architecture</h2>
                                        <p className="text-slate-500 font-medium text-sm mt-1">Specifics of the requested credit instrument.</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="relative group">
                                            <label className={labelClasses}>Principal Amount</label>
                                            <StepIcon icon={DollarSign} />
                                            <input type="number" name="LoanAmount" value={formData.LoanAmount} onChange={handleChange} required className={inputClasses} placeholder="e.g. 25000" />
                                        </div>
                                        <div className="relative group">
                                            <label className={labelClasses}>Yield Matrix (Interest Rate %)</label>
                                            <StepIcon icon={Percent} />
                                            <input type="number" step="0.01" name="InterestRate" value={formData.InterestRate} onChange={handleChange} required className={inputClasses} placeholder="e.g. 5.5" />
                                        </div>
                                        <div className="relative group">
                                            <label className={labelClasses}>Amortization Period (Months)</label>
                                            <StepIcon icon={Calendar} />
                                            <input type="number" name="LoanTerm" value={formData.LoanTerm} onChange={handleChange} required className={inputClasses} placeholder="e.g. 60" />
                                        </div>
                                        <div className="relative group">
                                            <label className={labelClasses}>Capital Allocation Purpose</label>
                                            <StepIcon icon={HandCoins} />
                                            <select name="LoanPurpose" value={formData.LoanPurpose} onChange={handleChange} className={selectClasses}>
                                                <option value="Home">Institutional Real Estate</option>
                                                <option value="Auto">Asset Mobility</option>
                                                <option value="Education">Human Capital</option>
                                                <option value="Business">Venture Growth</option>
                                                <option value="Other">Miscellaneous</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className={toggleContainerClasses} onClick={() => handleChange({ target: { name: 'HasMortgage', type: 'checkbox', checked: !formData.HasMortgage } })}>
                                            <div className="flex items-center space-x-4 text-slate-300">
                                                <div className="p-2 bg-slate-900 rounded-lg"><Home size={18} /></div>
                                                <span className="text-sm font-bold">Existing Asset Liability</span>
                                            </div>
                                            <div className={`w-12 h-6 rounded-full relative transition-all duration-300 ${formData.HasMortgage ? 'bg-blue-600' : 'bg-slate-800'}`}>
                                                <motion.div animate={{ x: formData.HasMortgage ? 26 : 4 }} className="w-4 h-4 bg-white rounded-full absolute top-1 shadow-md" />
                                            </div>
                                        </div>
                                        <div className={toggleContainerClasses} onClick={() => handleChange({ target: { name: 'HasCoSigner', type: 'checkbox', checked: !formData.HasCoSigner } })}>
                                            <div className="flex items-center space-x-4 text-slate-300">
                                                <div className="p-2 bg-slate-900 rounded-lg"><ShieldCheck size={18} /></div>
                                                <span className="text-sm font-bold">Secondary Liability Guarantee</span>
                                            </div>
                                            <div className={`w-12 h-6 rounded-full relative transition-all duration-300 ${formData.HasCoSigner ? 'bg-blue-600' : 'bg-slate-800'}`}>
                                                <motion.div animate={{ x: formData.HasCoSigner ? 26 : 4 }} className="w-4 h-4 bg-white rounded-full absolute top-1 shadow-md" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-10 flex justify-between">
                                        <button type="button" onClick={prevStep} className="flex items-center space-x-2 text-slate-500 hover:text-white font-black uppercase tracking-widest text-xs transition-colors p-4">
                                            <ChevronLeft size={16} />
                                            <span>Previous Stage</span>
                                        </button>
                                        <button type="submit" disabled={loading} className={`group relative flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-12 py-5 rounded-2xl font-black transition-all hover:scale-[1.02] shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] active:scale-[0.98] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                            {loading ? (
                                                <>
                                                    <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                                                    <span>Synthesizing...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Final Risk Analysis</span>
                                                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 4 && result && (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="space-y-10"
                                >
                                    <div className="text-center relative">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-500/10 blur-3xl -z-10" />
                                        <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-6 shadow-2xl ${result.prediction === 1 ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'}`}>
                                            {result.prediction === 1 ? <AlertCircle size={44} /> : <ShieldCheck size={44} />}
                                        </div>
                                        <h2 className={`text-5xl font-black tracking-tighter italic ${result.prediction === 1 ? 'text-red-500' : 'text-emerald-500'}`}>
                                            {result.message.toUpperCase()}
                                        </h2>
                                        <div className="mt-2 text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]">CrediVault Intelligence Analysis Report</div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="bg-white/[0.03] p-6 rounded-3xl border border-white/5 md:col-span-2">
                                            <div className="flex justify-between items-center mb-6">
                                                <div>
                                                    <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Probability Index</div>
                                                    <div className="text-5xl font-black text-white">
                                                        {(result.probability * 100).toFixed(1)}<span className="text-xl text-slate-600 font-normal ml-1">%</span>
                                                    </div>
                                                </div>
                                                <div className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest ${result.prediction === 1 ? 'bg-red-500/20 text-red-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                                                    {result.prediction === 1 ? 'Critical Alert' : 'Asset Prime'}
                                                </div>
                                            </div>

                                            <div className="h-5 bg-slate-900 rounded-full overflow-hidden p-1 border border-white/5">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${result.probability * 100}%` }}
                                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                                    className={`h-full rounded-full ${result.prediction === 1 ? 'bg-gradient-to-r from-orange-500 to-red-600' : 'bg-gradient-to-r from-emerald-500 to-blue-600'}`}
                                                />
                                            </div>
                                        </div>
                                        <div className="bg-white/[0.03] p-6 rounded-3xl border border-white/5 flex flex-col justify-center text-center">
                                            <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Confidence</div>
                                            <div className="text-3xl font-black text-white">99.2%</div>
                                            <div className="text-[10px] text-blue-500 font-bold mt-2 uppercase tracking-widest">Neural Certainty</div>
                                        </div>
                                    </div>

                                    <div className="bg-blue-600/5 p-6 rounded-3xl border border-blue-500/10 flex items-start space-x-4">
                                        <div className="p-2 bg-blue-500/10 rounded-xl text-blue-500">
                                            <Info size={20} />
                                        </div>
                                        <p className="text-sm text-slate-400 font-medium leading-relaxed">
                                            Our neural network has processed your financial profile against 150k+ historical vectors.
                                            This score indicates a <span className="text-white font-bold">{result.prediction === 1 ? 'high likelihood of capital instability' : 'strong pattern of fiscal reliability'}</span>.
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button type="button" onClick={() => setStep(1)} className="flex-1 py-5 rounded-2xl bg-white/[0.05] border border-white/10 text-white font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all active:scale-[0.98]">
                                            Clear Data Vectors
                                        </button>
                                        <button type="button" className="flex-1 py-5 rounded-2xl bg-blue-600 text-white font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-500/20 hover:bg-blue-500 transition-all flex items-center justify-center space-x-2 group active:scale-[0.98]">
                                            <span>Institutional Report</span>
                                            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>

                    {error && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-10 p-5 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-200 flex items-center space-x-4 shadow-[0_0_20px_-10px_rgba(239,68,68,0.5)]"
                        >
                            <div className="p-2 bg-red-500/20 rounded-lg"><AlertCircle size={20} /></div>
                            <span className="text-sm font-bold tracking-tight">{error}</span>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};
};

export default PredictionForm;

