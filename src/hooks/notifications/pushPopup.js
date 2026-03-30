import { useCallback } from "preact/hooks";
import { NotificationCard1 } from "../../components"
import { h, render } from "preact";

const useNotification = (Component = NotificationCard1, targetId = "app") => {
    const popNotification = useCallback((props = {}) => {
        const targetElement = document.getElementById(targetId);

        if (!targetElement) {
            console.warn(`Target element with id "${targetId}" not found.`);
            return;
        }


        const container = document.createElement('div');
        targetElement.appendChild(container);

        render(h(Component, props), container);

        return () => {
            render(null, container); // Unmounts the Preact component
            container.remove();      // Removes the wrapper from the DOM
        };
    }, [Component, targetId]);

    return {popNotification};
}

export {
    useNotification
}