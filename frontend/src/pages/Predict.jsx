import PredictionForm from '../components/PredictionForm';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';

const Predict = () => {
    return (
        <div className="pt-32 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto px-6 text-center mb-16"
            >
                <div className="inline-flex items-center space-x-2 text-blue-500 mb-4 px-4 py-2 bg-blue-500/5 rounded-full border border-blue-500/10">
                    <ShieldAlert size={16} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Risk Analysis Protocol Active</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter italic">
                    FINANCIAL <span className="text-gradient">ASSESSMENT</span>
                </h1>
                <p className="text-slate-500 font-medium max-w-2xl mx-auto">
                    Initialize our neural risk engine by entering applicant parameters.
                    CrediVault AI will analyze 16+ data vectors in real-time.
                </p>
            </motion.div>
            <PredictionForm />
        </div>
    );
};

export default Predict;
