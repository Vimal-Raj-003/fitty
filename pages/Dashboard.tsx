import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AICoachWidget } from './AICoach';

const Sidebar = ({ onToggleAICoach, isAICoachOpen }: { onToggleAICoach: () => void, isAICoachOpen: boolean }) => {
    const location = useLocation();
    const [isCollapsed, setIsCollapsed] = useState(() => {
        return localStorage.getItem('sidebarCollapsed') === 'true';
    });

    const toggleSidebar = () => {
        const newState = !isCollapsed;
        setIsCollapsed(newState);
        localStorage.setItem('sidebarCollapsed', String(newState));
    };
    
    const isActive = (path: string) => location.pathname === path;
    const linkClass = (path: string) => `group flex items-center ${isCollapsed ? 'justify-center' : 'gap-4 px-4'} py-3 rounded-full transition-all duration-200 ${isActive(path) ? 'bg-primary text-background-dark' : 'text-text-secondary hover:bg-surface-dark hover:text-white'}`;
    const iconClass = "material-symbols-outlined text-[24px]";

    return (
        <aside className={`hidden lg:flex flex-col justify-between bg-surface-darker border-r border-[#23482f] py-6 transition-all duration-300 ${isCollapsed ? 'w-24 px-2' : 'w-72 px-6'} h-full z-20 shrink-0`}>
            <div className="flex flex-col gap-8">
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-4 px-2'} transition-all`}>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 ring-2 ring-primary/20 shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBd_UdYVbPPoCL-yB1w68NtPaNcNMo9bApK4kgVbP4nXqIqgmdU-BBfEWBf6na8QAhBa9YqlTg2M0BsM3y5aNQjsCd0HnV9TjcQiUvfFyvZxg_uLaqgbZ12E3d1fnN_0SYBcsuz97HEBV1zUp6frldCms92Ne5jwwUnGCG0qrELm8EahMrk7O1jW3Iy0bKGpCfZNCvbdRwojtoMB3CxfrlCwHPdSfqOmM6jBXC3Kx1C3WaliFIpUHgOexW3NFOT32kf5bOqmSXzLsHM")'}}></div>
                    {!isCollapsed && (
                        <div className="flex flex-col overflow-hidden animate-fade-in">
                            <h1 className="text-white text-lg font-bold leading-none tracking-tight whitespace-nowrap">Fitty</h1>
                            <p className="text-text-secondary text-sm font-normal mt-1 whitespace-nowrap">Pro Member</p>
                        </div>
                    )}
                </div>
                <nav className="flex flex-col gap-2">
                    <Link to="/dashboard" className={linkClass('/dashboard')} title={isCollapsed ? "Home" : undefined}>
                        <span className={iconClass}>home</span>
                        {!isCollapsed && <p className="text-sm font-semibold whitespace-nowrap animate-fade-in">Home</p>}
                    </Link>
                    <Link to="/programs" className={linkClass('/programs')} title={isCollapsed ? "Programs" : undefined}>
                        <span className={iconClass}>calendar_month</span>
                        {!isCollapsed && <p className="text-sm font-medium whitespace-nowrap animate-fade-in">Programs</p>}
                    </Link>
                    <Link to="/exercises" className={linkClass('/exercises')} title={isCollapsed ? "Exercises" : undefined}>
                        <span className={iconClass}>fitness_center</span>
                        {!isCollapsed && <p className="text-sm font-medium whitespace-nowrap animate-fade-in">Exercises</p>}
                    </Link>
                    <button 
                        onClick={onToggleAICoach}
                        className={`group flex items-center ${isCollapsed ? 'justify-center' : 'gap-4 px-4'} py-3 rounded-full transition-all duration-200 ${isAICoachOpen ? 'bg-primary text-background-dark' : 'text-text-secondary hover:bg-surface-dark hover:text-white'}`}
                        title={isCollapsed ? "AI Coach" : undefined}
                    >
                         <span className={`${iconClass} ${isAICoachOpen ? 'animate-pulse' : ''}`}>smart_toy</span>
                         {!isCollapsed && <p className="text-sm font-medium whitespace-nowrap animate-fade-in">AI Coach</p>}
                    </button>
                    <Link to="/community" className={linkClass('/community')} title={isCollapsed ? "Community" : undefined}>
                        <span className={iconClass}>group</span>
                        {!isCollapsed && <p className="text-sm font-medium whitespace-nowrap animate-fade-in">Community</p>}
                    </Link>
                </nav>
            </div>
            <div className="flex flex-col gap-2">
                <Link to="/settings" className={linkClass('/settings')} title={isCollapsed ? "Settings" : undefined}>
                    <span className={iconClass}>settings</span>
                    {!isCollapsed && <p className="text-sm font-medium whitespace-nowrap animate-fade-in">Settings</p>}
                </Link>
                <Link to="/" className={`group flex items-center ${isCollapsed ? 'justify-center' : 'gap-4 px-4'} py-3 rounded-full text-text-secondary hover:bg-red-500/10 hover:text-red-500 transition-all duration-200`} title={isCollapsed ? "Logout" : undefined}>
                    <span className={iconClass}>logout</span>
                    {!isCollapsed && <p className="text-sm font-medium whitespace-nowrap animate-fade-in">Logout</p>}
                </Link>
                <button 
                    onClick={toggleSidebar}
                    className={`mt-2 flex items-center justify-center py-2 rounded-full text-text-secondary hover:text-white hover:bg-surface-dark transition-all`}
                    title={isCollapsed ? "Expand" : "Collapse"}
                >
                    <span className="material-symbols-outlined">
                        {isCollapsed ? 'chevron_right' : 'chevron_left'}
                    </span>
                </button>
            </div>
        </aside>
    );
};

