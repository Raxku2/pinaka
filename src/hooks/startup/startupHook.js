import { useProjectFetcherHook } from "../owner/projects/getProjects";

const useStartupHooks = () => {

    const {
        showcaseProjectFetcher,othersProjectsFetcher
    } = useProjectFetcherHook();





    const startupProcesses = async () => {
        console.log("Portfolio Starting");
        othersProjectsFetcher();
        showcaseProjectFetcher();
    };

    return {
        startupProcesses,
    }
}

export {
    useStartupHooks,
}