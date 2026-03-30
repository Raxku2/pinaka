import { h } from 'preact';
import {Link} from "preact-router/match"

const Header1 = () => {
    // 1. Invisible full-width wrapper to anchor to the top
    return (
        <div class="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none">
            
            {/* // 2. The actual header (clicks re-enabled, max-width applied here) */}
            <header class="pointer-events-auto w-full max-w-screen-2xl flex justify-between items-center px-6 md:px-12 py-8">
                
                <Link class="text-2xl font-bold tracking-tighter text-rose-400 dark:text-rose-300 font-plus-jakarta-sans" href="/" >
                    Pinaka
                </Link>
                
                <div class="flex gap-6 items-center">
                    <button class="material-symbols-outlined text-rose-300 dark:text-rose-200 hover:text-rose-300 transition-colors duration-500 scale-95 ease-in-out" data-icon="terminal">terminal</button>
                    <button class="material-symbols-outlined text-rose-300 dark:text-rose-200 hover:text-rose-300 transition-colors scale-95 duration-500 ease-in-out" data-icon="sensors">sensors</button>
                </div>
                
            </header>
        </div>
    );
};

export default Header1;