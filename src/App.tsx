import { useState } from 'react';
import { Store, FileText, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Storefront from './components/Storefront';
import BlueprintView from './components/BlueprintView';

export default function App() {
  const [view, setView] = useState<'storefront' | 'blueprint'>('storefront');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-200">
      {/* Dev Navigation Bar (Hidden from actual end users) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white rounded-full px-4 py-2 shadow-2xl flex items-center gap-2 border border-slate-700/50 backdrop-blur-md">
        <button
          onClick={() => setView('storefront')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            view === 'storefront' ? 'bg-orange-500 text-white' : 'hover:bg-slate-800 text-slate-300'
          }`}
        >
          <Store size={16} />
          Storefront
        </button>
        <button
          onClick={() => setView('blueprint')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            view === 'blueprint' ? 'bg-blue-500 text-white' : 'hover:bg-slate-800 text-slate-300'
          }`}
        >
          <FileText size={16} />
          Blueprint Spec
        </button>
      </div>

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        {view === 'storefront' ? (
          <motion.div
            key="storefront"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Storefront />
          </motion.div>
        ) : (
          <motion.div
            key="blueprint"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <BlueprintView />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
