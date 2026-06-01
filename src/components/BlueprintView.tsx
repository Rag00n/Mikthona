import ReactMarkdown from 'react-markdown';
import { BLUEPRINT_MARKDOWN } from '../blueprint';

export default function BlueprintView() {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 pb-32">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Strategy & Blueprint</h1>
            <p className="text-slate-500">Comprehensive execution plan for Mikthona</p>
          </div>
        </div>
        
        <div className="prose prose-slate prose-orange max-w-none prose-headings:font-semibold prose-a:text-orange-600 hover:prose-a:text-orange-700">
          <ReactMarkdown>{BLUEPRINT_MARKDOWN}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
