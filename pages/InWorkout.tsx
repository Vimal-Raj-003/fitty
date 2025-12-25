import React from 'react';
import { useNavigate } from 'react-router-dom';

export const InWorkoutPage = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-white flex flex-col overflow-x-hidden">
            <header className="sticky top-0 z-50 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-surface-border">
                <div className="px-4 md:px-8 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors text-slate-400 hover:text-white">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <h2 className="text-lg font-bold leading-none tracking-tight">Upper Body Power</h2>
                                <span className="px-1.5 py-0.5 rounded-md bg-surface-dark border border-surface-border text-[10px] font-bold text-primary uppercase tracking-wider">Lvl 14</span>
                            </div>
                            <span className="text-xs text-text-dim mt-0.5 font-medium">Week 4 • Day 2</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="hidden md:flex items-center gap-2 bg-accent-fire/10 px-3 py-1.5 rounded-full border border-accent-fire/20 text-accent-fire shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                            <span className="material-symbols-filled text-lg animate-pulse-slow">local_fire_department</span>
                            <span className="text-xs font-bold uppercase tracking-wide">12 Day Streak</span>
                        </div>
                        <div className="hidden lg:flex items-center gap-2 bg-surface-dark px-3 py-1.5 rounded-full border border-surface-border">
                            <span className="material-symbols-outlined text-primary text-sm">timer</span>
                            <span className="text-sm font-mono font-medium tracking-wide tabular-nums">00:42:15</span>
                        </div>
                        <div className="size-9 rounded-full bg-slate-200 dark:bg-surface-dark overflow-hidden border border-surface-border relative group cursor-pointer" role="img" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTM7XooTTa0Gt2DOAvghmH4c2hcFZ8hJ6TT7bEyMdDUTPz-Luxa7GY5asPytDlPoHF3angdcyk8RIMidNYTMy-8cIictMS_p-6UEfpdKhe8UgpOTaiOXD0c6AowTnLcRDsL7PshmDjD9tEx73NDGqiaiDnmF3Nj_V11rw5Qbolk0wn3y734Nw8D_KQEvfZO7AH-qLuYGtMSz4CZ2plUFFaYk_QiFqyfSiKO3UVbiQn7aq4ISMH_vw2l2UzifTtHGBomvAw9BInxCgF')", backgroundSize: "cover"}}></div>
                    </div>
                </div>
                <div className="w-full h-1 bg-surface-dark relative">
                    <div className="h-full bg-gradient-to-r from-primary/60 to-primary shadow-[0_0_10px_rgba(19,236,91,0.5)] transition-all duration-500 rounded-r-full" style={{width: "45%"}}></div>
                    <div className="absolute top-1/2 -translate-y-1/2 left-[25%] size-1.5 bg-surface-border rounded-full border border-background-dark z-10"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 left-[50%] size-1.5 bg-surface-border rounded-full border border-background-dark z-10"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 left-[75%] size-1.5 bg-surface-border rounded-full border border-background-dark z-10"></div>
                </div>
            </header>

            <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 md:px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <section className="lg:col-span-7 flex flex-col gap-5">
                    <div className="bg-surface-dark rounded-full p-1 flex relative border border-surface-border shadow-sm max-w-md mx-auto lg:mx-0 w-full">
                        <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-primary text-background-dark font-bold shadow-md transition-all relative z-10">
                            <span className="bg-background-dark/20 size-5 rounded-full flex items-center justify-center text-[10px] font-black">A</span>
                            <span className="truncate text-sm">Bench Press</span>
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-full text-text-dim hover:text-white hover:bg-white/5 transition-all">
                            <span className="bg-surface-border size-5 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-300">B</span>
                            <span className="truncate text-sm">Bent Over Row</span>
                        </button>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between items-center px-1 mb-1">
                            <div>
                                <h1 className="text-3xl font-bold text-white tracking-tight">Barbell Bench Press</h1>
                                <div className="flex items-center gap-2 mt-1.5">
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/5 border border-white/10 text-text-dim uppercase tracking-wide">Compound</span>
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/5 border border-white/10 text-text-dim uppercase tracking-wide">Chest</span>
                                </div>
                            </div>
                            <button className="text-primary hover:text-primary-hover text-xs font-bold uppercase tracking-wider flex items-center gap-1 py-2 px-3 rounded-lg hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20">
                                <span className="material-symbols-outlined text-base">info</span> Guide
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="glass-panel rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden group hover:bg-surface-dark/80 transition-colors h-32">
                            <div className="flex justify-between items-start">
                                <div className="text-[10px] font-bold text-text-dim uppercase tracking-widest">Last Session</div>
                                <span className="material-symbols-outlined text-slate-600 text-lg group-hover:text-slate-400 transition-colors">history</span>
                            </div>
                            <div className="flex items-baseline gap-1 mt-1">
                                <span className="text-3xl font-bold text-white tracking-tighter tabular-nums">100</span>
                                <span className="text-xs font-bold text-text-dim mr-1">kg</span>
                                <span className="text-xl text-slate-600 font-light mx-1">×</span>
                                <span className="text-3xl font-bold text-white tracking-tighter tabular-nums">8</span>
                                <span className="text-xs font-bold text-text-dim">reps</span>
                            </div>
                            <div className="mt-auto flex items-center gap-3 pt-2">
                                <div className="h-1.5 flex-1 bg-surface-border/50 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[85%] rounded-full shadow-[0_0_10px_rgba(19,236,91,0.3)]"></div>
                                </div>
                                <span className="text-[10px] text-primary font-bold whitespace-nowrap">RPE 8.5</span>
                            </div>
                        </div>
                        <div className="glass-panel rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between hover:bg-surface-dark/80 transition-colors h-32">
                            <div className="flex justify-between items-center relative z-10">
                                <div className="text-[10px] font-bold text-text-dim uppercase tracking-widest">Volume Trend</div>
                                <div className="flex items-center gap-1 text-primary bg-primary/10 px-1.5 py-0.5 rounded text-[10px] font-bold">
                                    <span className="material-symbols-outlined text-sm">trending_up</span> +5%
                                </div>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 h-16 flex items-end justify-between px-5 pb-0 z-0">
                                <div className="w-[12%] h-[60%] bg-surface-border rounded-t-sm hover:bg-primary/50 transition-colors cursor-help" title="90kg"></div>
                                <div className="w-[12%] h-[65%] bg-surface-border rounded-t-sm hover:bg-primary/50 transition-colors cursor-help" title="92.5kg"></div>
                                <div className="w-[12%] h-[70%] bg-surface-border rounded-t-sm hover:bg-primary/50 transition-colors cursor-help" title="95kg"></div>
                                <div className="w-[12%] h-[65%] bg-surface-border rounded-t-sm hover:bg-primary/50 transition-colors cursor-help" title="95kg"></div>
                                <div className="w-[12%] h-[80%] bg-surface-border rounded-t-sm hover:bg-primary/50 transition-colors cursor-help" title="97.5kg"></div>
                                <div className="w-[12%] h-[90%] bg-primary shadow-[0_0_10px_rgba(19,236,91,0.3)] rounded-t-sm cursor-help" title="100kg (Current)"></div>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-accent-purple/20 to-indigo-500/10 border border-accent-purple/20 p-4 flex items-center justify-between shadow-lg group">
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="bg-accent-purple text-white size-10 flex items-center justify-center rounded-xl shadow-lg shadow-accent-purple/20 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-filled text-xl">electric_bolt</span>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-accent-purple uppercase tracking-widest mb-0.5">Bonus Challenge</p>
                                <p className="text-sm text-white font-medium">Push for <span className="text-accent-purple font-bold">9 reps</span> to beat your volume PR!</p>
                            </div>
                        </div>
                        <div className="relative z-10 flex flex-col items-end justify-center">
                             <div className="text-xs font-bold text-accent-purple bg-accent-purple/10 px-2.5 py-1 rounded-lg border border-accent-purple/20">+50 XP</div>
                        </div>
                        <div className="absolute inset-0 bg-grid-pattern opacity-30 mix-blend-overlay"></div>
                    </div>

                    <div className="bg-surface-dark rounded-2xl p-6 border border-surface-border shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center size-7 rounded-lg bg-surface-border/50 text-white font-bold text-sm border border-surface-border shadow-inner">3</div>
                                <span className="text-sm font-bold text-slate-300">Working Set</span>
                            </div>
                            <button className="text-xs font-medium text-text-dim hover:text-white flex items-center gap-1 transition-colors">
                                <span className="material-symbols-outlined text-base">tune</span> Options
                            </button>
                        </div>
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="flex-1 w-full">
                                <div className="flex justify-between items-center mb-2 px-1">
                                     <label className="block text-[10px] font-bold text-text-dim uppercase tracking-widest">Weight (kg)</label>
                                     <span className="text-[10px] font-bold text-accent-gold bg-accent-gold/5 px-1.5 py-0.5 rounded border border-accent-gold/20 flex items-center gap-1 animate-pulse">
                                         <span className="material-symbols-filled text-[10px]">emoji_events</span> PR Attempt
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="size-14 rounded-xl bg-background-dark border border-surface-border hover:border-slate-500 text-slate-400 hover:text-white flex items-center justify-center transition-colors active:scale-95">
                                        <span className="material-symbols-outlined">remove</span>
                                    </button>
                                    <div className="relative flex-1 group h-14">
                                        <input className="w-full h-full bg-background-dark border-2 border-surface-border focus:border-accent-gold/50 focus:ring-0 rounded-xl text-3xl font-bold text-center text-white placeholder-slate-700 transition-colors shadow-inner tabular-nums" placeholder="0" type="number" defaultValue="102.5"/>
                                    </div>
                                    <button className="size-14 rounded-xl bg-background-dark border border-surface-border hover:border-slate-500 text-slate-400 hover:text-white flex items-center justify-center transition-colors active:scale-95">
                                        <span className="material-symbols-outlined">add</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 w-full">
                                <label className="block text-[10px] font-bold text-text-dim mb-2 uppercase tracking-widest px-1">Reps</label>
                                <div className="flex items-center gap-2">
                                    <button className="size-14 rounded-xl bg-background-dark border border-surface-border hover:border-slate-500 text-slate-400 hover:text-white flex items-center justify-center transition-colors active:scale-95">
                                        <span className="material-symbols-outlined">remove</span>
                                    </button>
                                    <div className="relative flex-1 h-14">
                                        <input className="w-full h-full bg-background-dark border-2 border-surface-border focus:border-primary focus:ring-0 rounded-xl text-3xl font-bold text-center text-white placeholder-slate-700 transition-colors shadow-inner tabular-nums" placeholder="8" type="number" defaultValue="8"/>
                                    </div>
                                    <button className="size-14 rounded-xl bg-background-dark border border-surface-border hover:border-slate-500 text-slate-400 hover:text-white flex items-center justify-center transition-colors active:scale-95">
                                        <span className="material-symbols-outlined">add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button className="w-full mt-6 h-14 bg-primary hover:bg-primary-hover text-surface-dark rounded-xl flex items-center justify-center gap-3 font-bold text-base uppercase tracking-wide transition-all hover:shadow-[0_0_20px_rgba(19,236,91,0.4)] active:scale-[0.99] group relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <span className="material-symbols-outlined material-symbols-filled text-xl group-hover:scale-110 transition-transform relative z-10">check_circle</span>
                            <span className="relative z-10">Log Set & Claim XP</span>
                        </button>
                    </div>

                    <div className="mt-2 px-1">
                        <h3 className="text-xs font-bold text-text-dim mb-3 uppercase tracking-wider ml-1">History</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 pl-4 rounded-xl bg-surface-dark/40 border border-surface-border/50 hover:bg-surface-dark transition-colors group cursor-pointer relative overflow-hidden">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-gold"></div>
                                <div className="flex items-center gap-4">
                                    <div className="size-8 rounded-full bg-accent-gold text-surface-dark flex items-center justify-center text-xs font-black shadow-[0_0_10px_rgba(251,191,36,0.4)]">1</div>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-white font-bold text-lg tabular-nums">100</span><span className="text-[10px] font-bold text-text-dim uppercase">kg</span>
                                                <span className="mx-1 text-slate-600">×</span>
                                                <span className="text-white font-bold text-lg tabular-nums">10</span><span className="text-[10px] font-bold text-text-dim uppercase">reps</span>
                                            </div>
                                            <span className="px-1.5 py-0.5 rounded bg-accent-gold/10 text-accent-gold text-[10px] font-bold border border-accent-gold/20 flex items-center gap-1">
                                                <span className="material-symbols-filled text-[10px]">emoji_events</span> PR
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="px-2 py-1 rounded bg-black/20 border border-white/5 text-[10px] text-text-dim font-mono">RPE 9</div>
                                    <button className="text-slate-500 hover:text-white transition-colors p-1"><span className="material-symbols-outlined text-lg">more_vert</span></button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-3 pl-4 rounded-xl bg-surface-dark/40 border border-surface-border/50 hover:bg-surface-dark transition-colors group cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="size-8 rounded-full bg-surface-border text-slate-300 flex items-center justify-center text-xs font-bold group-hover:bg-primary group-hover:text-background-dark transition-colors">2</div>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-white font-bold text-lg tabular-nums">100</span><span className="text-[10px] font-bold text-text-dim uppercase">kg</span>
                                                <span className="mx-1 text-slate-600">×</span>
                                                <span className="text-white font-bold text-lg tabular-nums">8</span><span className="text-[10px] font-bold text-text-dim uppercase">reps</span>
                                            </div>
                                            <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[10px] font-bold border border-blue-500/20 flex items-center gap-1" title="AI Form Check">
                                                <span className="material-symbols-filled text-[10px]">verified</span> Perfect Form
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="px-2 py-1 rounded bg-black/20 border border-white/5 text-[10px] text-text-dim font-mono">RPE 8.5</div>
                                    <button className="text-slate-500 hover:text-white transition-colors p-1"><span className="material-symbols-outlined text-lg">more_vert</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <aside className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
                    <div className="bg-surface-dark rounded-2xl p-6 border border-surface-border relative overflow-hidden shadow-lg group">
                        <div className="flex justify-between items-start mb-2 relative z-10">
                            <h3 className="text-white font-bold text-sm flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-lg">timer</span> Recovery
                            </h3>
                            <button className="text-text-dim hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"><span className="material-symbols-outlined text-lg">settings</span></button>
                        </div>
                        <div className="flex flex-col items-center justify-center py-2 relative z-10">
                            <div className="relative size-40 flex items-center justify-center mb-6">
                                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" fill="none" r="45" stroke="#16261d" strokeWidth="8"></circle>
                                    <circle cx="50" cy="50" fill="none" r="45" stroke="#23482f" strokeWidth="2"></circle>
                                    <circle className="drop-shadow-[0_0_15px_rgba(19,236,91,0.4)] transition-all duration-1000" cx="50" cy="50" fill="none" r="45" stroke="#13ec5b" strokeDasharray="283" strokeDashoffset="60" strokeLinecap="round" strokeWidth="6"></circle>
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-4xl font-bold text-white tracking-tighter tabular-nums">01:45</span>
                                    <span className="text-[9px] text-primary font-bold uppercase tracking-widest mt-1 animate-pulse flex items-center gap-1">
                                        <span className="material-symbols-filled text-xs">battery_charging_full</span> Refilling
                                    </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-2 w-full">
                                <button className="flex items-center justify-center py-2.5 rounded-lg bg-background-dark border border-surface-border hover:border-slate-500 text-slate-300 hover:text-white transition-all active:scale-95 font-bold text-xs">
                                    -10s
                                </button>
                                <button className="flex items-center justify-center py-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-all active:scale-95 font-bold text-xs uppercase tracking-wider">
                                    Ready!
                                </button>
                                <button className="flex items-center justify-center py-2.5 rounded-lg bg-background-dark border border-surface-border hover:border-slate-500 text-slate-300 hover:text-white transition-all active:scale-95 font-bold text-xs">
                                    +30s
                                </button>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-primary/5 rounded-2xl filter blur-3xl opacity-20 pointer-events-none"></div>
                    </div>
                    
                    <div className="bg-surface-dark rounded-2xl p-6 border border-surface-border">
                        <div className="flex justify-between items-center mb-5">
                            <h3 className="text-white font-bold text-sm flex items-center gap-2">
                                <span className="material-symbols-outlined text-text-dim text-lg">fitness_center</span> Plate Math
                            </h3>
                            <div className="text-[10px] text-text-dim font-mono font-bold uppercase tracking-wider bg-black/30 border border-white/5 px-2 py-1 rounded">Bar: 20kg</div>
                        </div>
                        <div className="relative h-36 flex items-center justify-center bg-background-dark rounded-xl border border-surface-border mb-4 overflow-hidden shadow-inner group">
                            <div className="absolute w-full h-4 bg-gradient-to-b from-slate-600 to-slate-800 z-0"></div>
                            <div className="absolute left-6 w-3 h-10 bg-slate-400 rounded-sm z-10 shadow-lg border-r border-slate-600"></div>
                            <div className="flex items-center gap-0.5 z-20 ml-16">
                                <div className="h-28 w-6 bg-red-600 rounded-sm border-x border-red-800 shadow-[2px_0_5px_rgba(0,0,0,0.5)] flex items-center justify-center relative cursor-help transition-transform hover:-translate-y-1">
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none"></div>
                                    <span className="text-[8px] text-red-950 font-black -rotate-90 absolute whitespace-nowrap">20</span>
                                </div>
                                <div className="h-28 w-6 bg-red-600 rounded-sm border-x border-red-800 shadow-[2px_0_5px_rgba(0,0,0,0.5)] flex items-center justify-center relative cursor-help transition-transform hover:-translate-y-1">
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none"></div>
                                    <span className="text-[8px] text-red-950 font-black -rotate-90 absolute whitespace-nowrap">20</span>
                                </div>
                                <div className="h-8 w-5 ml-1 bg-slate-300 rounded-sm border border-slate-400 shadow-xl flex items-center justify-center relative">
                                    <div className="w-1 h-5 bg-slate-400/50 rounded-full"></div>
                                    <div className="absolute -right-1.5 w-1.5 h-4 bg-slate-400 rotate-45 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-xs text-text-dim px-1">
                            <div className="flex gap-4">
                                <span className="font-medium">Total: <b className="text-white tabular-nums text-sm">100</b> kg</span>
                                <span className="font-medium">Side: <b className="text-white tabular-nums text-sm">40</b> kg</span>
                            </div>
                            <button className="text-primary hover:text-white transition-colors text-[10px] font-bold uppercase tracking-wider">Edit Inventory</button>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xs font-bold text-text-dim uppercase tracking-widest pl-1">Next Up</h3>
                        <div className="bg-surface-dark rounded-2xl p-1 border border-surface-border divide-y divide-surface-border/50">
                            <div className="p-3 flex items-center gap-3 hover:bg-white/5 transition-colors cursor-pointer rounded-xl group">
                                <div className="bg-background-dark size-10 rounded-lg flex items-center justify-center border border-surface-border group-hover:border-primary/30 transition-colors shrink-0">
                                    <span className="material-symbols-outlined text-text-dim group-hover:text-primary text-xl">drag_handle</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">Pull Ups</p>
                                    <p className="text-xs text-text-dim font-medium">3 sets × 8-12 reps</p>
                                </div>
                            </div>
                            <div className="p-3 flex items-center gap-3 hover:bg-white/5 transition-colors cursor-pointer rounded-xl group">
                                <div className="bg-background-dark size-10 rounded-lg flex items-center justify-center border border-surface-border group-hover:border-primary/30 transition-colors shrink-0">
                                    <span className="material-symbols-outlined text-text-dim group-hover:text-primary text-xl">drag_handle</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">Dumbbell Shoulder Press</p>
                                    <p className="text-xs text-text-dim font-medium">3 sets × 10-12 reps</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </main>
            
            <div className="sticky bottom-0 w-full bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-surface-border py-4 px-4 md:px-8 z-40">
                <div className="max-w-[1400px] mx-auto flex justify-between items-center">
                    <button className="text-text-dim hover:text-white text-xs font-bold uppercase tracking-wider transition-colors px-4 py-2 hover:bg-white/5 rounded-lg">Skip Exercise</button>
                    <button onClick={() => navigate('/dashboard')} className="bg-surface-dark hover:bg-white/10 text-white border border-surface-border hover:border-slate-500 px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 shadow-lg active:scale-95 group">
                        <span>Finish Workout</span>
                        <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">flag</span>
                    </button>
                </div>
            </div>
        </div>
    );
};