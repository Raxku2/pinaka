import { h, Component } from 'preact';
import { useEffect } from 'react';
import { useNotification } from '../../hooks';
const About = () => {

    useEffect(() => {
        const { hash } = window.location;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []); // Runs when the component mounts

    const handleArsenalScroll = (e) => {
        e.preventDefault();
        const target = document.getElementById('arsenal');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            // Optional: Update URL without a page reload
            history.pushState(null, null, '#arsenal');
        }
    };

    const { popNotification } = useNotification();


    return (
        <div class="relative z-10">
            {/* <!-- SECTION 1: MANIFESTO HEADER --> */}
            <section class="viewport-section">
                <div class="relative w-full max-w-6xl mx-auto flex flex-col items-center">
                    {/* <!-- 3D Bow Visual --> */}
                    <div class="absolute inset-0 flex items-center justify-center -z-10">
                        <div class="bow-arc w-225 h-112.5 rotate-180 transform -translate-y-32"></div>
                        <div class="absolute w-175 h-87.5 bow-arc rotate-180 transform -translate-y-16 opacity-40" style="border-top-color: #ede0ff;"></div>
                    </div>

                    <div class="clay-card p-16 md:p-28 text-center w-full rounded-xl ">
                        <h1 class="text-5xl md:text-8xl font-extrabold tracking-[-0.05em] leading-[1.05] mb-10 text-glow">
                            Software is <span class="text-primary italic">more</span> than syntax. <br />
                            It is <span class="text-tertiary">LEVERAGE.</span>
                        </h1>
                        <p class="text-xl md:text-3xl text-on-surface-variant font-light max-w-3xl mx-auto leading-relaxed">
                            Ideas do not generate revenue. <br />
                            <span class="font-bold text-on-surface tracking-[0.3em] uppercase text-sm mt-4 block">Execution does.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* <!-- SECTION 2: THE PINAKA IDENTITY --> */}
            <section class="viewport-section" id='pinaka'>
                <div class="max-w-6xl w-full mx-auto">
                    <div class="clay-card  rounded-xl  p-2 md:p-3 overflow-hidden">
                        <div class="bg-[#0f172a]/40 rounded-[2.8rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-20">
                            <div class="w-full md:w-1/2">
                                <div class="tracking-[0.3em] text-primary font-bold uppercase mb-8 text-xs">The Foundation</div>
                                <h2 class="text-5xl md:text-6xl font-extrabold tracking-tight mb-10 leading-tight">The digital world knows me as <span class="text-primary">Pinaka</span>.</h2>
                                <p class="text-xl text-on-surface-variant leading-relaxed mb-12">
                                    Named after a mythic bow. I draw back complexity and launch solutions that hit the target with velocity. My architecture isn't just code; it's a calibrated instrument for scale.
                                </p>
                                <div class="flex items-center gap-6 group cursor-pointer">
                                    <button class="w-14 h-14 rounded-full clay-pill flex items-center justify-center transition-transform duration-500 group-hover:translate-y-2"
                                        onClick={handleArsenalScroll}
                                    >
                                        <span class="material-symbols-outlined text-primary" data-icon="arrow_downward">arrow_downward</span>
                                    </button>
                                    <span class="text-xs font-black tracking-widest uppercase opacity-60">Calibrate Velocity</span>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2">
                                <div class="aspect-square rounded-4xl overflow-hidden clay-card border-none p-0 relative">
                                    <img alt="Identity Visual" class="w-full h-full object-cover grayscale opacity-40 mix-blend-lighten" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBALqSJZjwePH4bRYZNh6qVHvTInqjbw4740Nx6YZf0NO5Emc3kypIc6wClQIbgrGla_pZnhy8AwiLfKNOCQqJfu-X_uhBOfBc1Vf0YtQIOf3RBBiiddindT6EL4msiMdsCryPyLStMOzY6OMR6ACxtnKBA3L5jhLh5NSqotcBChurXEENcbNWF-cQEKglEqn7GA6y86y1kZ3wdvaAWZq4bAM7V5DG8cegFareA_VE0x28qrsS3Yj38zimfELSVfCq4a7HdqVYQ" />
                                    <div class="absolute inset-0 bg-linear-to-t from-[#0B131E] via-transparent to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- SECTION 3: THE ARSENAL GRID --> */}
            <section class="viewport-section" id='arsenal'>
                <div class="max-w-7xl w-full mx-auto">
                    <div class="text-center mb-24">
                        <h2 class="text-6xl md:text-7xl font-extrabold tracking-tighter mb-6">The Arsenal</h2>
                        <div class="w-32 h-1.5 bg-primary mx-auto rounded-full opacity-20"></div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                        {/* */}
                        <div class="clay-card rounded-xl p-10 flex flex-col items-center text-center group hover:-translate-y-4 transition-all duration-500">
                            <div class="w-20 h-20 flex items-center justify-center mb-10 clay-pill glow-primary">
                                <span class="material-symbols-outlined text-primary text-4xl" data-icon="handyman" style="font-variation-settings: 'FILL' 1;">handyman</span>
                            </div>
                            <h3 class="text-2xl font-bold mb-6">The MVP Forge</h3>
                            <p class="text-on-surface-variant leading-relaxed">Hardening raw ideas into market-ready weaponry with surgical precision and speed.</p>
                        </div>

                        {/* */}
                        <div class="clay-card rounded-xl p-10 flex flex-col items-center text-center group hover:-translate-y-4 transition-all duration-500">
                            <div class="w-20 h-20 flex items-center justify-center mb-10 clay-pill glow-secondary">
                                <span class="material-symbols-outlined text-secondary text-4xl" data-icon="shopping_bag" style="font-variation-settings: 'FILL' 1;">shopping_bag</span>
                            </div>
                            <h3 class="text-2xl font-bold mb-6">Digital Commerce</h3>
                            <p class="text-on-surface-variant leading-relaxed">High-conversion transactional engines designed for the luxury digital landscape.</p>
                        </div>

                        {/* */}
                        <div class="clay-card rounded-xl p-10 flex flex-col items-center text-center group hover:-translate-y-4 transition-all duration-500">
                            <div class="w-20 h-20 flex items-center justify-center mb-10 clay-pill glow-tertiary">
                                <span class="material-symbols-outlined text-tertiary text-4xl" data-icon="memory" style="font-variation-settings: 'FILL' 1;">memory</span>
                            </div>
                            <h3 class="text-2xl font-bold mb-6">The Physical Bridge</h3>
                            <p class="text-on-surface-variant leading-relaxed">Integrating IoT and physical feedback loops into seamless digital interfaces.</p>
                        </div>

                        {/* */}
                        <div class="clay-card rounded-xl p-10 flex flex-col items-center text-center group hover:-translate-y-4 transition-all duration-500">
                            <div class="w-20 h-20 flex items-center justify-center mb-10 clay-pill glow-primary">
                                <span class="material-symbols-outlined text-primary text-4xl" data-icon="encrypted" style="font-variation-settings: 'FILL' 1;">encrypted</span>
                            </div>
                            <h3 class="text-2xl font-bold mb-6">The Code Vault</h3>
                            <p class="text-on-surface-variant leading-relaxed">Proprietary logic and optimized dependencies, secured in immutable architectures.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* <!-- SECTION 4: ETHOS & CTA --> */}
            <section class="viewport-section">
                <div class="max-w-5xl w-full mx-auto">
                    <div class="clay-card rounded-xl p-16 md:p-24 text-center relative overflow-hidden">
                        <div class="absolute inset-0 bg-linear-to-tr from-primary/10 via-transparent to-tertiary/10 pointer-events-none"></div>
                        <h2 class="text-4xl md:text-6xl font-bold mb-10 leading-tight">No bloat. No unnecessary dependencies.</h2>
                        <p class="text-2xl text-on-surface-variant mb-16 font-medium max-w-2xl mx-auto">Just clean, optimized systems engineered for absolute dominance.</p>
                        <div class="flex flex-col md:flex-row items-center justify-center gap-8">
                            <button class="clay-button-primary px-14 py-6 rounded-full font-extrabold text-xl hover:scale-105 active:scale-95"
                                onClick={() => {
                                    popNotification({ message: "This Feature is Not Available yet", status: "error" });
                                }}
                            >
                                Request a Quote
                            </button>
                            <button class="clay-button-secondary px-14 py-6 rounded-full font-extrabold text-xl hover:scale-105 active:scale-95 text-on-surface"
                                onClick={() => {
                                    popNotification({ message: "This Feature is Not Available yet", status: "error" });
                                }}>
                                Browse Premium Architectures
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;