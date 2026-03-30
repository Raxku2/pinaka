import { h, Component } from 'preact';

const Home = () => {
    return (
        <main class=" min-h-screen">

            {/* <!-- Hero Section --> */}

            <section
                class="min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-6 text-center">
                <div class="relative mb-16">
                    <div
                        class="
                        w-48 h-64 clay-card rounded-full overflow-hidden p-2 
                        transform -rotate-3 hover:rotate-0 transition-transform 
                        duration-700
                        "
                    >

                        <img alt="Rakesh Kundu"
                            class="w-full h-full object-cover rounded-full"
                            data-alt="Modern high-end cinematic portrait of a creative developer in a studio setting with soft pink and blue ambient pink lighting"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxhRp5aSumJ-K7AowL4ZoIEnrRsF5s4iKcft-bZptrpomg2eradJEFzi1fId16mF7pXlDrez1de70CaQZ5PaN1VmJWBiSfJssOpihKp68u5sG4e57580tg-dvbJ8VV9PzGm02XZHj5amjJthrkCRiiFXyBHL03_iyilQV1IzynrS4Ck_PUSDynztNYUUSZVfWIDHAbcB55iPfWZlKXQguDv8LXnBnT9nuAcbqsfep2Q2XaRtTzUZ9p87_Rlw5MrMSFTnj3LOPz" />
                    </div>
                    {/* <!-- Moniker Tag --> */}
                    <div
                        class="
                    absolute bottom-8 -right-18 clay-card bg-surface-container-high 
                    px-8 py-2 rounded-full border border-outline-variant/10
                    "
                    >

                        <span class="text-primary font-bold tracking-widest text-xs uppercase">Pinaka</span>
                    </div>
                </div>
                <h1 class="font-headline text-6xl md:text-8xl font-extrabold tracking-tight mb-4 text-on-surface">
                    Rakesh Kundu
                </h1>
                <p class="font-label text-secondary text-lg md:text-xl font-medium tracking-[0.2em] uppercase mb-8">
                    Python • Full-Stack • IoT Developer
                </p>
                <h2 class="max-w-3xl font-body text-xl md:text-4xl leading-relaxed text-on-surface-variant font-light mb-12">
                    Bridging the gap between <span class="text-primary-dim italic">scalable web systems</span> and <span class="text-secondary-dim italic">physical hardware</span>.
                </h2>
                {/* <div class="flex gap-6">
            <a class="clay-card p-4 rounded-full text-primary hover:scale-110 transition-transform duration-500 flex items-center justify-center group" href="#">
              <span class="material-symbols-outlined text-3xl" data-icon="code">code</span>
            </a>
            <a class="clay-card p-4 rounded-full text-secondary hover:scale-110 transition-transform duration-500 flex items-center justify-center group" href="#">
              <span class="material-symbols-outlined text-3xl" data-icon="share">share</span>
            </a>
          </div> */}
            </section>

        </main>
    );
};

export default Home;