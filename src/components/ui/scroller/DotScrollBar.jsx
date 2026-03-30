import { useEffect, useState, useRef } from 'preact/hooks';

// Added new props to control the pastel hue range. 
// Defaults are set to your Pinaka theme: 350 (Soft Pink) to 270 (Soft Purple)
const DotScrollbar = ({
    containerRef = null,
    startHue = 360,
    endHue = 0,
    saturation = 75, // Lock at 75-80% for pastel saturation
    lightness = 80   // Lock at 80-85% for pastel brightness
}) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isScrollable, setIsScrollable] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const trackRef = useRef(null);
    const dotRef = useRef(null);
    const dragOffset = useRef(0);
    const rafId = useRef(null);

    const DOT_SIZE = 16;

    const getTarget = () => containerRef ? containerRef.current : document.documentElement;

    const checkScrollable = () => {
        const target = getTarget();
        if (!target) return;
        const maxScroll = target.scrollHeight - target.clientHeight;
        setIsScrollable(maxScroll > 0);
    };

    useEffect(() => {
        const target = getTarget();
        if (!target) return;

        const handleScroll = () => {
            const maxScroll = target.scrollHeight - target.clientHeight;
            if (maxScroll <= 0) return;
            setScrollProgress(target.scrollTop / maxScroll);
        };

        const scrollListenerTarget = containerRef ? target : window;

        scrollListenerTarget.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', checkScrollable);

        checkScrollable();
        handleScroll();

        const observer = new ResizeObserver(checkScrollable);
        observer.observe(target);
        if (target.firstElementChild) observer.observe(target.firstElementChild);

        return () => {
            scrollListenerTarget.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkScrollable);
            observer.disconnect();
        };
    }, [containerRef]);

    useEffect(() => {
        if (!isDragging) return;

        const handlePointerMove = (e) => {
            if (!trackRef.current) return;
            const target = getTarget();
            if (!target) return;

            if (rafId.current) cancelAnimationFrame(rafId.current);

            rafId.current = requestAnimationFrame(() => {
                const trackRect = trackRef.current.getBoundingClientRect();
                const usableHeight = trackRect.height - DOT_SIZE;

                let y = (e.clientY - trackRect.top) - dragOffset.current;
                y = Math.max(0, Math.min(y, usableHeight));

                const percentage = y / usableHeight;
                const maxScroll = target.scrollHeight - target.clientHeight;

                target.style.scrollBehavior = 'auto';

                if (containerRef) {
                    target.scrollTop = percentage * maxScroll;
                } else {
                    window.scrollTo(0, percentage * maxScroll);
                }

                target.style.scrollBehavior = 'smooth';
            });
        };

        const handlePointerUp = () => {
            setIsDragging(false);
            document.body.style.userSelect = '';
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };

        window.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('pointerup', handlePointerUp);

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
        };
    }, [isDragging, containerRef]);

    const handlePointerDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
        document.body.style.userSelect = 'none';
        const dotRect = dotRef.current.getBoundingClientRect();
        dragOffset.current = e.clientY - dotRect.top;
    };

    if (!isScrollable) return null;

    // THE PASTEL MATH API:
    // Calculates the exact current hue based on your start and end points.
    const currentHue = startHue + ((endHue - startHue) * scrollProgress);
    const pastelColor = `hsl(${currentHue}, ${saturation}%, ${lightness}%)`;

    return (
        <div
            ref={trackRef}
            class={`${containerRef ? 'absolute' : 'fixed'} right-0 top-0 bottom-0 w-4 z-50 pointer-events-none`}
        >
            <div
                ref={dotRef}
                onPointerDown={handlePointerDown}
                class={`absolute right-0 w-4 h-4 rounded-l-full pointer-events-auto cursor-grab active:cursor-grabbing ${isDragging ? 'scale-y-150 scale-x-125 origin-right' : 'hover:scale-125 origin-right'}`}
                style={{
                    top: `calc(${scrollProgress * 100}% - ${scrollProgress * DOT_SIZE}px)`,

                    // Applies the dynamically calculated pastel HSL color
                    backgroundColor: pastelColor,
                    boxShadow: `0 0 15px ${pastelColor}`,

                    touchAction: 'none',
                    transition: isDragging ? 'none' : 'top 0.1s ease-out, transform 0.2s, background-color 0.1s'
                }}
            />
        </div>
    );
};

export default DotScrollbar;