export const DashboardLayout = ({ children }: { children?: React.ReactNode }) => {
    const [isAICoachOpen, setIsAICoachOpen] = useState(false);

    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark relative">
            <Sidebar onToggleAICoach={() => setIsAICoachOpen(!isAICoachOpen)} isAICoachOpen={isAICoachOpen} />
            <main className="flex-1 h-full overflow-y-auto relative z-0">
                {children}
            </main>
            
            {/* Floating Action Button for AI Coach */}
            {!isAICoachOpen && (
                <button 
                    onClick={() => setIsAICoachOpen(true)}
                    className="fixed bottom-6 right-6 size-16 rounded-full bg-primary text-background-dark shadow-[0_0_20px_rgba(19,236,91,0.3)] flex items-center justify-center hover:bg-[#0fd650] hover:scale-105 active:scale-95 transition-all z-40 animate-in fade-in zoom-in duration-300 group"
                    title="Open AI Coach"
                >
                    <span className="material-symbols-outlined text-[32px] group-hover:rotate-12 transition-transform">smart_toy</span>
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-background-dark"></span>
                    </span>
                </button>
            )}

            <AICoachWidget isOpen={isAICoachOpen} onClose={() => setIsAICoachOpen(false)} />
        </div>
    );
};

export const DashboardPage = () => {
    return (
        <DashboardLayout>
            <div className="max-w-[1200px] mx-auto p-4 md:p-8 lg:p-10 flex flex-col gap-8 pb-20">
                <header className="flex flex-wrap justify-between items-end gap-4 animate-fade-in-up">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Good Morning, Alex</h1>
                        <p className="text-text-secondary text-lg font-normal">Ready to crush Day 14? Let's keep the momentum going.</p>
                    </div>
                    <button className="lg:hidden p-2 text-white bg-surface-dark rounded-full">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Hero Card */}
                    <div className="lg:col-span-2 group relative overflow-hidden rounded-xl bg-surface-dark shadow-lg shadow-black/20 hover:shadow-primary/5 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/95 to-transparent z-10 md:via-surface-dark/80"></div>
                        <div className="flex flex-col md:flex-row h-full">
                            <div className="w-full md:w-1/2 h-56 md:h-auto bg-center bg-cover absolute right-0 top-0 bottom-0 z-0 md:relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBMhwf8xQr1k2D-SI0wc-4ViygUp56Y5QkLfS8eAZG5NVdyf6xWzIe7Fu8smgHA7Fgiz0nlCcfO4IsewDCdOMvn1kurFLqvZfsGpRnvAlnInbJOUkZn_YwzL7O0uBJmjK6lo-qfWgEhFC8ygMNKW5QG7qIqovo0EddsYYD1WeV_SLdWp7kkHsjPyiOTDGrCkj5w-zJycfz7tm1Ym3HGQbbKvL6kYDoZsRAce2nAvs7Ui5DHSSR1pKBulFEvfXZVTdGc45H6jyPrpg3Y")'}}>
                                <div className="absolute inset-0 bg-surface-dark/30 md:bg-transparent"></div>
                            </div>
                            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center relative z-20 md:max-w-[65%]">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-3 py-1 bg-[#23482f] text-primary text-xs font-bold uppercase tracking-wider rounded-full border border-primary/10">Today's Session</span>
                                </div>
                                <h2 className="text-white text-3xl font-bold leading-tight mb-2">Leg Day: Hypertrophy Focus</h2>
                                <p className="text-text-secondary text-sm mb-6 line-clamp-2">High volume squats and lunges to build lower body strength and mass. Focus on time under tension.</p>
                                <div className="flex items-center gap-6 text-text-secondary text-sm mb-8">
                                    <div className="flex items-center gap-1.5 bg-background-dark/50 px-3 py-1.5 rounded-lg border border-[#23482f]">
                                        <span className="material-symbols-outlined text-[18px] text-primary">schedule</span>
                                        <span className="font-medium text-white">45 min</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-background-dark/50 px-3 py-1.5 rounded-lg border border-[#23482f]">
                                        <span className="material-symbols-outlined text-[18px] text-primary">bolt</span>
                                        <span className="font-medium text-white">High Intensity</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Link to="/in-workout" className="flex-1 md:flex-none h-12 px-8 bg-primary hover:bg-[#0fd250] text-background-dark text-base font-bold rounded-full flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] shadow-[0_0_20px_rgba(19,236,91,0.3)]">
                                        <span className="material-symbols-outlined fill-current">play_arrow</span>
                                        Start Workout
                                    </Link>
                                    <button className="size-12 rounded-full border border-[#23482f] bg-background-dark/30 text-text-secondary hover:text-white hover:border-white flex items-center justify-center transition-colors">
                                        <span className="material-symbols-outlined">info</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Adherence Score Card */}
                    <div className="lg:col-span-1 rounded-xl bg-surface-dark p-6 md:p-8 flex flex-col justify-between shadow-lg shadow-black/20 border border-transparent hover:border-[#23482f] transition-all">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-white text-lg font-bold">Adherence Score</h3>
                                <p className="text-text-secondary text-xs mt-1 font-medium uppercase tracking-wide">Weekly Consistency</p>
                            </div>
                            <div className="size-10 rounded-full bg-[#23482f] flex items-center justify-center text-primary shadow-[0_0_10px_rgba(19,236,91,0.1)]">
                                <span className="material-symbols-outlined">local_fire_department</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center py-4 relative">
                            <div className="relative size-40">
                                <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full"></div>
                                <svg className="size-full -rotate-90 relative z-10" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    <path className="text-[#23482f]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
                                    <path className="text-primary drop-shadow-[0_0_8px_rgba(19,236,91,0.5)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="85, 100" strokeLinecap="round" strokeWidth="2.5"></path>
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                                    <span className="text-4xl font-black text-white tracking-tight">12</span>
                                    <span className="text-xs font-bold text-text-secondary uppercase tracking-widest mt-1">Day Streak</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-text-secondary bg-[#0e1f14] p-3 rounded-lg border border-[#23482f]/50">
                            <span className="material-symbols-outlined text-primary text-[20px]">trending_up</span>
                            <span className="font-medium">Top 5% of users this week</span>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Total Volume */}
                    <div className="rounded-xl p-6 bg-surface-dark border border-transparent hover:border-[#23482f] transition-all flex flex-col justify-between h-48 group">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-text-secondary text-sm font-semibold uppercase tracking-wider">Total Volume</p>
                                <div className="flex items-baseline gap-1 mt-1">
                                    <p className="text-white text-3xl font-bold tracking-tight">12,450</p>
                                    <p className="text-text-secondary text-sm font-medium">kg</p>
                                </div>
                            </div>
                            <span className="text-primary bg-[#23482f] px-2 py-1 rounded text-xs font-bold flex items-center gap-0.5">
                                <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 5%
                            </span>
                        </div>
                        <div className="h-16 w-full relative mt-auto">
                            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 120 40">
                                <defs>
                                    <linearGradient id="volGradient" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="#13ec5b" stopOpacity="0.2"></stop>
                                        <stop offset="100%" stopColor="#13ec5b" stopOpacity="0"></stop>
                                    </linearGradient>
                                </defs>
                                <path d="M0 35 C 20 30, 30 15, 45 20 C 60 25, 75 25, 90 15 C 105 5, 110 10, 120 2" fill="none" stroke="#13ec5b" strokeLinecap="round" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                                <path d="M0 35 C 20 30, 30 15, 45 20 C 60 25, 75 25, 90 15 C 105 5, 110 10, 120 2 V 40 H 0 Z" fill="url(#volGradient)" stroke="none"></path>
                            </svg>
                        </div>
                    </div>

                    {/* Workouts */}
                    <div className="rounded-xl p-6 bg-surface-dark border border-transparent hover:border-[#23482f] transition-all flex flex-col justify-between h-48 group">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-text-secondary text-sm font-semibold uppercase tracking-wider">Workouts</p>
                                <div className="flex items-baseline gap-1 mt-1">
                                    <p className="text-white text-3xl font-bold tracking-tight">4</p>
                                    <p className="text-text-secondary text-sm font-medium">sessions</p>
                                </div>
                            </div>
                            <span className="text-primary bg-[#23482f] px-2 py-1 rounded text-xs font-bold flex items-center gap-0.5">
                                <span className="material-symbols-outlined text-[14px]">add</span> 1
                            </span>
                        </div>
                        <div className="flex items-end justify-between h-14 w-full gap-2 px-1 mt-auto">
                            <div className="w-full bg-[#23482f] rounded-t-sm h-[40%] group-hover:bg-[#2e5e3d] transition-colors" title="Mon"></div>
                            <div className="w-full bg-[#23482f] rounded-t-sm h-[0%] group-hover:bg-[#2e5e3d] transition-colors" title="Tue"></div>
                            <div className="w-full bg-[#23482f] rounded-t-sm h-[60%] group-hover:bg-[#2e5e3d] transition-colors" title="Wed"></div>
                            <div className="w-full bg-[#23482f] rounded-t-sm h-[75%] group-hover:bg-[#2e5e3d] transition-colors" title="Thu"></div>
                            <div className="w-full bg-[#23482f] rounded-t-sm h-[50%] group-hover:bg-[#2e5e3d] transition-colors" title="Fri"></div>
                            <div className="w-full bg-primary rounded-t-sm h-[85%] shadow-[0_0_10px_rgba(19,236,91,0.3)] relative" title="Sat"></div>
                            <div className="w-full bg-[#23482f] rounded-t-sm h-[20%] group-hover:bg-[#2e5e3d] transition-colors opacity-50" title="Sun"></div>
                        </div>
                    </div>

                    {/* PRs */}
                    <div className="rounded-xl p-6 bg-surface-dark border border-transparent hover:border-[#23482f] transition-all flex flex-col justify-between h-48 group">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-text-secondary text-sm font-semibold uppercase tracking-wider">PRs This Week</p>
                                <div className="flex items-baseline gap-1 mt-1">
                                    <p className="text-white text-3xl font-bold tracking-tight">2</p>
                                    <p className="text-text-secondary text-sm font-medium">new records</p>
                                </div>
                            </div>
                            <span className="text-primary bg-[#23482f] px-2 py-1 rounded text-xs font-bold flex items-center gap-0.5">
                                <span className="material-symbols-outlined text-[14px]">star</span> New
                            </span>
                        </div>
                        <div className="flex items-center gap-3 mt-auto">
                            <div className="size-12 rounded-full bg-[#23482f] flex items-center justify-center text-primary border border-primary/20 hover:scale-110 transition-transform cursor-pointer group/icon relative">
                                <span className="material-symbols-outlined text-xl">fitness_center</span>
                                <span className="absolute -top-1 -right-1 size-4 bg-primary text-background-dark text-[10px] font-bold rounded-full flex items-center justify-center">!</span>
                            </div>
                            <div className="size-12 rounded-full bg-[#23482f] flex items-center justify-center text-primary border border-primary/20 hover:scale-110 transition-transform cursor-pointer">
                                <span className="material-symbols-outlined text-xl">timer</span>
                            </div>
                            <div className="size-12 rounded-full bg-transparent flex items-center justify-center text-[#23482f] border-2 border-[#23482f] border-dashed hover:border-text-secondary hover:text-text-secondary transition-colors cursor-pointer">
                                <span className="material-symbols-outlined text-xl">add</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Upcoming Schedule */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-white text-xl font-bold flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">calendar_today</span>
                            Upcoming Schedule & Activity
                        </h3>
                        <a className="text-primary text-sm font-medium hover:underline flex items-center gap-1" href="#">
                            View Full Calendar <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </a>
                    </div>
                    <div className="bg-surface-dark rounded-xl p-6 border border-transparent hover:border-[#23482f] transition-all">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            <div className="lg:col-span-3">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex gap-2 items-center">
                                        <button className="p-1 hover:bg-[#23482f] rounded text-text-secondary hover:text-white transition-colors">
                                            <span className="material-symbols-outlined text-lg">chevron_left</span>
                                        </button>
                                        <h4 className="text-white font-bold text-lg">February 2024</h4>
                                        <button className="p-1 hover:bg-[#23482f] rounded text-text-secondary hover:text-white transition-colors">
                                            <span className="material-symbols-outlined text-lg">chevron_right</span>
                                        </button>
                                    </div>
                                    <div className="flex gap-3 text-xs">
                                        <div className="flex items-center gap-1.5">
                                            <span className="size-3 rounded-sm bg-[#23482f]"></span>
                                            <span className="text-text-secondary">Rest</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="size-3 rounded-sm bg-primary/40"></span>
                                            <span className="text-text-secondary">Active</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="size-3 rounded-sm bg-primary"></span>
                                            <span className="text-text-secondary">Intense</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-7 gap-y-6 gap-x-2 text-center">
                                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                        <span key={day} className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">{day}</span>
                                    ))}
                                    
                                    {[29, 30, 31].map(date => (
                                         <div key={date} className="h-20 p-1 flex flex-col justify-start items-center opacity-30">
                                            <span className="text-sm font-medium text-text-secondary">{date}</span>
                                        </div>
                                    ))}

                                    {[
                                        { d: 1, type: 'Rest', icon: 'hotel', bg: 'bg-[#23482f]', text: 'text-text-secondary' },
                                        { d: 2, type: 'Run', active: true, bg: 'bg-primary/40' },
                                        { d: 3, type: 'Legs', intense: true, bg: 'bg-primary' },
                                        { d: 4, type: 'Rest', icon: 'hotel', bg: 'bg-[#23482f]', text: 'text-text-secondary' },
                                        { d: 5, type: 'Push', active: true, bg: 'bg-primary/60' },
                                        { d: 6, type: 'Pull', intense: true, bg: 'bg-primary' },
                                        { d: 7, type: 'Yoga', active: true, bg: 'bg-primary/40' },
                                        { d: 8, type: 'Rest', icon: 'hotel', bg: 'bg-[#23482f]', text: 'text-text-secondary' },
                                        { d: 9, type: 'HIIT', intense: true, bg: 'bg-primary' },
                                        { d: 10, type: 'Legs', intense: true, bg: 'bg-primary' },
                                        { d: 11, type: 'Rest', icon: 'hotel', bg: 'bg-[#23482f]', text: 'text-text-secondary' },
                                        { d: 12, type: 'Done', check: true, bg: 'bg-primary/50' },
                                        { d: 13, type: 'Done', check: true, bg: 'bg-primary' },
                                    ].map((day, i) => (
                                        <div key={i} className="group h-20 p-1 rounded-lg hover:bg-[#23482f]/30 transition-colors flex flex-col justify-between items-center relative cursor-pointer">
                                            <span className="text-sm font-medium text-white">{day.d}</span>
                                            {day.icon ? (
                                                <div className={`w-full h-8 mt-1 rounded ${day.bg} flex items-center justify-center`} title={day.type}>
                                                     <span className={`material-symbols-outlined ${day.text} text-[16px]`}>{day.icon}</span>
                                                </div>
                                            ) : day.check ? (
                                                <div className={`w-full h-8 mt-1 rounded ${day.bg} flex items-center justify-center border border-primary/20 ${day.bg === 'bg-primary' ? 'shadow-lg shadow-primary/20 text-background-dark' : 'text-white'}`}>
                                                     <span className={`material-symbols-outlined text-[18px] ${day.bg === 'bg-primary' ? 'font-bold' : ''}`}>check</span>
                                                </div>
                                            ) : (
                                                <div className={`w-full h-8 mt-1 rounded ${day.bg} flex items-center justify-center ${day.intense ? 'shadow-[0_0_10px_rgba(19,236,91,0.2)]' : 'relative overflow-hidden'}`}>
                                                    {!day.intense && <div className="absolute inset-0 bg-primary/20"></div>}
                                                    <span className={`text-xs font-bold ${day.intense ? 'text-background-dark' : 'text-white relative z-10'}`}>{day.type}</span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    
                                    <div className="group h-20 p-1 rounded-lg bg-[#23482f]/40 ring-1 ring-primary shadow-[0_0_15px_rgba(19,236,91,0.1)] flex flex-col justify-between items-center relative cursor-pointer">
                                        <span className="text-sm font-bold text-primary">14</span>
                                        <div className="w-full h-8 mt-1 rounded bg-white flex items-center justify-center animate-pulse">
                                            <span className="size-2 rounded-full bg-background-dark"></span>
                                        </div>
                                        <span className="absolute top-1 right-1 size-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(19,236,91,0.8)]"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-1 border-l border-[#23482f] pl-0 lg:pl-8 pt-6 lg:pt-0">
                                <h4 className="text-white font-bold text-lg mb-4">Upcoming</h4>
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-4 items-start group">
                                        <div className="flex flex-col items-center min-w-[3rem]">
                                            <span className="text-xs font-bold text-text-secondary uppercase">Thu</span>
                                            <span className="text-xl font-bold text-white">15</span>
                                        </div>
                                        <div className="flex-1 p-3 rounded-lg bg-surface-darker border border-[#23482f] group-hover:border-primary/30 transition-colors">
                                            <div className="flex justify-between items-start mb-1">
                                                <h5 className="text-white text-sm font-semibold">Upper Power</h5>
                                                <span className="text-[10px] font-bold text-primary bg-[#23482f] px-1.5 py-0.5 rounded">High</span>
                                            </div>
                                            <p className="text-text-secondary text-xs">4 exercises • 45m</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start group">
                                        <div className="flex flex-col items-center min-w-[3rem]">
                                            <span className="text-xs font-bold text-text-secondary uppercase">Fri</span>
                                            <span className="text-xl font-bold text-white">16</span>
                                        </div>
                                        <div className="flex-1 p-3 rounded-lg bg-surface-darker border border-[#23482f] group-hover:border-primary/30 transition-colors">
                                            <div className="flex justify-between items-start mb-1">
                                                <h5 className="text-white text-sm font-semibold">Active Recovery</h5>
                                                <span className="text-[10px] font-bold text-text-secondary bg-[#23482f] px-1.5 py-0.5 rounded">Low</span>
                                            </div>
                                            <p className="text-text-secondary text-xs">Mobility • 30m</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start group opacity-50 hover:opacity-100 transition-opacity">
                                        <div className="flex flex-col items-center min-w-[3rem]">
                                            <span className="text-xs font-bold text-text-secondary uppercase">Sat</span>
                                            <span className="text-xl font-bold text-white">17</span>
                                        </div>
                                        <div className="flex-1 p-3 rounded-lg bg-surface-darker border border-[#23482f] group-hover:border-primary/30 transition-colors">
                                            <div className="flex justify-between items-start mb-1">
                                                <h5 className="text-white text-sm font-semibold">Rest Day</h5>
                                            </div>
                                            <p className="text-text-secondary text-xs">No workout planned</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-[#23482f]">
                                    <h4 className="text-white font-bold text-sm mb-3">Quick Actions</h4>
                                    <div className="flex flex-col gap-2">
                                        <button className="w-full py-2.5 px-4 bg-[#23482f] hover:bg-[#2e5e3d] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors">
                                            <span className="material-symbols-outlined text-lg">add</span>
                                            Log Activity
                                        </button>
                                        <button className="w-full py-2.5 px-4 border border-[#23482f] hover:border-text-secondary text-text-secondary hover:text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors">
                                            <span className="material-symbols-outlined text-lg">edit_calendar</span>
                                            Edit Schedule
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link to="/programs" className="group relative overflow-hidden rounded-xl bg-surface-dark p-6 border border-transparent hover:border-[#23482f] transition-all duration-300 flex items-center gap-6">
                        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
                        <div className="size-16 rounded-full bg-[#23482f] flex-shrink-0 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-background-dark transition-all duration-300 shadow-lg shadow-black/20">
                            <span className="material-symbols-outlined text-3xl">calendar_month</span>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-white text-xl font-bold mb-1 group-hover:text-primary transition-colors">Browse Programs</h3>
                            <p className="text-text-secondary text-sm">Find your next challenge tailored to your goals.</p>
                        </div>
                        <div className="ml-auto">
                            <span className="material-symbols-outlined text-text-secondary group-hover:translate-x-1 group-hover:text-white transition-all">arrow_forward_ios</span>
                        </div>
                    </Link>
                    <Link to="/exercises" className="group relative overflow-hidden rounded-xl bg-surface-dark p-6 border border-transparent hover:border-[#23482f] transition-all duration-300 flex items-center gap-6">
                        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
                        <div className="size-16 rounded-full bg-[#23482f] flex-shrink-0 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-background-dark transition-all duration-300 shadow-lg shadow-black/20">
                            <span className="material-symbols-outlined text-3xl">fitness_center</span>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-white text-xl font-bold mb-1 group-hover:text-primary transition-colors">Exercise Library</h3>
                            <p className="text-text-secondary text-sm">Perfect your form with guides and videos.</p>
                        </div>
                        <div className="ml-auto">
                            <span className="material-symbols-outlined text-text-secondary group-hover:translate-x-1 group-hover:text-white transition-all">arrow_forward_ios</span>
                        </div>
                    </Link>
                </div>
            </div>
        </DashboardLayout>
    );
};