import { h, Component } from 'preact';

const Contact = () => {
    return (
        <section class="text-on-surface selection:bg-primary/30 min-h-screen flex flex-col items-center justify-center overflow-hidden">
            <div class="mesh-gradient"></div>

            <div class="w-full max-w-4xl px-6 flex flex-col items-center justify-center relative" hidden>
                {/* <!-- Hero Gatekeeper Card --> */}
                <div class="clay-card clay-card-inner bg-surface-container-low rounded-xl p-8 md:p-20 w-full flex flex-col items-center text-center space-y-10 border border-white/5">
                    {/* <!-- Logo/Brand Icon Placeholder --> */}
                    <div class="w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center clay-card clay-card-inner">
                        <span class="material-symbols-outlined text-primary text-4xl" style="font-variation-settings: 'FILL' 1;">lock</span>
                    </div>
                    <div class="space-y-6">
                        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-tight">
                            Let’s shape your next idea.
                        </h1>
                        <p class="text-lg md:text-xl text-on-surface-variant max-w-xl mx-auto font-medium leading-relaxed opacity-80">
                            To keep our conversation secure and spam-free, please verify your identity.—just one tap.
                        </p>
                    </div>
                    {/* <!-- Action Area --> */}
                    <div class="w-full max-w-sm pt-4">


                        {/* <button class="clay-pill group relative w-full bg-surface-container-high hover:bg-surface-bright transition-all duration-500 rounded-full py-5 px-8 flex items-center justify-center gap-4 active:scale-95 border border-white/10">
                            <div class="absolute inset-0 rounded-full bg-primary/5 blur-xl group-hover:bg-primary/10 transition-all"></div>
                            <img alt="Google Logo" class="w-6 h-6 grayscale brightness-200 group-hover:grayscale-0 transition-all duration-500" data-alt="Small crisp colorful Google logo icon on a dark high-tech background for social authentication"
                                src="https://ik.imagekit.io/rax/Rakesh%20Portfolio/assets/icons/iconPack1/google1.svg?updatedAt=1775068063043"
                            />
                            <span class="text-on-surface font-semibold tracking-wide text-lg relative z-10">Continue with Google</span>
                            <span class="material-symbols-outlined text-primary text-2xl group-hover:translate-x-1 transition-transform" style="font-variation-settings: 'FILL' 1;">arrow_forward</span>
                        </button> */}

                        <button class="clay-pill group relative w-full bg-surface-container-high hover:bg-surface-bright transition-all duration-500 rounded-full py-5 px-8 flex items-center justify-center gap-4 active:scale-95 border border-white/10">
                            <div class="absolute inset-0 rounded-full bg-primary/5 blur-xl group-hover:bg-primary/10 transition-all"></div>

                            <span class="material-symbols-outlined text-on-surface/60 group-hover:text-on-surface transition-colors duration-500 text-[26px] relative z-10">
                                login
                            </span>

                            <span class="text-on-surface font-semibold tracking-wide text-lg relative z-10">
                                Login to continue
                            </span>

                            <span class="material-symbols-outlined text-primary text-2xl group-hover:translate-x-1 transition-transform relative z-10" style="font-variation-settings: 'FILL' 1;">
                                arrow_forward
                            </span>
                        </button>


                    </div>
                    {/* <!-- Footer Detail --> */}
                    <div class="pt-4">
                        <p class="text-xs uppercase tracking-[0.2em] text-outline font-bold opacity-60">
                            Secure Identity Verification • Pinaka Studio
                        </p>
                    </div>
                </div>
                {/* <!-- Background Decorative Element --> */}
                <div class="absolute -z-10 w-[120%] h-[120%] opacity-20 pointer-events-none">
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"></div>
                </div>
            </div>

            <div class="font-bodyoverflow-x-hidden flex flex-col items-center py-20 mesh-bg">

                <main class="w-full max-w-5xl mx-auto flex flex-col items-center pt-24 pb-40 space-y-24 px-6">

                    <section class="w-full text-center space-y-12">
                        <h1 class="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface">
                            What are we building?
                        </h1>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                            <button class="clay-morphism group bg-surface-container-low rounded-xl p-10 flex flex-col items-center justify-center space-y-4 hover:scale-[1.02] transition-all duration-500 hover:bg-surface-container-high relative overflow-hidden">
                                <div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span class="material-symbols-outlined text-4xl text-primary" data-icon="dashboard">dashboard</span>
                                <span class="text-lg font-headline font-bold text-on-surface tracking-tight">MVP / Web App</span>
                            </button>

                            <button class="clay-morphism-active group bg-surface-container-high rounded-xl p-10 flex flex-col items-center justify-center space-y-4 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden isolate">

                                <div class="absolute inset-0 bg-secondary/10 z-0 h-full"></div>

                                <span class="material-symbols-outlined text-4xl text-secondary relative z-10" data-icon="layers">layers</span>
                                <span class="text-lg font-headline font-bold text-on-surface tracking-tight relative z-10">Custom Software</span>

                                <div class="absolute bottom-0 w-24 h-1 bg-secondary blur-md z-10"></div>

                            </button>

                            <button class="clay-morphism group bg-surface-container-low rounded-xl p-10 flex flex-col items-center justify-center space-y-4 hover:scale-[1.02] transition-all duration-500 hover:bg-surface-container-high relative overflow-hidden">
                                <div class="absolute inset-0 bg-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span class="material-symbols-outlined text-4xl text-tertiary" data-icon="memory">memory</span>
                                <span class="text-lg font-headline font-bold text-on-surface tracking-tight">IoT / Hardware</span>
                            </button>

                            <button class="clay-morphism group bg-surface-container-low rounded-xl p-10 flex flex-col items-center justify-center space-y-4 hover:scale-[1.02] transition-all duration-500 hover:bg-surface-container-high relative overflow-hidden">
                                <div class="absolute inset-0 bg-on-surface-variant/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span class="material-symbols-outlined text-4xl text-on-surface-variant" data-icon="chat_bubble">chat_bubble</span>
                                <span class="text-lg font-headline font-bold text-on-surface tracking-tight">Just saying hi</span>
                            </button>
                        </div>
                    </section>

                    <section class="w-full flex flex-col items-center space-y-10">
                        <div class="relative group">

                            <div class="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover:bg-tertiary/20 transition-colors duration-1000"></div>


                            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 opacity-40">
                                <div class="w-1 h-8 bg-primary rounded-full"></div>
                                <div class="w-1 h-12 bg-secondary rounded-full"></div>
                                <div class="w-1 h-16 bg-tertiary rounded-full"></div>
                                <div class="w-1 h-12 bg-primary rounded-full"></div>
                                <div class="w-1 h-8 bg-secondary rounded-full"></div>
                            </div>

                            <button class="w-48 h-48 rounded-full bg-surface-container-high clay-morphism flex items-center justify-center relative z-10 hover:scale-110 active:scale-95 transition-all duration-500 group">
                                <span class="material-symbols-outlined text-6xl text-on-surface group-hover:text-primary transition-colors" data-icon="mic" data-weight="fill" style="font-variation-settings: 'FILL' 1;">mic</span>
                            </button>
                        </div>
                        <div class="text-center">
                            <p class="text-on-surface font-headline font-semibold text-xl">Hold to Record Audio.</p>
                            <p class="text-on-surface-variant text-sm font-label uppercase tracking-[0.2em] mt-2">Skip the typing.</p>
                        </div>
                    </section>


                    <section class="w-full flex justify-center">
                        <button class="w-full max-w-md h-24 rounded-full bg-primary clay-morphism flex items-center justify-center gap-4 hover:opacity-90 transition-all duration-500 active:scale-95">
                            <span class="text-on-primary font-headline font-black text-2xl tracking-tighter">[ Send to Pinaka ]</span>
                            <span class="material-symbols-outlined text-on-primary text-3xl" data-icon="arrow_forward">arrow_forward</span>
                        </button>
                    </section>


                    <footer class="w-full flex flex-col items-center space-y-8">
                        <div class="flex flex-wrap justify-center gap-8">
                            <a class="w-20 h-20 rounded-full glass-morphism clay-morphism flex items-center justify-center text-on-surface hover:text-primary hover:-translate-y-2 transition-all duration-500" href="#">
                                <span class="material-symbols-outlined text-3xl" data-icon="group">group</span>
                            </a>
                            <a class="w-20 h-20 rounded-full glass-morphism clay-morphism flex items-center justify-center text-on-surface hover:text-secondary hover:-translate-y-2 transition-all duration-500" href="#">
                                <span class="material-symbols-outlined text-3xl" data-icon="photo_camera">photo_camera</span>
                            </a>
                            <a class="w-20 h-20 rounded-full glass-morphism clay-morphism flex items-center justify-center text-on-surface hover:text-tertiary hover:-translate-y-2 transition-all duration-500" href="#">
                                <span class="material-symbols-outlined text-3xl" data-icon="forum">forum</span>
                            </a>
                            <a class="w-20 h-20 rounded-full glass-morphism clay-morphism flex items-center justify-center text-on-surface hover:text-primary-dim hover:-translate-y-2 transition-all duration-500" href="#">
                                <span class="material-symbols-outlined text-3xl" data-icon="code">code</span>
                            </a>
                            <a class="w-20 h-20 rounded-full glass-morphism clay-morphism flex items-center justify-center text-on-surface hover:text-on-surface-variant hover:-translate-y-2 transition-all duration-500" href="#">
                                <span class="material-symbols-outlined text-3xl" data-icon="alternate_email">alternate_email</span>
                            </a>
                        </div>
                        {/* <p class="text-[10px] font-label uppercase tracking-widest text-on-surface-variant opacity-50">© 2024 Pinaka Studio. Handcrafted in the Deep Sea.</p> */}
                    </footer>
                </main>

            </div>

        </section>
    );
};

export default Contact;