import React from 'react';
import { DashboardLayout } from './Dashboard';

export const CommunityPage = () => {
    return (
        <DashboardLayout>
            <div className="flex-1 flex h-full relative overflow-hidden bg-background-light dark:bg-background-dark">
                {/* Main Feed */}
                <div className="flex-1 flex flex-col h-full relative overflow-hidden">
                    <div className="flex-1 overflow-y-auto pb-20 custom-scrollbar">
                        <div className="max-w-[800px] mx-auto w-full flex flex-col gap-6 px-4 py-6 md:px-8">
                            {/* Page Heading */}
                            <div className="flex flex-col gap-2 pt-2">
                                <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Community Feed</h2>
                                <p className="text-slate-500 dark:text-text-secondary text-base font-normal">See what your squad is crushing today.</p>
                            </div>
                            
                            {/* Composer */}
                            <div className="w-full">
                                <div className="flex w-full flex-col rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-[#326744] overflow-hidden shadow-lg">
                                    <div className="flex p-4 gap-4 items-start">
                                        <div className="bg-center bg-no-repeat bg-cover rounded-full size-12 shrink-0 border-2 border-gray-200 dark:border-[#326744]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBO0cDnX_ao2Z-B96GAL9lenmRs8LooKnJIxMkDUYurw-LxhnCFwaZlqat8mqZQ4LihqDJOxL3ginDqC5lFJcnc9uTsPM5TX5KqW8QVPJyxWp4ekTmXaRrP5vKoIPEvRaIIlFDZpDtrS-eAAGVZCLCh5cf4SHktVscDbEgKx6VwS4jWUALkVIZfXg221e8G49fIN6W898qkaOwq8ySdMan0rg9DNv3sIDgtTds4Xp8uDKB06Qijsh6OdUa-OD36XazUZDMbFXAU_5Tx")'}}></div>
                                        <textarea className="w-full bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#458c5d] resize-none focus:outline-none text-base py-2" placeholder="Share a win or log a workout..." rows={2}></textarea>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-[#152b1d] px-4 py-3 flex justify-between items-center border-t border-gray-200 dark:border-[#326744]">
                                        <div className="flex gap-2">
                                            <button className="p-2 hover:bg-gray-200 dark:hover:bg-[#326744] rounded-full text-slate-500 dark:text-text-secondary hover:text-slate-900 dark:hover:text-white transition-colors">
                                                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                                            </button>
                                            <button className="p-2 hover:bg-gray-200 dark:hover:bg-[#326744] rounded-full text-slate-500 dark:text-text-secondary hover:text-slate-900 dark:hover:text-white transition-colors">
                                                <span className="material-symbols-outlined text-[20px]">bar_chart</span>
                                            </button>
                                            <button className="p-2 hover:bg-gray-200 dark:hover:bg-[#326744] rounded-full text-slate-500 dark:text-text-secondary hover:text-slate-900 dark:hover:text-white transition-colors">
                                                <span className="material-symbols-outlined text-[20px]">emoji_events</span>
                                            </button>
                                        </div>
                                        <button className="bg-primary text-[#112217] px-6 py-1.5 rounded-full text-sm font-bold hover:opacity-90 transition-opacity">
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Feed Card 1: Workout PR */}
                            <article className="bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-gray-200 dark:border-[#23482f] overflow-hidden">
                                <div className="p-4 flex gap-3 items-center">
                                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCaFxz-z2RnEajz2O8VtOf-6elz2wV-gVjNRCtTLo8XJOvdMYmV7mx4SNqtU68H0w512iSuimPbM2eB8xoj6DF0YgmXgPf9w9tJzmCjnHFoI6pFjEI9BhDtAJ2UpYGzyUEJjcMTP9z2DSJBRmNf38WZTMKtxgFrP4QeSb18vPhsR8SEWeFggKt69Rm04emOf9foM19s8GCEyy_MXJS57QdfCy3jH9CYK0erP5LrLVBtMXO-VwL_Md5j6IXMbESrMgxGq_M0lTHIHiPO")'}}></div>
                                    <div className="flex flex-col">
                                        <p className="text-slate-900 dark:text-white text-sm font-bold">Sarah J.</p>
                                        <p className="text-slate-500 dark:text-text-secondary text-xs">2 hours ago</p>
                                    </div>
                                </div>
                                <div className="px-4 pb-4">
                                    <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight mb-2">Just finished 'Leg Day Destruction' <span className="text-primary ml-2 text-sm font-normal border border-primary/30 px-2 py-0.5 rounded-full bg-primary/10">New PR!</span></p>
                                    <p className="text-slate-600 dark:text-text-secondary text-base font-normal mb-4">Sarah hit a new personal record of 225lbs on the squat rack today. Huge progress! 🦵🔥</p>
                                    <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl mb-4 relative group cursor-pointer" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIYFUYPxvGR3EI_qsrjjMQEvx44elJi1Kzp6AlB7IGAL50s0gYXWgciyk0aEhupxWSEvbx9qOX7xXzolqZefyWIT_AhmRIfBwg41k0pRIijPGvJUpdMQfv4P30ns5s9cxLCnw4gr14xD7eg7vyJv8mHd1k2t3d0muVIQb5qlE063Yd20iCBUtouEvCEkaz-2zzYPdfbFVs6A7Qi_Lpf3DYuXF0ouNoXWvpKtHgeagJkk3TI_03jPGwMOzaTCBTbf7VJGXnK624t6aK")'}}>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                    </div>
                                    {/* Action/Reaction Bar */}
                                    <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-[#326744]">
                                        <div className="flex gap-4">
                                            <button className="flex items-center gap-1.5 group">
                                                <span className="material-symbols-outlined text-slate-500 dark:text-text-secondary group-hover:text-primary transition-colors text-[24px]">thumb_up</span>
                                                <span className="text-slate-500 dark:text-text-secondary text-sm font-medium group-hover:text-slate-900 dark:group-hover:text-white">12</span>
                                            </button>
                                            <button className="flex items-center gap-1.5 group">
                                                <span className="material-symbols-outlined text-slate-500 dark:text-text-secondary group-hover:text-red-400 transition-colors text-[24px]">favorite</span>
                                                <span className="text-slate-500 dark:text-text-secondary text-sm font-medium group-hover:text-slate-900 dark:group-hover:text-white">4</span>
                                            </button>
                                            <button className="flex items-center gap-1.5 group">
                                                <span className="material-symbols-outlined text-slate-500 dark:text-text-secondary group-hover:text-orange-400 transition-colors text-[24px]">local_fire_department</span>
                                                <span className="text-slate-500 dark:text-text-secondary text-sm font-medium group-hover:text-slate-900 dark:group-hover:text-white">8</span>
                                            </button>
                                        </div>
                                        <button className="flex items-center gap-2 px-4 py-1.5 bg-primary/10 hover:bg-primary/20 dark:bg-[#326744]/50 dark:hover:bg-[#326744] text-primary rounded-full text-sm font-bold transition-colors">
                                            <span className="material-symbols-outlined text-[18px]">celebration</span>
                                            Cheer
                                        </button>
                                    </div>
                                </div>
                            </article>
                            
                            {/* Feed Card 2: Milestone */}
                            <article className="bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-gray-200 dark:border-[#23482f] overflow-hidden">
                                <div className="p-4 flex gap-3 items-center">
                                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDO0Ix7n0MWbykNpatBqBcrEV1Fhsuq-RlQBgcJLjFQduXkIm-OoD0gNcc4ZB0npi5ap5Ybfry3kKCp5fOrbjRMb0LPvk4uE2V7a6u7-hY67EiywuHTxmIxb_BzY5jssJyjkCmZfp9c-iETtIqR0xJL1I8n6kLaiAflofqJKo1SI2_riIgsKrsrQivBJgQwqVXZBvkJXK5ouUuwEuLTR3S18L4OgD1SeooQj11Hsz6DyjOOiqWnm57lvr1WpOaK4P1SHtpr0OsF2-cm")'}}></div>
                                    <div className="flex flex-col">
                                        <p className="text-slate-900 dark:text-white text-sm font-bold">Marcus T.</p>
                                        <p className="text-slate-500 dark:text-text-secondary text-xs">5 hours ago</p>
                                    </div>
                                </div>
                                <div className="px-4 pb-4">
                                    <div className="flex flex-col md:flex-row gap-4 items-center bg-gradient-to-r from-gray-100 to-gray-200 dark:from-[#193322] dark:to-[#23482f] p-6 rounded-xl border border-gray-200 dark:border-[#326744]">
                                        <div className="size-20 rounded-full bg-[#13ec5b]/20 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-primary text-5xl">local_fire_department</span>
                                        </div>
                                        <div className="flex flex-col text-center md:text-left">
                                            <h3 className="text-2xl font-black text-slate-900 dark:text-white italic">10 WEEK STREAK!</h3>
                                            <p className="text-slate-600 dark:text-text-secondary">Marcus hasn't missed a goal for 70 days straight. Unstoppable.</p>
                                        </div>
                                    </div>
                                    {/* Action/Reaction Bar */}
                                    <div className="flex items-center justify-between pt-4 mt-2">
                                        <div className="flex gap-4">
                                            <button className="flex items-center gap-1.5 group">
                                                <span className="material-symbols-outlined text-slate-500 dark:text-text-secondary group-hover:text-primary transition-colors text-[24px]">thumb_up</span>
                                                <span className="text-slate-500 dark:text-text-secondary text-sm font-medium group-hover:text-slate-900 dark:group-hover:text-white">45</span>
                                            </button>
                                            <button className="flex items-center gap-1.5 group">
                                                <span className="material-symbols-outlined text-slate-500 dark:text-text-secondary group-hover:text-yellow-400 transition-colors text-[24px]">bolt</span>
                                                <span className="text-slate-500 dark:text-text-secondary text-sm font-medium group-hover:text-slate-900 dark:group-hover:text-white">22</span>
                                            </button>
                                        </div>
                                        <div className="flex -space-x-2">
                                            <div className="size-8 rounded-full border-2 border-white dark:border-surface-dark bg-gray-500 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCXw48RxpzKEWVWuNZhm_zMZHEy7kfemElWFeXeaSq729wfD_iH9dwLdJ_g_Z0pGd17R91XYUK-ORQ_sElUZdOmg0soVf9oZ8cWB3rbIfrFL-Ln8s_ef1QuR7xAHwcwmG-TXUSF6qn7_R_FY9w8nooaIlDYcqwHFIFvCW_pslti2wJJLMGUyPBv-JP8z2dyk8bRl656ux82XYEaI_0haPwVHzg3bDwkkdj28MylVbuOj-BTFnJmh6Gu-aZk4JDnWqBYgOmvsVxIwn6")'}}></div>
                                            <div className="size-8 rounded-full border-2 border-white dark:border-surface-dark bg-gray-400 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBS-EigCpuneutk-yIBKKOYM3D10zwoFTQxF_qiChVpWe3kUCxkRIJT811pRgt3TtnruWQmC3n9nBdHyZCYIjQuxqsVf_iM5yT6Irwos-cfyZkSEhRZJ4ZxtrSQ_XVn4yMh7vvc8m_aY1wbAPd-fwsARxKvQbyKK5AzQ-h81rPAfiLfvpn_s2HysnTQ5xisAKc0igjtLr_7dy-FftvvY5pwbzHT5L76sJhGvrawR0dhJodeYTA_b28gJrsykkT1mwIKZhbnfuFvq0-9")'}}></div>
                                            <div className="size-8 rounded-full border-2 border-white dark:border-surface-dark bg-gray-200 dark:bg-gray-300 flex items-center justify-center text-[10px] text-black font-bold">+5</div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            
                            {/* Feed Card 3: Group Challenge */}
                            <article className="bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-gray-200 dark:border-[#23482f] overflow-hidden">
                                <div className="p-4 flex gap-3 items-center">
                                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 bg-primary flex items-center justify-center">
                                        <span className="material-symbols-outlined text-black">groups</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-slate-900 dark:text-white text-sm font-bold">Summer Shred Squad</p>
                                        <p className="text-slate-500 dark:text-text-secondary text-xs">Updated 10 mins ago</p>
                                    </div>
                                </div>
                                <div className="px-4 pb-4">
                                    <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight mb-3">Group Goal Update: 50% Complete! 🎯</p>
                                    <div className="w-full h-4 bg-gray-200 dark:bg-[#112217] rounded-full overflow-hidden mb-2">
                                        <div className="h-full bg-primary w-1/2 rounded-full shadow-[0_0_10px_rgba(19,236,91,0.5)] relative">
                                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50"></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-xs font-medium text-slate-500 dark:text-text-secondary mb-4">
                                        <span>0 km</span>
                                        <span className="text-slate-900 dark:text-white">500 / 1000 km Run</span>
                                        <span>1000 km</span>
                                    </div>
                                    <div className="w-full bg-center bg-no-repeat aspect-[21/9] bg-cover rounded-xl mb-4 relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCOQFxdAhZfj_5kOR45YkHYVDAPvNEMx_F8GrxkHWHBgUzdpg75FWtCfz_-DY3YyQRChfwRZuAydE3MCyNjKsWyTy8ths1K1M3U3vYijmBaFiHPQD2ddgx7IzUd5wwxHw6bRQ1cOQkloQprx3jxex1TzZACPtC_o-zuhy5XKpE6RbQonW1Vt6XMBbfZL0JOGLffcpqRCVeLWQTuyIczzE13VHgu2GBa34nCf9hHJrJJxyh8xylT02Gcgh085cEBT3cwqliljmPDOnE")'}}>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                            <p className="text-white text-sm font-medium">Keep pushing! We are ahead of schedule.</p>
                                        </div>
                                    </div>
                                    {/* Action/Reaction Bar */}
                                    <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-[#326744]">
                                        <div className="flex gap-4">
                                            <button className="flex items-center gap-1.5 group">
                                                <span className="material-symbols-outlined text-slate-500 dark:text-text-secondary group-hover:text-primary transition-colors text-[24px]">thumb_up</span>
                                                <span className="text-slate-500 dark:text-text-secondary text-sm font-medium group-hover:text-slate-900 dark:group-hover:text-white">89</span>
                                            </button>
                                            <button className="flex items-center gap-1.5 group">
                                                <span className="material-symbols-outlined text-slate-500 dark:text-text-secondary group-hover:text-blue-400 transition-colors text-[24px]">chat_bubble</span>
                                                <span className="text-slate-500 dark:text-text-secondary text-sm font-medium group-hover:text-slate-900 dark:group-hover:text-white">12</span>
                                            </button>
                                        </div>
                                        <button className="flex items-center gap-2 px-4 py-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-white dark:hover:bg-gray-200 dark:text-black rounded-full text-sm font-bold transition-colors">
                                            View Leaderboard
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar: Challenges & Widgets */}
                <aside className="w-80 hidden xl:flex flex-col border-l border-gray-200 dark:border-[#23482f] bg-gray-50/50 dark:bg-[#112217]/50 h-full shrink-0 overflow-y-auto p-6 gap-6 custom-scrollbar">
                    {/* Active Challenge Widget */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-slate-900 dark:text-white text-lg font-bold">Active Challenge</h3>
                        <div className="bg-white dark:bg-surface-dark rounded-xl p-4 border border-gray-200 dark:border-[#326744] flex flex-col gap-3">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-slate-900 dark:text-white font-bold text-base">30-Day Streak Club</p>
                                    <p className="text-slate-500 dark:text-text-secondary text-xs">Ends in 12 days</p>
                                </div>
                                <span className="material-symbols-outlined text-primary">verified</span>
                            </div>
                            <div className="flex items-center gap-4 mt-2">
                                <div className="relative size-16 shrink-0">
                                    <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                                        <path className="text-gray-200 dark:text-[#326744]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
                                        <path className="text-primary drop-shadow-[0_0_4px_rgba(19,236,91,0.5)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="75, 100" strokeLinecap="round" strokeWidth="4"></path>
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                                        <span className="text-slate-900 dark:text-white text-xs font-bold">75%</span>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm text-slate-600 dark:text-text-secondary">You are crushing it!</p>
                                    <button className="text-primary text-xs font-bold text-left hover:underline">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Trending Workouts */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-slate-900 dark:text-white text-lg font-bold">Trending Now</h3>
                        <div className="flex flex-col gap-3">
                            {[
                                { name: "Upper Body Power", completions: "1.2k", icon: "fitness_center" },
                                { name: "HIIT Cardio Blast", completions: "850", icon: "directions_run" },
                                { name: "Morning Yoga Flow", completions: "2.4k", icon: "self_improvement" }
                            ].map((trend, i) => (
                                <div key={i} className="bg-white dark:bg-surface-dark p-3 rounded-xl border border-gray-200 dark:border-[#23482f] flex gap-3 items-center hover:bg-gray-50 dark:hover:bg-[#23482f] cursor-pointer transition-colors group">
                                    <div className="bg-gray-100 dark:bg-[#326744] rounded-lg size-10 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-slate-700 dark:text-white">{trend.icon}</span>
                                    </div>
                                    <div className="flex flex-col overflow-hidden">
                                        <p className="text-slate-900 dark:text-white text-sm font-bold truncate">{trend.name}</p>
                                        <p className="text-slate-500 dark:text-text-secondary text-xs">{trend.completions} completions</p>
                                    </div>
                                    <span className="material-symbols-outlined text-slate-400 dark:text-text-secondary ml-auto text-sm group-hover:text-primary">arrow_forward_ios</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Suggested Squad */}
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-slate-900 dark:text-white text-lg font-bold">Suggested Squad</h3>
                            <button className="text-primary text-xs font-bold hover:text-slate-900 dark:hover:text-white transition-colors">View All</button>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="size-8 rounded-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHNZ-ga6aP-ATTRTNHODHfxX6iMtwxgTmlO_jusM-Zxd-QxPxSV6qh5lsu7nXu8FIT8CVMVg_CCrfNw8VfCWdxdIugtaR9TIQx69OMpvC0qSGEDhSUcO55509UfvrVcfUg84NHjHrmtZBhMwuoY40irk4Op2ROhR2XqfwrY_6fXAlUc3ooYCSRz8LLuGdhU1rhY_Go-qNH8rc7BMBASz1VdnxjrJG-kuUhXnxT_ezlmo3sc60nH6kwfzAoQdnyvDmMucR1nPn6J51V")'}}></div>
                                    <div className="flex flex-col">
                                        <p className="text-slate-900 dark:text-white text-sm font-bold">Alex R.</p>
                                        <p className="text-slate-500 dark:text-text-secondary text-[10px]">Powerlifting</p>
                                    </div>
                                </div>
                                <button className="size-8 rounded-full bg-primary/20 hover:bg-primary text-primary hover:text-[#112217] flex items-center justify-center transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">person_add</span>
                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="size-8 rounded-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPTAVC5_lDaO3FANRmxwJWmVpV2JGYAXSk7x1zx0sfO7k5MN3ryTtluFXfKpaJvfjzEM14FKP8cTevPJ_mxB-k8ws7B84vUNKWhxixJDs6RaOJHgnQJpIQE657UzNp6Rw9bXg86ROpOs6EAEpDLjangVZwczoBYURNCe8UXKrL8v0IxPV3fqQvrBttsOOZsLhduOHGkaD4rR-Xi9GGy0dIMwp8LUU4P490fezIJmbesf2TNI3hYKOHp7yzSicghY1j1qCByAWQ4F5v")'}}></div>
                                    <div className="flex flex-col">
                                        <p className="text-slate-900 dark:text-white text-sm font-bold">Bethany</p>
                                        <p className="text-slate-500 dark:text-text-secondary text-[10px]">Marathon Runner</p>
                                    </div>
                                </div>
                                <button className="size-8 rounded-full bg-primary/20 hover:bg-primary text-primary hover:text-[#112217] flex items-center justify-center transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">person_add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </DashboardLayout>
    );
};