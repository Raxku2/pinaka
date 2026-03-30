import { h } from 'preact';
import Match, { Link } from "preact-router/match"

const IslandNav = () => {
    return (
        <div
            class="fixed bottom-8 inset-x-0 z-50 flex justify-center pointer-events-none"
        >

            <nav
                class="
                pointer-events-auto flex gap-4 items-center bg-slate-900/40 
                dark:bg-[#16202f]/60 backdrop-blur-xl rounded-full w-max px-3 py-3 
                shadow-[12px_12px_24px_rgba(0,0,0,0.4),-8px_-8px_20px_rgba(255,255,255,0.02),inset_4px_4px_8px_rgba(255,255,255,0.05)]
                "
            >
                <Match path="/projects">
                    {({ matches }) => (
                        <Link
                            class={`rounded-full p-3 shadow-inner transition-all duration-500 ease-[0.22,1,0.36,1] flex flex-col items-center gap-1 group ${matches
                                ? 'text-[#d4a5a5] bg-[#d4a5a5]/20 scale-110' /* ACTIVE STYLES */
                                : 'text-slate-400 hover:scale-110 hover:bg-slate-800/50' /* INACTIVE STYLES */
                                }`}
                            href="/projects"
                        >
                            <span class="material-symbols-outlined text-[18px]" data-icon="folder_open">folder_open</span>
                            <span class="font-plus-jakarta-sans uppercase tracking-widest text-[8px]">Projects</span>
                        </Link>
                    )}
                </Match>

                <Match path='/skills'>
                    {({ matches }) => (


                        <Link class={`rounded-full p-3 shadow-inner transition-all duration-500 ease-[0.22,1,0.36,1] flex flex-col items-center gap-1 group ${matches
                            ? 'text-[#a8b5a2] bg-[#a8b5a2]/20 scale-110' /* ACTIVE STYLES */
                            : 'text-slate-400 hover:scale-110 hover:bg-slate-800/50' /* INACTIVE STYLES */
                            }`}
                            href="/skills">
                            <span class="material-symbols-outlined text-[18px] " data-icon="bolt">bolt</span>
                            <span class="font-plus-jakarta-sans uppercase tracking-widest text-[8px]">Skills</span>
                        </Link>
                    )}
                </Match>

                <Match path='/about'>
                    {({ matches }) => (
                        <Link class={`rounded-full p-3 shadow-inner transition-all duration-500 ease-[0.22,1,0.36,1] flex flex-col items-center gap-1 group ${matches
                            ? 'text-[#b7a8d2] bg-[#b7a8d2]/20 scale-110' /* ACTIVE STYLES */
                            : 'text-slate-400 hover:scale-110 hover:bg-slate-800/50' /* INACTIVE STYLES */
                            }`} href="/about/#pinaka">
                            <span class="material-symbols-outlined text-[18px] " data-icon="person">person</span>
                            <span class="font-plus-jakarta-sans uppercase tracking-widest text-[8px]">About</span>
                        </Link>
                    )}
                </Match>

                <Match path='/contact'>
                    {({ matches }) => (
                        <Link class={`rounded-full p-3 shadow-inner transition-all duration-500 ease-[0.22,1,0.36,1] flex flex-col items-center gap-1 group ${matches
                            ? 'text-[#e8c49a] bg-[#e8c49a]/20 scale-110' /* ACTIVE STYLES */
                            : 'text-slate-400 hover:scale-110 hover:bg-slate-800/50' /* INACTIVE STYLES */
                            }`} href="/contact">
                            <span class="material-symbols-outlined text-[18px] " data-icon="alternate_email">alternate_email</span>
                            <span class="font-plus-jakarta-sans uppercase tracking-widest text-[8px]">Contact</span>
                        </Link>
                    )}
                </Match>
            </nav>
        </div>
    );
};

export default IslandNav;