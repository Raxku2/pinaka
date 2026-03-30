import { useRouter } from "preact-router";
import { useEffect } from "preact/hooks";

const ScrollToTop = () => {
    const [router] = useRouter();

    useEffect(() => {
        // 1. Check if there is a hash in the URL (e.g., #contact)
        const hasHash = window.location.hash;

        if (hasHash) {
            // 2. If there's a hash, find that element
            const id = hasHash.replace('#', '');
            const element = document.getElementById(id);

            if (element) {
                // Scroll to the specific element instead of the top
                element.scrollIntoView();
            }
        } else {
            // 3. If no hash exists, reset to the very top
            window.scrollTo(0, 0);
        }
    }, [router.url]); // Still triggers on every route change

    return null;
};

export { ScrollToTop };