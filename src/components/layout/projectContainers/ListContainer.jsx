import { h, Component } from 'preact';
import ProjectRow from '../projectCards/ProjectRow';
import { useOtherProjectsStore } from '../../../stores';
import { useEffect } from 'preact/hooks';

const PrListContainer = () => {
    const { othersProjects } = useOtherProjectsStore();

    useEffect(() => {
        console.log(othersProjects);


    }, [othersProjects]);

    return (
        <section class="mb-32">
            <div class="flex items-end justify-between mb-16">
                <div class="space-y-2">
                    <span class="text-rose-300 font-bold tracking-[0.2em] text-xs uppercase">The Archives</span>
                    <h2 class="text-4xl font-bold tracking-tight">Technical Repos</h2>
                </div>
                <button class="text-primary font-bold hover:underline underline-offset-8 transition-all">View All 42 Projects</button>
            </div>
            <div class="space-y-6">

                {
                    othersProjects.map((project, index) => (<ProjectRow key={index} project={project} />))
                }

            </div>
        </section>
    );
};

export default PrListContainer;