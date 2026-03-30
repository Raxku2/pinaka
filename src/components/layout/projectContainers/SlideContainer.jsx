import { h } from 'preact';
import { useRef, useEffect } from 'preact/hooks';
import ProjectTile from '../projectCards/Tile';
import { useHighlightedProjectsStore } from '../../../stores/app/projects/useHighlightProjectsStore';

import Swiper from 'swiper';
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';

const PrSlideContainer = () => {
    const { highlitedProjects } = useHighlightedProjectsStore();

    const swiperContainerRef = useRef(null);
    const forwardButton = useRef(null);
    const backwardButton = useRef(null);

    useEffect(() => {
        let swiperInstance;

        if (swiperContainerRef.current && forwardButton.current && backwardButton.current) {
            swiperInstance = new Swiper(swiperContainerRef.current, {
                modules: [Navigation, FreeMode],
                slidesPerView: 'auto',
                spaceBetween: 32,
                grabCursor: true,
                speed: 600,
                loop: true,
                roundLengths: true, // ADD THIS: Forces full-pixel rendering
                freeMode: {
                    enabled: true,
                    sticky: true,
                    momentumBounce: true,
                    momentumVelocityRatio: 1.2,
                },
                navigation: {
                    nextEl: forwardButton.current,
                    prevEl: backwardButton.current,
                },
            });
        }

        return () => {
            if (swiperInstance) {
                swiperInstance.destroy();
            }
        };
    }, [highlitedProjects]);

    return (
        <section class="mb-32">
            <div class="flex items-end justify-between mb-12">
                <div class="space-y-2">
                    <span class="text-rose-300 font-bold tracking-[0.2em] text-xs uppercase"
                    >Curated Work</span>
                    <h2 class="text-4xl font-bold tracking-tight">Highlight Reel</h2>
                </div>

                <div class="hidden md:flex gap-4">
                    <button
                        ref={backwardButton}
                        class="p-4 rounded-full bg-surface-container-high text-on-surface
                         hover:bg-surface-bright transition-all active:scale-90 
                         clay-button-secondary cursor-pointer hover:scale-[105%]"
                    >
                        <span class="material-symbols-outlined">west</span>
                    </button>
                    <button
                        ref={forwardButton}
                        class="p-4 rounded-full bg-surface-container-high text-on-surface 
                        hover:bg-surface-bright transition-all active:scale-90 
                        clay-button-secondary cursor-pointer hover:scale-[105%]"
                    >
                        <span class="material-symbols-outlined">east</span>
                    </button>
                </div>
            </div>


            <div class="w-full overflow-x-hidden py-8">


                <div
                    ref={swiperContainerRef}
                    class="swiper overflow-visible! px-6"
                >
                    <div class="swiper-wrapper flex items-center">
                        {highlitedProjects.map((project, index) => (
                            <div
                                key={index}

                                class="swiper-slide w-max! backface-hidden transform-gpu"
                                style={{

                                    WebkitFontSmoothing: 'antialiased',
                                    transform: 'translateZ(0)'
                                }}
                            >
                                <ProjectTile project={project} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrSlideContainer;