import React from 'react';
import { DashboardLayout } from './Dashboard';

export const SettingsPage = () => {
    return (
        <DashboardLayout>
             <div className="flex-1 flex justify-center py-8 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-[960px] flex flex-col gap-10">
                    <section className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-primary mb-1">
                            <span className="material-symbols-outlined">security</span>
                            <span className="text-xs font-bold uppercase tracking-wider">Trust Center</span>
                        </div>
                        <h1 className="text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em] font-display">
                            Data Control Center
                        </h1>
                        <p className="text-[#92c9a4] text-lg font-normal leading-normal max-w-2xl">
                            Manage your integrations, configure sync logic, and export your complete history. Your data, your rules.
                        </p>
                    </section>

                    <section>
                        <div className="flex items-center justify-between px-2 pb-5 pt-2 border-b border-[#23482f] mb-6">
                            <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Integrations</h2>
                            <span className="text-sm text-[#92c9a4] flex items-center gap-1">
                                <span className="material-symbols-outlined text-[16px]">encrypted</span> 
                                End-to-end Encrypted
                            </span>
                        </div>
                        <div className="flex flex-col gap-4">
                            {/* Google Health Connect Card */}
                            <div className="group flex flex-col md:flex-row items-stretch gap-6 rounded-xl bg-surface-dark p-1 hover:bg-[#1f3d2a] transition-colors border border-transparent hover:border-[#23482f]">
                                <div className="w-full md:w-64 bg-center bg-no-repeat bg-cover rounded-lg aspect-video md:aspect-auto" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCbh1gZ0InjbqaMwYlLqrbcEeWVHefMI4EiPKSPd2F1DqCNLfJbNYAdYluluGx5huxdgIUClR5MKEkeDa2ghEF_QAO0vWkANLlr1YSrd_f3MsipCoAgA2V7-zf4o_6Eb5Wq3_Ojgi05Vr99AYbO9wymsR395xcNXlhrgO7EO0dYo0JTpX0XilLrP-T7E_0ZWc_1Hz8iR8t-Go1lQRL_WdFOfcAMrlPQih4fTpIWZlYzmiJdxLsSIlatb2Dv02mNxREqPrHAt_52X50H")'}}>
                                </div>
                                <div className="flex flex-1 flex-col justify-between py-4 pr-4 pl-2 gap-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="text-white text-lg font-bold leading-tight">Google Health Connect</h3>
                                                <span className="inline-flex items-center rounded-full bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary ring-1 ring-inset ring-primary/30">Active</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 mt-1 text-[#92c9a4] text-sm font-normal">
                                                <span className="material-symbols-outlined text-[16px]">sync_alt</span>
                                                <span>Bi-directional sync enabled</span>
                                            </div>
                                            <p className="text-[#92c9a4]/70 text-xs mt-1">Last sync: 2 mins ago</p>
                                        </div>
                                        <button className="group/btn flex items-center justify-center rounded-full h-9 px-4 bg-[#23482f] text-white hover:bg-primary hover:text-background-dark transition-all gap-2 text-sm font-medium">
                                            <span className="material-symbols-outlined text-[18px]">settings</span>
                                            <span>Manage</span>
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap gap-6 pt-2 border-t border-[#23482f]/50 mt-2">
                                        <label className="flex items-center gap-3 cursor-pointer group/toggle">
                                            <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                                                <span className="translate-x-4 inline-block size-3.5 transform rounded-full bg-white transition duration-200 ease-in-out"></span>
                                            </div>
                                            <span className="text-sm font-medium text-white group-hover/toggle:text-primary transition-colors">Sync Workouts (Write)</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer group/toggle">
                                            <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                                                <span className="translate-x-4 inline-block size-3.5 transform rounded-full bg-white transition duration-200 ease-in-out"></span>
                                            </div>
                                            <span className="text-sm font-medium text-white group-hover/toggle:text-primary transition-colors">Read Health Data (Read)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Apple Health Card */}
                            <div className="group flex flex-col md:flex-row items-stretch gap-6 rounded-xl bg-surface-dark p-1 hover:bg-[#1f3d2a] transition-colors border border-transparent hover:border-[#23482f]">
                                <div className="w-full md:w-64 bg-center bg-no-repeat bg-cover rounded-lg aspect-video md:aspect-auto" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCc7hJZSCUspyOSaVe-UEfcjfI2Miu7Fp6WAei0_fv-cKyfLon2LLRpsLi8hU__c_PA8f01FzOurXrAnAcJZ_V8ZRWRPbJ65_Ev36y7ZBO1Ns9xyGApOBdL3qix6kGwBk6vD_zvSWpE-ORwNuPEH55HkhTHg0aWrZTUgi51nh_t3R8sPshYV2fzrdCUS2BW-z-9YszVxlqo-LBPfgu3q1QIaEQ9fm60d9EKneqIxR0ZiMnG654877CPBrBUI4AXMOC3hNUQ9hFKAR6n")'}}>
                                </div>
                                <div className="flex flex-1 flex-col justify-between py-4 pr-4 pl-2 gap-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="text-white text-lg font-bold leading-tight">Apple Health</h3>
                                                <span className="inline-flex items-center rounded-full bg-yellow-500/20 px-2 py-0.5 text-xs font-medium text-yellow-500 ring-1 ring-inset ring-yellow-500/30">Read-Only</span>
                                            </div>
                                            <p className="text-[#92c9a4] text-sm font-normal">Permissions restricted to read access.</p>
                                        </div>
                                        <button className="group/btn flex items-center justify-center rounded-full h-9 px-4 bg-[#23482f] text-white hover:bg-primary hover:text-background-dark transition-all gap-2 text-sm font-medium">
                                            <span className="material-symbols-outlined text-[18px]">link</span>
                                            <span>Connect</span>
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap gap-6 pt-2 border-t border-[#23482f]/50 mt-2">
                                        <label className="flex items-center gap-3 cursor-pointer opacity-70" title="Enable write permissions in settings">
                                            <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                                                <span className="translate-x-1 inline-block size-3.5 transform rounded-full bg-white transition duration-200 ease-in-out"></span>
                                            </div>
                                            <span className="text-sm font-medium text-white">Sync Workouts (Write)</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                                                <span className="translate-x-4 inline-block size-3.5 transform rounded-full bg-white transition duration-200 ease-in-out"></span>
                                            </div>
                                            <span className="text-sm font-medium text-white">Read Health Data (Read)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="flex items-center justify-between px-2 pb-5 pt-2 border-b border-[#23482f] mb-6">
                            <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Data Logic</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Smart De-duplication */}
                            <div className="rounded-xl bg-surface-dark p-6 flex flex-col gap-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#23482f]/20 rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-[#23482f] p-2 text-primary">
                                        <span className="material-symbols-outlined">merge_type</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white text-lg font-bold">Smart De-duplication</h3>
                                        <p className="text-[#92c9a4] text-sm mt-1">Configure how Fitty handles overlapping activities.</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="flex items-center justify-between p-3 rounded-lg border border-[#23482f] hover:bg-[#1f3d2a] cursor-pointer transition-all group">
                                        <div className="flex items-center gap-3">
                                            <input defaultChecked className="h-4 w-4 border-gray-300 text-primary focus:ring-primary bg-background-dark" name="dedup" type="radio"/>
                                            <div className="flex flex-col">
                                                <span className="text-white text-sm font-medium group-hover:text-primary transition-colors">Balanced (Recommended)</span>
                                                <span className="text-[#92c9a4]/60 text-xs">Intelligently merges exact matches</span>
                                            </div>
                                        </div>
                                    </label>
                                    <label className="flex items-center justify-between p-3 rounded-lg border border-[#23482f] hover:bg-[#1f3d2a] cursor-pointer transition-all group">
                                        <div className="flex items-center gap-3">
                                            <input className="h-4 w-4 border-gray-300 text-primary focus:ring-primary bg-background-dark" name="dedup" type="radio"/>
                                            <div className="flex flex-col">
                                                <span className="text-white text-sm font-medium group-hover:text-primary transition-colors">Aggressive</span>
                                                <span className="text-[#92c9a4]/60 text-xs">Merge anything similar within 5 min</span>
                                            </div>
                                        </div>
                                    </label>
                                    <label className="flex items-center justify-between p-3 rounded-lg border border-[#23482f] hover:bg-[#1f3d2a] cursor-pointer transition-all group">
                                        <div className="flex items-center gap-3">
                                            <input className="h-4 w-4 border-gray-300 text-primary focus:ring-primary bg-background-dark" name="dedup" type="radio"/>
                                            <div className="flex flex-col">
                                                <span className="text-white text-sm font-medium group-hover:text-primary transition-colors">Conservative</span>
                                                <span className="text-[#92c9a4]/60 text-xs">Keep all data entries</span>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* Conflict Resolution */}
                            <div className="rounded-xl bg-surface-dark p-6 flex flex-col gap-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#23482f]/20 rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-[#23482f] p-2 text-primary">
                                        <span className="material-symbols-outlined">low_priority</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white text-lg font-bold">Conflict Resolution</h3>
                                        <p className="text-[#92c9a4] text-sm mt-1">Prioritize sources when metrics differ.</p>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col justify-center gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-2">Primary Truth Source</label>
                                        <div className="relative">
                                            <select className="block w-full rounded-lg border-0 py-3 pl-3 pr-10 text-white bg-[#23482f] ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6">
                                                <option>Wearable Device (Highest Accuracy)</option>
                                                <option>Manual Entry</option>
                                                <option>Third-party Apps</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="rounded-lg bg-[#23482f]/50 p-3 mt-auto border border-[#23482f]">
                                        <p className="text-xs text-[#92c9a4] leading-relaxed">
                                            <span className="font-bold text-white">Note:</span> Manual edits to specific workouts within Fitty will always override automatic data regardless of this setting.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="pb-10">
                        <div className="flex items-center justify-between px-2 pb-5 pt-2 border-b border-[#23482f] mb-6">
                            <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Export & Privacy</h2>
                        </div>
                        <div className="relative overflow-hidden rounded-xl bg-surface-dark border border-[#23482f]">
                            <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
                            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between relative z-10">
                                <div className="flex flex-col gap-4 max-w-lg">
                                    <h3 className="text-white text-xl font-bold">Your Data Belongs to You</h3>
                                    <p className="text-[#92c9a4] leading-relaxed">
                                        Generate a comprehensive archive of your workout history, habits, and health metrics. This ensures you always have sovereignty over your fitness journey.
                                    </p>
                                    <div className="flex items-center gap-4 mt-2">
                                        <a className="text-sm font-medium text-white hover:text-primary transition-colors underline underline-offset-4 decoration-primary/50" href="#">Privacy Policy</a>
                                        <a className="text-sm font-medium text-white hover:text-primary transition-colors underline underline-offset-4 decoration-primary/50" href="#">Delete Account</a>
                                    </div>
                                </div>
                                <div className="w-full md:w-auto bg-[#102216]/50 rounded-xl p-5 border border-[#23482f] backdrop-blur-sm flex flex-col gap-4 min-w-[300px]">
                                    <div>
                                        <label className="block text-xs font-medium text-[#92c9a4] uppercase tracking-wider mb-1.5">Date Range</label>
                                        <select className="block w-full rounded-lg border-0 py-2.5 text-white bg-[#23482f] ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-primary sm:text-sm">
                                            <option>All Time</option>
                                            <option>Last 365 Days</option>
                                            <option>Last 30 Days</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-[#92c9a4] uppercase tracking-wider mb-1.5">Format</label>
                                        <select className="block w-full rounded-lg border-0 py-2.5 text-white bg-[#23482f] ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-primary sm:text-sm">
                                            <option>CSV (Excel, Sheets)</option>
                                            <option>JSON (Raw Data)</option>
                                        </select>
                                    </div>
                                    <button className="mt-2 flex w-full cursor-pointer items-center justify-center rounded-full h-11 bg-primary hover:bg-primary/90 text-[#102216] gap-2 text-sm font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(19,236,91,0.2)] hover:shadow-[0_0_25px_rgba(19,236,91,0.4)]">
                                        <span className="material-symbols-outlined">download</span>
                                        Download Archive
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
             </div>
        </DashboardLayout>
    );
};