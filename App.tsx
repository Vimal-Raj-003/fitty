import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { DashboardPage } from './pages/Dashboard';
import { ProgramsPage } from './pages/Programs';
import { ExercisesPage } from './pages/Exercises';
import { SettingsPage } from './pages/Settings';
import { CommunityPage } from './pages/Community';
import { InWorkoutPage } from './pages/InWorkout';

// --- SHARED COMPONENTS ---

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-50">
           {/* Header */}
           <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                             <div className="text-primary size-8">
                                <span className="material-symbols-outlined text-[32px]">bolt</span>
                            </div>
                            <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">fitty</h2>
                        </div>
                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8">
                            <a className="text-slate-600 dark:text-gray-300 hover:text-primary transition-colors text-sm font-medium" href="#">How it works</a>
                            <a className="text-slate-600 dark:text-gray-300 hover:text-primary transition-colors text-sm font-medium" href="#">Science</a>
                            <a className="text-slate-600 dark:text-gray-300 hover:text-primary transition-colors text-sm font-medium" href="#">Stories</a>
                        </nav>
                         {/* Auth Buttons */}
                        <div className="flex items-center gap-4">
                            <Link to="/register" className="hidden md:block text-slate-900 dark:text-white text-sm font-bold hover:text-primary transition-colors">Log In</Link>
                            <Link to="/register" className="flex cursor-pointer items-center justify-center rounded-full bg-primary h-10 px-6 text-background-dark text-sm font-bold transition-transform hover:scale-105 active:scale-95">
                                <span>Get Started</span>
                            </Link>
                        </div>
                    </div>
                </div>
           </header>

           <main className="flex-grow">
                {/* Hero */}
                <section className="relative pt-16 pb-20 lg:pt-32 lg:pb-28">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                            {/* Text Content */}
                            <div className="flex-1 max-w-2xl text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                                    <span className="material-symbols-outlined text-sm">science</span>
                                    Behavioral Science Backed
                                </div>
                                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white mb-6">
                                    Stop Quitting. <br/>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Start Evolving.</span>
                                </h1>
                                <p className="text-lg sm:text-xl text-slate-600 dark:text-gray-400 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                    Fitty uses behavioral psychology to turn sporadic workouts into automatic habits. Zero friction, sustainable progress.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                    <Link to="/register" className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full h-14 px-8 bg-primary text-background-dark text-base font-bold transition-all hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(19,236,91,0.3)]">
                                        <span>Start Your Journey</span>
                                        <span className="material-symbols-outlined text-xl">arrow_forward</span>
                                    </Link>
                                    <Link to="/dashboard" className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full h-14 px-8 border border-slate-200 dark:border-white/20 bg-transparent text-slate-900 dark:text-white text-base font-bold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                                        <span>I have an account</span>
                                    </Link>
                                </div>
                                <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 dark:text-gray-500">
                                    <div className="flex -space-x-2">
                                         <div className="size-8 rounded-full border-2 border-background-light dark:border-background-dark bg-gray-300 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuARmVJVkkee7bosgy8mUFYjuc7h_WfpBr0h_CagU44iFKse_UyOR2ANP3-jMV0EDy-R5diAYWhJtipyk99qMq54eR7NCCGMfkG9Ohd2Io06S7JUW42RatkaSjOIHXt7KzkxhCy_WzDfQR6QQmK92mKJOeHtf2KvIttuaDN15UtJqmT4dj4H9yCG1UUpNL5awwwJmhHwfBngyxxjlVgIDF3kIc7zpvbOiW97qE5y_5XUzxGjLGN-IZIo6RF1TmFsO1MgRtud1wayTOLC')"}}></div>
                                         <div className="size-8 rounded-full border-2 border-background-light dark:border-background-dark bg-gray-300 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrGgSnsPsV5sS_zYnC3z2Jt-xrfzn0kGDohSllJaJxj_4EDD2_h0BdBsP69eCToDxrzsrXa1y9_ps_AYPBSsIr9k6zz2352gQ-a4yKazftC6ey0uocLxHkaPF8Y5lQvaq-3uW5hbr-QJzn5DahZAmB6xeO7GT3YRdjgG99H0g2eW1ya52mGe7WOirZI-q7WniyMGFOad1q2QNeBwI2gSCuPuV_oaGuCqjAhdYeOLfXONf1_jslS8n1C7nLwyzPaaogAZKVRgN3qhRz')"}}></div>
                                         <div className="size-8 rounded-full border-2 border-background-light dark:border-background-dark bg-gray-300 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTeCRNOiZq4eacrO2D9KMinS1CW4jkSKRWXFllKYmTp2qj_DKexDtlQ5LaVMh3M6MM0W1tuslPrS3gb8LE1tr6MoFxLuOVToOFTxmyN8SgIkX34apkemaxTh-e0jKdjRfUEIn95ldTFH3qQIjXHXZNQx4YpRyK7e1PSpk8zkXhKlFbfd5oz4OLRA5fX6OmbfT46SjwPqLmd8KEvLD-x1sZLjronDSrLpKHiEdg7RezfwqPz4oo8LTtUBHem-zlfarf96sFbkcf5BTv')"}}></div>
                                    </div>
                                    <p>Trusted by <span className="font-bold text-slate-900 dark:text-white">10,000+</span> habit builders</p>
                                </div>
                            </div>
                            {/* Visual Content */}
                            <div className="flex-1 w-full max-w-xl lg:max-w-none relative">
                                <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50 dark:opacity-20 pointer-events-none"></div>
                                <div className="relative bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="aspect-[4/3] relative bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDzkJr2cu8bn5KYumpYb3St8Cb7gewpoYk0Lu6jKnuvyq-9yxbmyhiATFGXUEXip8Mfn25WI1x2tMqz7Raxv7v5A_mn-RmpV4-IbgX55R3xgt3vRafzRya8dF608tKnbbzT6bpv0_h1GHaP7KkoGjEfw9K_CVwTvRQs4-73SBW0NVlWtIcWDn9dlgvsm5cSQWJOJxmxTc61vHe178AuYShKV_ShcDeUU8x81K6fEHnsORRiYRo_gBYrY3CBxU5wqiOUksdovruGxEsG')"}}>
                                        <div className="absolute inset-0 bg-gradient-to-t from-surface-light dark:from-surface-dark via-transparent to-transparent opacity-90"></div>
                                        <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg">
                                            <div className="flex items-center justify-between mb-4">
                                                <div>
                                                    <p className="text-xs text-gray-300 uppercase font-bold tracking-wider">Current Streak</p>
                                                    <p className="text-3xl font-black text-white">24 Days</p>
                                                </div>
                                                <div className="size-10 rounded-full bg-primary flex items-center justify-center text-background-dark">
                                                    <span className="material-symbols-outlined">local_fire_department</span>
                                                </div>
                                            </div>
                                            <div className="w-full bg-white/20 rounded-full h-2">
                                                <div className="bg-primary h-2 rounded-full" style={{width: "80%"}}></div>
                                            </div>
                                            <p className="text-xs text-gray-300 mt-2 text-right">Keep it up!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Section */}
                <section className="py-20 bg-slate-50 dark:bg-surface-dark/50">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">Why Fitty Works</h2>
                            <p className="text-slate-600 dark:text-gray-400 text-lg">Most apps focus on the workout intensity. We focus on the habit formation.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                             {[
                                {icon: "speed", title: "Frictionless Tracking", desc: "Log your progress in seconds, not minutes. Our interface is designed to get out of your way."},
                                {icon: "psychology", title: "Habit Science", desc: "Built on proven behavioral psychology principles to help you break bad cycles and build good ones."},
                                {icon: "monitoring", title: "Long-term Results", desc: "We prioritize consistency over intensity. Small wins compound into massive transformations."}
                             ].map((feature, i) => (
                                <div key={i} className="group bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-white/5 p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                        <span className="material-symbols-outlined text-[32px]">{feature.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                                    <p className="text-slate-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                                </div>
                             ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-background-light dark:bg-background-dark" style={{backgroundImage: "radial-gradient(#13ec5b 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.05}}></div>
                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                         <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Ready to evolve?</h2>
                         <p className="text-lg text-slate-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">Join thousands of others who have stopped starting over and finally built a fitness habit that lasts.</p>
                         <div className="flex flex-col sm:flex-row justify-center gap-4">
                             <Link to="/register" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-primary text-background-dark text-lg font-bold transition-transform hover:scale-105 shadow-xl shadow-primary/20">
                                 Get Started Free
                             </Link>
                         </div>
                    </div>
                </section>
           </main>

           {/* Footer */}
           <footer className="border-t border-slate-200 dark:border-white/10 bg-surface-light dark:bg-background-dark py-12">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-2xl">bolt</span>
                            <span className="text-slate-900 dark:text-white font-bold text-lg">fitty</span>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-8">
                            <a className="text-slate-500 dark:text-gray-400 hover:text-primary text-sm font-medium transition-colors" href="#">Privacy Policy</a>
                            <a className="text-slate-500 dark:text-gray-400 hover:text-primary text-sm font-medium transition-colors" href="#">Terms of Service</a>
                            <a className="text-slate-500 dark:text-gray-400 hover:text-primary text-sm font-medium transition-colors" href="#">Contact Support</a>
                        </div>
                        <div className="flex gap-4">
                            <a className="text-slate-400 dark:text-gray-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
                            <a className="text-slate-400 dark:text-gray-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">thumb_up</span></a>
                            <a className="text-slate-400 dark:text-gray-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-slate-400 dark:text-gray-600 text-sm">© 2023 Fitty Inc. All rights reserved.</p>
                    </div>
                </div>
           </footer>
        </div>
    );
};

const RegisterPage = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="layout-container flex h-screen grow flex-col justify-center items-center py-10 px-4 sm:px-10 bg-background-light dark:bg-background-dark">
            <div className="layout-content-container flex flex-col w-full max-w-[520px] gap-8">
                {/* Header */}
                <header className="flex flex-col items-center gap-6 text-center cursor-pointer" onClick={() => navigate('/')}>
                    <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                        <div className="size-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-[28px]">fitness_center</span>
                        </div>
                        <h2 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">fitty</h2>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-slate-900 dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">Join Fitty</h1>
                        <p className="text-slate-600 dark:text-[#92c9a4] text-lg font-normal leading-normal">Build habits that stick. No friction, just fitness.</p>
                    </div>
                </header>

                {/* Social Buttons */}
                <div className="flex flex-col gap-3 w-full">
                    <button className="relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-white dark:bg-surface-dark hover:bg-gray-100 dark:hover:bg-[#23482f] text-slate-900 dark:text-white gap-3 transition-colors border border-gray-200 dark:border-transparent hover:border-primary/30">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
                        <span className="text-base font-bold tracking-[0.015em]">Continue with Google</span>
                    </button>
                    <button className="relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-white dark:bg-surface-dark hover:bg-gray-100 dark:hover:bg-[#23482f] text-slate-900 dark:text-white gap-3 transition-colors border border-gray-200 dark:border-transparent hover:border-primary/30">
                         <span className="material-symbols-outlined">desktop_mac</span>
                        <span className="text-base font-bold tracking-[0.015em]">Continue with Apple</span>
                    </button>
                </div>

                {/* Divider */}
                <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-gray-200 dark:border-[#23482f]"></div>
                    <span className="flex-shrink-0 mx-4 text-slate-500 dark:text-[#92c9a4] text-sm">or sign up with email</span>
                    <div className="flex-grow border-t border-gray-200 dark:border-[#23482f]"></div>
                </div>

                <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
                    <div className="flex flex-col gap-2">
                        <label className="text-slate-900 dark:text-white text-sm font-medium ml-1" htmlFor="displayName">Display Name</label>
                        <div className="relative">
                            <input className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-full text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#92c9a4]/50 focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-200 dark:border-none bg-white dark:bg-surface-dark h-14 px-6 text-base font-normal leading-normal transition-shadow" id="displayName" placeholder="e.g. FitRunner99" type="text"/>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-[#92c9a4] pointer-events-none">
                                <span className="material-symbols-outlined text-[20px]">badge</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                         <label className="text-slate-900 dark:text-white text-sm font-medium ml-1" htmlFor="email">Email Address</label>
                         <div className="relative">
                            <input className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-full text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#92c9a4]/50 focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-200 dark:border-none bg-white dark:bg-surface-dark h-14 px-6 text-base font-normal leading-normal transition-shadow" id="email" placeholder="name@example.com" type="email"/>
                             <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-[#92c9a4] pointer-events-none">
                                <span className="material-symbols-outlined text-[20px]">mail</span>
                            </div>
                         </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-slate-900 dark:text-white text-sm font-medium ml-1" htmlFor="password">Password</label>
                        <div className="relative group">
                            <input className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-full text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#92c9a4]/50 focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-200 dark:border-none bg-white dark:bg-surface-dark h-14 px-6 pr-12 text-base font-normal leading-normal transition-shadow" id="password" placeholder="Create a password" type={showPassword ? "text" : "password"}/>
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-[#92c9a4] hover:text-primary transition-colors cursor-pointer outline-none flex items-center justify-center" type="button" onClick={() => setShowPassword(!showPassword)}>
                                <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                            </button>
                        </div>
                        {/* Strength Indicator */}
                        <div className="flex gap-1 px-2 mt-1">
                            <div className="h-1 flex-1 rounded-full bg-primary"></div>
                            <div className="h-1 flex-1 rounded-full bg-primary/30"></div>
                            <div className="h-1 flex-1 rounded-full bg-gray-200 dark:bg-surface-dark"></div>
                            <div className="h-1 flex-1 rounded-full bg-gray-200 dark:bg-surface-dark"></div>
                        </div>
                        <span className="text-xs text-primary px-2">Strong password</span>
                    </div>

                    <div className="pt-2">
                        <button type="submit" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary hover:bg-[#10d450] text-[#102216] gap-2 text-lg font-bold leading-normal tracking-[0.015em] transition-all transform active:scale-[0.98] shadow-[0_0_20px_rgba(19,236,91,0.3)] hover:shadow-[0_0_30px_rgba(19,236,91,0.5)]">
                            <span>Get Started</span>
                            <span className="material-symbols-outlined font-semibold">arrow_forward</span>
                        </button>
                    </div>
                </form>

                 <div className="text-center pb-6">
                    <p className="text-slate-500 dark:text-[#92c9a4] text-base">
                        Already a member? <Link to="/dashboard" className="text-primary hover:text-slate-900 dark:hover:text-white font-bold transition-colors ml-1 decoration-primary/50 underline underline-offset-4">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

// --- APP COMPONENT ---

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/programs" element={<ProgramsPage />} />
                <Route path="/exercises" element={<ExercisesPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/in-workout" element={<InWorkoutPage />} />
                <Route path="/community" element={<CommunityPage />} />
            </Routes>
        </HashRouter>
    );
};

export default App;