import { h, Component } from 'preact';
import { useState } from 'preact/hooks';

const NotificationCard1 = ({ message = "Deafult", status = "Deafult", redirect = "" }) => {
    const [visibility, setVisibility] = useState(true)
    const HandelClose = () => {
        setVisibility(false);
    }
    return (
        <>
            {visibility && <div class="fixed top-4 right-1 md:right-8 z-60 pointer-events-none">
                <div class="clay-notification pointer-events-auto flex items-center gap-4 px-6 py-4 max-w-sm">

                    <div class="flex flex-col">
                        <span class="font-headline text-[10px] uppercase tracking-[0.2em] text-outline">{status}</span>
                        <span class="font-headline text-lg font-extrabold text-on-surface leading-tight">{message}</span>
                    </div>
                    <button
                        hidden={!redirect}
                        class="
                ml-2 clay-btn-inner bg-surface-bright hover:bg-surface-container-highest 
                text-primary font-bold text-xs px-4 py-2 rounded-full transition-colors 
                duration-300 cursor-pointer
                "
                    >
                        View
                    </button>
                    <button
                        onClick={HandelClose}
                        class="
                    clay-btn-inner bg-surface-bright hover:bg-surface-container-highest 
                text-primary font-bold text-xs px-3 py-2 rounded-full transition-colors 
                duration-300 cursor-pointer
                "
                    >
                        x
                    </button>
                </div>
            </div>}
        </>
    );
};

export default NotificationCard1;