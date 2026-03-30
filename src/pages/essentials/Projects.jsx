import { h, Component } from 'preact';
import { PrListContainer, ProjectRow, PrSlideContainer } from '../../components';
import { useHighlightedProjectsStore } from '../../stores/app/projects/useHighlightProjectsStore';
import { useEffect, useState } from 'preact/hooks';



const Projects = () => {
    const { highlitedProjects } = useHighlightedProjectsStore();

    const [highlightContainerVisibility, setHighlightContainerVisibility] = useState(false);

    useEffect(() => {
        if (highlitedProjects && highlitedProjects.length > 0) {
            setHighlightContainerVisibility(true);
        }
        else {
            setHighlightContainerVisibility(false);
        }

    }, [highlitedProjects]);

    return (
        <div class="text-on-surface selection:bg-primary/30">
            {/* <div class="mesh-gradient"></div> */}

            <section class="pt-32 pb-40 px-6 md:px-12 max-w-screen-2xl mx-auto">
                {/* <!-- Hero Section --> */}
                <section class="mb-24 md:mb-40">
                    <h1 class="text-6xl md:text-[8rem] font-extrabold tracking-[-0.04em] leading-none text-on-surface mb-8">
                        The Arsenal
                    </h1>
                    <p class="text-xl md:text-2xl text-on-surface-variant max-w-3xl leading-relaxed font-light">
                        Architectures, MVPs, and custom solutions built for scale. Browse the live deployments, read the technical case studies, or acquire the source code.
                    </p>
                </section>




                {/* <!-- Section 1: The Highlight Reel --> */}
                {highlightContainerVisibility && <PrSlideContainer />}







                {/* <!-- Section 2: The Archive --> */}
                <PrListContainer />
            </section>





            {/* <!-- Background Decorative Elements --> */}
            {/* <div class="fixed top-1/4 -right-20 w-96 h-96 bg-secondary/5 blur-[120px] pointer-events-none rounded-full"></div>
            <div class="fixed bottom-1/4 -left-20 w-[30rem] h-[30rem] bg-primary/5 blur-[150px] pointer-events-none rounded-full"></div> */}
        </div>
    );
};

export default Projects;