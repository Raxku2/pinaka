import { useRef } from 'preact/hooks';
import DotScrollbar from './DotScrollBar';

const ScrollArea = ({ children, class: className = '' }) => {
    // Create a reference to the scrollable div
    const viewportRef = useRef(null);

    return (
        <div class={`relative overflow-hidden ${className}`}>

            {/* The actual scrolling content */}
            <div
                ref={viewportRef}
                class="h-full w-full overflow-y-auto no-scrollbar"
                style={{ scrollBehavior: 'smooth' }}
            >
                {children}
            </div>

            {/* We reuse the exact same Dot UI, but tell it to watch the viewportRef! */}
            <DotScrollbar containerRef={viewportRef} />

        </div>
    );
};

export default ScrollArea;