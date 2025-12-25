import React from 'react';
import { DashboardLayout } from './Dashboard';

export const ProgramsPage = () => {
    return (
        <DashboardLayout>
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 lg:py-12">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                    <div className="max-w-xl">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3 text-slate-900 dark:text-white">Select Your Path</h1>
                        <p className="text-gray-600 dark:text-[#92c9a4] text-lg">Choose a foundational program designed to build consistency without the burnout.</p>
                    </div>
                    <div className="bg-gray-200 dark:bg-[#23482f] p-1.5 rounded-full flex items-center shadow-inner">
                        <button className="px-6 py-2.5 rounded-full bg-white dark:bg-[#102216] shadow-sm text-sm font-bold text-gray-900 dark:text-white transition-all transform scale-100 ring-1 ring-black/5 dark:ring-white/10">
                            Beginner Mode
                        </button>
                        <button className="px-6 py-2.5 rounded-full text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            All Programs
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex gap-3 mb-10 overflow-x-auto hide-scrollbar pb-2">
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1C2E24] border border-primary/30 text-white font-medium whitespace-nowrap hover:bg-[#253b2f] transition-colors shadow-lg shadow-primary/10">
                        <span className="material-symbols-outlined text-[18px] text-primary">check</span>
                        Foundational
                    </button>
                    {['Bodyweight', 'Strength', 'Cardio', 'Mobility'].map((label) => (
                         <button key={label} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-200 dark:bg-[#23482f] text-gray-700 dark:text-gray-300 font-medium whitespace-nowrap hover:bg-gray-300 dark:hover:bg-[#2e5e3d] transition-colors">
                            {label}
                        </button>
                    ))}
                </div>

                {/* Section Title */}
                <div className="mb-6 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-2xl">verified</span>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Recommended for Beginners</h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {/* Card 1 */}
                    <div className="group relative flex flex-col rounded-[2rem] bg-white dark:bg-[#1C2E24] border border-gray-100 dark:border-white/5 overflow-hidden hover:shadow-[0_0_30px_rgba(19,236,91,0.15)] dark:hover:border-primary/50 transition-all duration-300 cursor-pointer">
                         <div className="h-48 w-full bg-cover bg-center relative" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDoA89WOjzM0Uw2zHVNu9AdFeH-JFBDMFXxVtzruIkuJZX-4iNhwOobCuulqWtdvSjo185irJRlhztV56Fn3KMaJimjMk77dNXpfQFqEhisvruKTpmremWQq_j6LrCJH9cni6bf-2bQddIv1o5719QcLmM3ITpBsgKcR4GvDlOL5Z4jx3kDsNorW03Re-PEo6xego7klJaJZDC57dS9ZltA5_Y3BDZIMz2mIndUaL3cyOKX1RrJeLU-D-2J5dwpdm5Qj-VaLBwHjnKM')"}}>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2E24] to-transparent opacity-90"></div>
                            <div className="absolute bottom-4 left-6 right-6">
                                <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-primary transition-colors">Reddit BWF Recommended Routine</h3>
                            </div>
                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary border border-primary/20">
                                Community Favorite
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                             <div className="flex gap-2 mb-3">
                                <span className="px-2.5 py-1 rounded-md bg-[#23482f] text-xs font-medium text-primary">Bodyweight</span>
                                <span className="px-2.5 py-1 rounded-md bg-[#23482f] text-xs font-medium text-[#92c9a4]">60 min</span>
                                <span className="px-2.5 py-1 rounded-md bg-[#23482f] text-xs font-medium text-[#92c9a4]">3x / week</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">The gold standard for gaining strength using basic compound movements. No gym required, perfect for home workouts.</p>
                            <div className="mt-auto">
                                <div className="flex items-center gap-3 mb-4 text-xs text-gray-500 dark:text-gray-500">
                                    <div className="flex -space-x-2">
                                        <div className="size-6 rounded-full border-2 border-[#1C2E24] bg-gray-600 bg-cover" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1rOljpdFfibUuCsArwvQhMrjbKzqTunh3u66u0a5KRmkqKNQB2j0E91ObVKACgFNz302Kc1Xy_kIVFid2ukdhzRaRwgidreN5ddxz0rByfLUvAyFiHA9JIojZdYXH5E63TozJh5L3uiSttxyhE9Q2IRWYkkY1-eLd7V1UyvHF2S-1Xas3IWzGmBc9tzp-7KBXXuL8b38tykjXWqX7SGlwd67sI8RX7qX4DMrIjnigohur8Lh410b321F0ckB0ziBWPIXyR6YZA0Aa')"}}></div>
                                        <div className="size-6 rounded-full border-2 border-[#1C2E24] bg-gray-600 bg-cover" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmerO4g2uj3MENADsIYJmGVCot0u6GV8tbbH_54RTNOJ4lqqfj_n0hCgihjCOpfTt8Eec-jJba2wil9NiNTy8f7_M_bBUiCfp4mAjwu8gotIaHmGQSEpGTqWSaBnAz2eClK2pXAvJ7DB-S15zb928Gl1j16sXhX6HQXt6p2FGOmtk3P_rQddPvbJzlV6BIpTcKlFnRnhR4RMgogkmIRpX6A-tzhZkrCBZ6PSBGVzgw_0fGbZfI8wef9TmCHkO_WQgYBMhpDCnKGgGu')"}}></div>
                                        <div className="size-6 rounded-full border-2 border-[#1C2E24] bg-gray-600 bg-cover" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaAframqijoDZWB08ERQDdGrUodjx82g-jofimLDnnThRurx-hw12o_1tUUuK3F5MdhNJ9Wqp_4oigUwKctztssX28autGMvy6eMy-zwtlBUwYoQ9P0y4NxCandmq7sYkKujqPjqxlzHwHB_4IE-Vgae8NPbTeV65dN9VqGwPVv7FXd0Zyn8Azs8zQEKe-ggdgwT2JlyETFuI0uoJQ0hMU2BHRYmQtlRDr50262Db3enWAO7fGjEij_kQZDqQhh1X_CllC7pKBLSz9')"}}></div>
                                    </div>
                                    <span>12k+ active users</span>
                                </div>
                                <button className="w-full bg-primary text-[#102216] font-bold py-3.5 rounded-xl hover:bg-[#0fd650] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                                    <span>Select Program</span>
                                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative flex flex-col rounded-[2rem] bg-white dark:bg-[#1C2E24] border border-gray-100 dark:border-white/5 overflow-hidden hover:shadow-[0_0_30px_rgba(19,236,91,0.15)] dark:hover:border-primary/50 transition-all duration-300 cursor-pointer">
                        <div className="h-48 w-full bg-cover bg-center relative" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQxMFf61usoc4ZQBoatjGn0ZSIMNUbCjKDammXj5SSNXgSI-ctxPEWzJtazAR0AciAx7iiR7aWhvFHc7YWlCanY7Tog5ZIGzJ_jj5LEm6nDMBRi7wkSrq6zdLBqFiZi3j5EsKXn409kbbgfntFnQDOIXt4w3fowwR5CFj8oL3ALfPa5ogSsKM8FfJVSpW-_BhvfhecxwA4nesB4js0iuhcAGW95VdZxB3XZdYmBdFMneKegVyNmqLVzc_5Lj3WYbunfZLBiDdJlrxn')"}}>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2E24] to-transparent opacity-90"></div>
                            <div className="absolute bottom-4 left-6 right-6">
                                <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-primary transition-colors">Starting Strength</h3>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                             <div className="flex gap-2 mb-3">
                                <span className="px-2.5 py-1 rounded-md bg-[#23482f] text-xs font-medium text-white">Barbell</span>
                                <span className="px-2.5 py-1 rounded-md bg-[#23482f] text-xs font-medium text-[#92c9a4]">45 min</span>
                                <span className="px-2.5 py-1 rounded-md bg-[#23482f] text-xs font-medium text-[#92c9a4]">3x / week</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">The most effective method for building raw strength. Focuses on squats, deadlifts, and presses.</p>
                            <div className="mt-auto">
                                <div className="flex items-center gap-3 mb-4 text-xs text-gray-500 dark:text-gray-500">
                                    <span className="material-symbols-outlined text-sm">fitness_center</span>
                                    <span>Requires gym access</span>
                                </div>
                                <button className="w-full bg-primary/10 text-primary border border-primary/50 font-bold py-3.5 rounded-xl hover:bg-primary hover:text-[#102216] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                                    <span>Select Program</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative flex flex-col rounded-[2rem] bg-white dark:bg-[#1C2E24] border border-gray-100 dark:border-white/5 overflow-hidden hover:shadow-[0_0_30px_rgba(19,236,91,0.15)] dark:hover:border-primary/50 transition-all duration-300 cursor-pointer">
                         <div className="h-48 w-full bg-cover bg-center relative" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkIFzm3hkj1ov1UJxnCNv8XLaMyFAa8gKr95ZvVYTl5lSLQnfuxCE2KNIQWOH2SDNfCMDwHIoqR_yC3KfsepJ_jyif3PlQPBQjbFDYBSgG-POYAExj1AmDFei-Nod0Khk4Z_-WvJb5jvfdBHaGvLmhw_BVo8DuwGGqa9Xf_adsCEmIPvpoZ98g_KUHSS1i_LsCCcWloAJqj8DkXBbP-3BMWKjcHSpDrLCyXFw4VOz2iwRM_0DOcbZGHfvQqqZljUKtPNeesFxLdC0L')"}}>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2E24] to-transparent opacity-90"></div>
                            <div className="absolute bottom-4 left-6 right-6">
                                <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-primary transition-colors">Couch to 5K</h3>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                             <div className="flex gap-2 mb-3">
                                <span className="px-2.5 py-1 rounded-md bg-[#23482f] text-xs font-medium text-white">Cardio</span>
                                <span className="px-2.5 py-1 rounded-md bg-[#23482f] text-xs font-medium text-[#92c9a4]">30 min</span>
                                <span className="px-2.5 py-1 rounded-md bg-[#23482f] text-xs font-medium text-[#92c9a4]">3x / week</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">A running plan for absolute beginners. Go from the couch to running 5 kilometers in just 9 weeks.</p>
                            <div className="mt-auto">
                                <div className="flex items-center gap-3 mb-4 text-xs text-gray-500 dark:text-gray-500">
                                    <span className="material-symbols-outlined text-sm">smartphone</span>
                                    <span>Audio guided</span>
                                </div>
                                <button className="w-full bg-primary/10 text-primary border border-primary/50 font-bold py-3.5 rounded-xl hover:bg-primary hover:text-[#102216] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                                    <span>Select Program</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Banner */}
                <div className="rounded-[2rem] bg-gray-100 dark:bg-[#15281e] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>
                    <div className="relative z-10 max-w-lg">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 dark:text-white">Not seeing what you need?</h3>
                        <p className="text-gray-600 dark:text-[#92c9a4] mb-6">Explore our full library of over 50+ programs including Yoga, HIIT, and specialized powerlifting routines.</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-4 py-2 rounded-full bg-white dark:bg-[#1C2E24] border border-gray-200 dark:border-white/10 text-sm font-medium text-slate-900 dark:text-white">Powerlifting</span>
                            <span className="px-4 py-2 rounded-full bg-white dark:bg-[#1C2E24] border border-gray-200 dark:border-white/10 text-sm font-medium text-slate-900 dark:text-white">Yoga</span>
                            <span className="px-4 py-2 rounded-full bg-white dark:bg-[#1C2E24] border border-gray-200 dark:border-white/10 text-sm font-medium text-slate-900 dark:text-white">Calisthenics</span>
                        </div>
                    </div>
                    <button className="relative z-10 shrink-0 px-8 py-4 rounded-xl bg-white dark:bg-[#1C2E24] text-gray-900 dark:text-white font-bold hover:shadow-lg transition-all border border-gray-200 dark:border-white/10">
                        Browse All Programs
                    </button>
                </div>
            </div>
        </DashboardLayout>
    );
};