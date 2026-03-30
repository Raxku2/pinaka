import { h, Component } from 'preact';
import {Link} from "preact-router/match"

const NotFound = () => {
    return (
        <div
        class="text-on-surface flex flex-col items-center justify-center min-h-screen selection:bg-primary/30"
        >
            {/* <!-- Background Ambient Gradients --> */}
            <div class="ambient-glow bg-primary top-[-10%] left-[-10%]"></div>
            <div class="ambient-glow bg-secondary bottom-[-10%] right-[-10%]"></div>
            <div class="ambient-glow bg-tertiary top-[20%] right-[10%] opacity-[0.05]"></div>
            {/* <!-- Header / Branding --> */}
            {/* <header class="w-full top-0 left-0 px-12 py-8 fixed z-50 flex justify-start items-center w-full max-w-screen-2xl mx-auto">
                <div class="font-['Plus_Jakarta_Sans'] font-bold tracking-tighter text-2xl tracking-[-0.04em] text-slate-100 dark:text-slate-50">
                    ProFolio
                </div>
            </header> */}



            {/* <!-- Main Canvas --> */}
            <div class="relative flex flex-col items-center justify-center text-center px-6 max-w-4xl w-full gap-12 mb-32">


                {/* <!-- Large Claymorphic 404 Display --> */}
                <div class="relative group">
                    <h1 class="clay-text text-[12rem] md:text-[20rem] font-extrabold leading-none tracking-tighter select-none" data-text="404">
                        404
                    </h1>
                    {/* <!-- Subtle floating effect for depth --> */}
                    <div class="absolute inset-0 bg-primary/5 blur-[100px] -z-10 rounded-full scale-75 group-hover:scale-110 transition-transform duration-2000 ease-out"></div>
                </div>


                
                {/* <!-- Typography Cluster --> */}
                <div class="flex flex-col gap-6 max-w-2xl mx-auto">
                    <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-on-surface">
                        Lost in the Digital Void.
                    </h2>
                    <p class="text-on-surface-variant text-lg md:text-xl leading-relaxed font-light">
                        The page you're looking for has drifted off-grid.<br class="hidden md:block" />
                        Let's get you back to the sanctuary.
                    </p>
                </div>



                {/* <!-- Call to Action --> */}
                <div class="mt-4">
                    <Link class="group relative inline-flex items-center justify-center px-10 py-5 bg-surface-container-highest text-on-surface font-semibold text-lg rounded-full clay-card clay-inset hover:opacity-80 transition-all duration-500 active:scale-95" href="/">
                        <span class="relative z-10 flex items-center gap-3">
                            <span class="material-symbols-outlined text-primary text-2xl">home</span>
                            Return Home
                        </span>
                        {/* <!-- Soft glow behind button --> */}
                        <div class="absolute inset-0 rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </Link>
                </div>
            </div>
            {/* <!-- Bottom Navigation Shell (The Anchor) --> */}
            {/* <!-- Suppression logic check: This is a top-level 404 navigation context for the ProFolio platform --> */}
            
            {/* <!-- Decorative Corner Accents --> */}
            <div class="fixed bottom-42 right-12 opacity-20 hidden lg:block ">
                <p class="font-['Plus_Jakarta_Sans'] text-[10px] font-bold tracking-[0.5em] uppercase text-on-surface-variant origin-right rotate-45 translate-y-12 ">
                    Status: Connection Drifted
                </p>
            </div>
            <div class="fixed top-12 left-12 opacity-20 hidden lg:block">
                <p class="font-['Plus_Jakarta_Sans'] text-[10px] font-bold tracking-[0.5em] uppercase text-on-surface-variant">
                    Error Protocol 4.0.4
                </p>
            </div>
            {/* <!-- Micro-Interaction Visual: Floating particles --> */}
            <div class="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
                <div class="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-primary/20 blur-sm"></div>
                <div class="absolute bottom-[30%] right-[25%] w-3 h-3 rounded-full bg-secondary/20 blur-sm"></div>
                <div class="absolute top-[60%] right-[10%] w-1.5 h-1.5 rounded-full bg-tertiary/20 blur-sm"></div>
            </div>
        </div>
    );
};

export default NotFound;