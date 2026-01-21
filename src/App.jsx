import { useState } from 'react'

function App() {
  const [advice, setAdvice] = useState('Click the button for wisdom...');

  const fetchAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 text-white font-sans">
      <div className="bg-slate-800 p-10 rounded-3xl shadow-2xl border border-slate-700 max-w-lg w-full text-center">
        <h1 className="text-emerald-400 font-mono text-sm uppercase tracking-widest mb-6">Advice App</h1>
        <p className="text-3xl font-bold leading-snug mb-10 italic">"{advice}"</p>
        <button 
          onClick={fetchAdvice}
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black py-4 px-10 rounded-2xl transition-all active:scale-95"
        >
          GET NEW ADVICE
        </button>
      </div>
      <footer className="mt-8 text-slate-500 text-sm">Developed by Samruddhi Kadam</footer>
    </div>
  )
}

export default App