import { h, Component } from 'preact';

const Contact = () => {
    return (
        <body class="text-on-surface selection:bg-primary/30 min-h-screen flex flex-col items-center justify-center overflow-hidden">
            <div class="mesh-gradient"></div>

            {/* <!-- Main Content Canvas --> */}
            <main class="w-full max-w-4xl px-6 flex flex-col items-center justify-center relative">
                {/* <!-- Hero Gatekeeper Card --> */}
                <div class="clay-card clay-card-inner bg-surface-container-low rounded-xl p-12 md:p-20 w-full flex flex-col items-center text-center space-y-10 border border-white/5">
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


                        <button class="clay-pill group relative w-full bg-surface-container-high hover:bg-surface-bright transition-all duration-500 rounded-full py-5 px-8 flex items-center justify-center gap-4 active:scale-95 border border-white/10">
                            {/* <!-- Subtle Inner Glow --> */}
                            <div class="absolute inset-0 rounded-full bg-primary/5 blur-xl group-hover:bg-primary/10 transition-all"></div>
                            <img alt="Google Logo" class="w-6 h-6 grayscale brightness-200 group-hover:grayscale-0 transition-all duration-500" data-alt="Small crisp colorful Google logo icon on a dark high-tech background for social authentication" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAETUaZtqvfTjYnMrjaFH62gTeDFGP3jkzS8undXrWH206mtK_Uu3EFxRAuBa-X5mNkBgiqPkk8TLTZY-L7cjzMzdmlDSGTp544zscAhk9KgOO0Am4Pjn-nnduInuYFdRcVNCWModBa4NQ3NdzBkM-IoMuQnqaHX6i8hMluU-QPoktLgGGAW1RW9hWId920auOSY60tqaGaISN0QN3PQNuV2BPOmp9lXH-cPqMkk6tHXZpsmUTnXdIHw7wHLMl4zIOkKozhIjKi" />
                            <span class="text-on-surface font-semibold tracking-wide text-lg relative z-10">Continue with Google</span>
                            <span class="material-symbols-outlined text-primary text-2xl group-hover:translate-x-1 transition-transform" style="font-variation-settings: 'FILL' 1;">arrow_forward</span>
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
            </main>

        </body>
    );
};

export default Contact;