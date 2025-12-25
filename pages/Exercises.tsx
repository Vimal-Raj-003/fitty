import React from 'react';
import { DashboardLayout } from './Dashboard';

export const ExercisesPage = () => {
    return (
        <DashboardLayout>
            <div className="flex-1 flex flex-col h-full overflow-hidden relative">
                 {/* Header & Filters */}
                 <div className="flex-shrink-0 px-8 pt-8 pb-4 z-10 bg-background-dark/95 backdrop-blur-sm sticky top-0">
                     <div className="max-w-7xl mx-auto flex flex-col gap-6">
                        <div className="flex justify-between items-end">
                            <div>
                                <h2 className="text-4xl font-black tracking-tight text-white mb-2">Exercise Library</h2>
                                <p className="text-white/60 text-lg">Master your movement patterns with expert guidance.</p>
                            </div>
                            <div className="hidden lg:flex gap-3">
                                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-dark border border-white/10 hover:border-primary/50 text-white transition-all">
                                    <span className="material-symbols-outlined text-primary text-[20px]">bookmark</span>
                                    <span>Saved</span>
                                </button>
                                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-dark border border-white/10 hover:border-primary/50 text-white transition-all">
                                    <span className="material-symbols-outlined text-primary text-[20px]">history</span>
                                    <span>Recent</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                            <div className="relative w-full md:w-96 group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary transition-colors">
                                    <span className="material-symbols-outlined">search</span>
                                </span>
                                <input className="w-full bg-surface-dark text-white placeholder-white/40 pl-12 pr-4 py-3.5 rounded-full border border-transparent focus:border-primary/50 focus:ring-0 focus:outline-none transition-all shadow-sm" placeholder="Search for pushups, squats..." type="text"/>
                            </div>
                            <div className="flex-1 overflow-x-auto hide-scrollbar w-full">
                                <div className="flex gap-2 items-center">
                                    <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-primary text-background-dark font-bold text-sm transition-transform hover:scale-105 shadow-lg shadow-primary/20">
                                        All Exercises
                                    </button>
                                    <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-surface-dark border border-white/10 text-white hover:bg-[#1f3d2a] hover:border-primary/30 text-sm transition-colors">
                                        Strength
                                    </button>
                                    <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-surface-dark border border-white/10 text-white hover:bg-[#1f3d2a] hover:border-primary/30 text-sm transition-colors">
                                        Cardio
                                    </button>
                                    <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-surface-dark border border-white/10 text-white hover:bg-[#1f3d2a] hover:border-primary/30 text-sm transition-colors">
                                        Flexibility
                                    </button>
                                    <div className="w-px h-6 bg-white/10 mx-2"></div>
                                    <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-surface-dark border border-white/10 text-white hover:bg-[#1f3d2a] hover:border-primary/30 text-sm transition-colors flex items-center gap-1.5">
                                        <span>Equipment</span>
                                        <span className="material-symbols-outlined text-[16px]">expand_more</span>
                                    </button>
                                    <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-surface-dark border border-white/10 text-white hover:bg-[#1f3d2a] hover:border-primary/30 text-sm transition-colors flex items-center gap-1.5">
                                        <span>Muscle Group</span>
                                        <span className="material-symbols-outlined text-[16px]">expand_more</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                     </div>
                 </div>

                 <div className="flex-1 overflow-y-auto px-8 pb-12 pt-2 custom-scrollbar">
                     <div className="max-w-7xl mx-auto">
                        <div className="mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">local_fire_department</span>
                            <h3 className="text-white font-semibold text-lg">Trending this week</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {[
                                { 
                                    name: "Standard Pushup", 
                                    group: "Chest • Triceps • Core", 
                                    level: "Intermediate", 
                                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuACzn6ZRmvS2meySserv7Oo6_gXltkHI65PuotE10eXNMR0v7A5fgCzSBN-kS2P8L-5UIJ4BCaWK5jLgcKNLrLIA32VAjGcfmCInCub_9ChsKg6rha_ussyllxkmJydxIS23FK644CsiUtMq8yKXTx-QqL5RMLJU0TAVy3Lcox9A_SDKld9bP52trdH2NXPfy-WbKqGp3N-6-mMOc5U2EeGGR2VZxXvYyT1UKDAM0rfn2s0CawX3sI2BRVjZA7tlnqJxFxrUn3Y7d4E",
                                    desc: "Keep your body in a straight line, engage your core, and lower your chest until it nearly touches the floor.",
                                    statIcon: "group",
                                    statText: "4.2k users",
                                    duration: "0:45"
                                },
                                { 
                                    name: "HIIT Sprint", 
                                    group: "Cardio • Legs", 
                                    level: "Beginner", 
                                    levelColor: "text-primary",
                                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrZck1QtQ8ni0HS2cuUaLL3jeGR7lZ-gy5LY0EGycol32ulqhPsLcRNO7plFlOeU6wIlJFC3ivpMamyy_mjpgGRf0mLGmwbT7Pn-0EtRqCKESMNfSuCiH9g9vJ44jF1K-TQ_sG2Mc3O2j3HOVbPWtzgAERR2m_GLzKomYYmUVWtjCatx5guZV3YTJv4LmGohKywykCpB2VvS1_kUE4SOwzXNYEMtWTMaKh2FA2nisiGdMxjItl2NxehCDy3ZXXziMpPZSoKPO4PSQm",
                                    desc: "Drive your knees high and pump arms vigorously. Maintain maximum intensity for the full duration of the interval.",
                                    statIcon: "trending_up",
                                    statText: "Trending"
                                },
                                { 
                                    name: "Shoulder Press", 
                                    group: "Shoulders • Upper Body", 
                                    level: "Advanced", 
                                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDh90inq0z-t2ncJVnLZo8grCKfqB4KN7ijh4tGqIadTqCylnhQE-6XLoIds8tnAcSgW9lXupjbatQNLoCEVZjFSp7sVM7IzhrEv1dFoHuXY9roLitFt0Tr2VgDt9-M2TRGFYICdHcHMVl97w18lksp-RjtE76UwCTImQbFrb5_scJt4Yiswpskg4GYHZcr9iCGP9sSuPSG3_1VSNmofm2XEVSKqiYqfMxOjJt7wvbUkEgATrwvX8WwmHUM53lnRadSYQAnlh02VCXo",
                                    desc: "Start with weights at shoulder height. Press overhead extending arms fully, then lower back to shoulders with control.",
                                    statIcon: "star",
                                    statText: "4.9 (200+)",
                                    statColor: "text-yellow-500"
                                },
                                { 
                                    name: "Back Squat", 
                                    group: "Legs • Glutes • Core", 
                                    level: "Advanced", 
                                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5w0lyVyIGKxIPaGVTDmnjswcAr_H_A4m2zhmmczcy8ODazK2-9ju1psigj8kUAiU9AM5P0jOdq5TJa3aLR8YsoUe5lB9bXjSliyLz5Mykj3JnhUluVov8Tl22NLzCePlEHaQSEp9wEeSAQnxPRin_uLU3kaAlFyUal9jgAFJHBxWJQNx6udcm9gn9wCA4NzjR8Z8gBMgZGqAU-GksBhY5Onnxzi1hP8szgBfPq0FOjtNOZNccde4PsRKP0CxvJnMFMdioIsn-iY_S",
                                    desc: "Keep chest up, hinge hips back and down, and lower until thighs are parallel to the ground. Drive up through your heels.",
                                    statIcon: "group",
                                    statText: "8k users"
                                },
                                { 
                                    name: "Plank Hold", 
                                    group: "Core • Stability", 
                                    level: "Beginner", 
                                    levelColor: "text-primary",
                                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUI2AZaFn1ZmzCG6j5oMDVI2Nm8nefs6rPOuxhnbc4drIDbznSrSi6lwu9gkaf7Vyb1-IjMoEKAqE8zWcRrcnZSD6dPFUhiwSYONu8aD2rS_6987bI1XLKiKBZrRH3c6wk_3nQtGdUCdRaD8y51yU0n88wHYfnyhvZzIi77-7S9tuwlyqcnryRvi248hdTGdcFcUvP8JRlyS2w6UVbp9HWGClkGTc-dliY2HajoycCeRsTSjqAO7tDZjg6Uup7aPXnkflISX1tvoIK",
                                    desc: "Maintain a straight line from head to heels. Keep hips level and core tight to prevent sagging or piking.",
                                    statIcon: "schedule",
                                    statText: "New",
                                    statColor: "text-white/40"
                                },
                                { 
                                    name: "Conventional Deadlift", 
                                    group: "Hamstrings • Back • Glutes", 
                                    level: "Expert", 
                                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAT2C1d224xm3K7RS1ZlY-JRKf0CjT5LRVZ33H4Pg4vW4oMalzX6NG4GoQYWbVE-PDCWhtSmN2nuTym1fvZRRvsd395VFtqXSLN8ncTxYsOCpv_TAgjaycs2Ijku7ztxGTlV8JH7RVwdutvXt79vQQdCbjObdLSA6o2OAjuRBHyEEfabNQ4gLOmrnzIhqrmuRfcRCxZFZGuq723meprBEtK_Kve2PKai9LkVp1Fl1xViK5j1DTePBRMlLwL-0sJHcSszszIPVAyiY0J",
                                    desc: "Stand with feet hip-width. Hinge at hips to grip bar, keep back flat, and lift by driving hips forward to stand tall.",
                                    statIcon: "group",
                                    statText: "5.5k users"
                                },
                                { 
                                    name: "Walking Lunges", 
                                    group: "Legs • Balance", 
                                    level: "Beginner", 
                                    levelColor: "text-primary",
                                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBk_lQUvBVmf_jNSwpFc5kgB-2oCV4o-CbbK_-kp84Xx0KspF4HzrZooki8JtfAST9s3xGlnNqWEbk-9qZUvLOJObJAjiTlbFmcQ378OFDq2ZeJvKhen70swdXPYTZfZPitqvc24inKSIZC7-oaAIMt54UQO82o6I2EUeYXIRFd8yoPtAMO02pDaZN82qRN0YzQQLZUe6gvzf-gdkm5I0Me6PTZed5dlbyG1rdmewFUEJLu0tvtp4SpCOicMC_h27XYYrISczD6JRjE",
                                    desc: "Step forward and lower hips until both knees are at 90 degrees. Push off front foot to transition to the next step.",
                                    statIcon: "local_fire_department",
                                    statText: "Hot"
                                },
                                { 
                                    name: "Wide Grip Pull-up", 
                                    group: "Lats • Biceps", 
                                    level: "Intermediate", 
                                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJx1h1OW3UPp3WqzgCD7wMFpb932TRnCfiBJxZ21sURN1Llfl8FoPMBULkiXwVBUhIn686vhOchul7hJEDucaupR2GI0-edNeQKo39ZLbyLKMM2bPD49_fW88c1b2cDeUehF5QA9BqmW4bl_MobYn5DLt6Ci5iAFwQeuQdlHjiwoII2vXSQOjSsyblJ22z1bWLa4gx6b0jBthWGged46OLqV_dYAPY6GoTz9vUYhA1EgFM11x75dWF_RznM1R22H4wbEvIF8fC6pMb",
                                    desc: "Grip the bar wider than shoulder-width. Pull your chest towards the bar by driving elbows down, then lower slowly.",
                                    statIcon: "verified",
                                    statText: "Coach Pick"
                                }
                            ].map((ex, i) => (
                                <div key={i} className="group relative bg-surface-dark rounded-xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border border-transparent hover:border-primary/20 flex flex-col h-full">
                                    <div className="aspect-video w-full bg-gray-800 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{backgroundImage: `url('${ex.img}')`}}></div>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                        <div className="absolute top-3 left-3">
                                            <span className={`bg-black/60 backdrop-blur-md ${ex.levelColor || 'text-white'} text-xs font-medium px-2.5 py-1 rounded-full border border-white/10`}>
                                                {ex.level}
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="bg-primary/90 rounded-full p-3 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                                <span className="material-symbols-outlined text-background-dark text-3xl">play_arrow</span>
                                            </div>
                                        </div>
                                        {ex.duration && (
                                            <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 rounded text-xs text-white font-mono">
                                                {ex.duration}
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-5 flex flex-col flex-1">
                                        <div className="mb-3">
                                            <h3 className="text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors">{ex.name}</h3>
                                            <p className="text-primary/90 text-xs font-medium mt-1">{ex.group}</p>
                                        </div>
                                        <p className="text-white/60 text-sm mb-4 leading-relaxed line-clamp-3">
                                            {ex.desc}
                                        </p>
                                        <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-3">
                                            <div className="flex items-center gap-1.5">
                                                <span className={`material-symbols-outlined ${ex.statColor || 'text-primary'} text-[18px]`}>{ex.statIcon}</span>
                                                <span className="text-xs font-medium text-white/70">{ex.statText}</span>
                                            </div>
                                            <button className="text-primary hover:text-white transition-colors">
                                                <span className="material-symbols-outlined">add_circle</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 flex justify-center pb-8">
                            <button className="px-8 py-3 rounded-full border border-white/10 text-white font-medium hover:bg-surface-dark hover:border-primary/50 transition-colors flex items-center gap-2">
                                <span>Load More Exercises</span>
                                <span className="material-symbols-outlined text-lg">expand_more</span>
                            </button>
                        </div>
                     </div>
                 </div>
            </div>
        </DashboardLayout>
    );
};