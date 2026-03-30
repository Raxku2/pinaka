import { h, Component } from 'preact';
import { useEffect } from 'preact/hooks';

const ProjectRow = ({ project }) => {
    useEffect(() => {
        console.log(project);

    }, [project])
    return (
        <div class="w-full bg-surface-container-low hover:bg-surface-container-high rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-500 clay-card group">
            <div class="flex items-center gap-6 w-full md:w-1/3">
                <div class="w-14 h-14 shrink-0 bg-surface-container-highest rounded-full flex items-center justify-center text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-on-primary">
                    <span class="material-symbols-outlined">terminal</span>
                </div>
                <div>
                    <h4 class="text-xl font-bold">Custom Arch Linux OS</h4>
                    <p class="text-on-surface-variant text-sm line-clamp-1">Optimization for 5-second cold boot sequence.</p>
                </div>
            </div>
            <div class="flex flex-wrap gap-2 w-full md:w-1/3 justify-center">
                <span class="px-3 py-1 rounded-full border border-outline-variant text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">Arch Linux</span>
                <span class="px-3 py-1 rounded-full border border-outline-variant text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">PostgreSQL</span>
                <span class="px-3 py-1 rounded-full border border-outline-variant text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">Kernel Dev</span>
            </div>
            <div class="flex gap-4 w-full md:w-auto justify-end">
                <button class="px-5 py-2 rounded-full text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2">
                    <span class="material-symbols-outlined text-lg">code_blocks</span>
                    <span class="text-xs font-bold uppercase tracking-widest">Github</span>
                </button>
                <button class="px-5 py-2 rounded-full text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2">
                    <span class="material-symbols-outlined text-lg">rocket</span>
                    <span class="text-xs font-bold uppercase tracking-widest">Deploy</span>
                </button>
                <button class="px-6 py-2 rounded-full bg-surface-container-highest text-on-surface font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all clay-button-secondary">
                    View Info
                </button>
            </div>
        </div>
    );
};

export default ProjectRow;