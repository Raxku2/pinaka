import { useHighlightedProjectsStore, useOtherProjectsStore } from "../../../stores";



const useProjectFetcherHook = () => {
    const {
        setHIghLitedProjects,
    } = useHighlightedProjectsStore();

    const { setOthersProjects } = useOtherProjectsStore();


    const showcaseProjectFetcher = async () => {
        const projectsData = [
            {
                id: "1",
                title: "MicroPythonMasterclassMasterclass Masterclass Masterclass Masterclass",
                description: "Comprehensive curriculum for advanced IoT architecture.",
                thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiV5iGdoa9aNaXc-SXQcrqzRpaiBR3uSVTaqkgagZTFZ0lKlSaMdPOG8UYIguGngFkKBYOPzus_bk_hN7b9r9hgeaZHgVQKF4YP3dH0Qo-a_59Jwr1ub26CII_EnzZGF0SXRNmvTbcexTtTap24uKoAHslJUSNsI5QS_eZdddGSkeQl1W5KivVJD4gDsu_bizssgGO-TRZUfNDn9bz5oOSGkMIhACRarm1h6aJ_eTA6Mg4hcFIwnPgfJUdNEOkVzv3fBTLK53W",
                ratings: "2.0",
                tags: ["react", "tailwind",],
                repo: "https://github.com/Raxku2/innovatearena",
                deployment: "https://innovatearena.vercel.app/",
                contributors: ["raxku2"],


            }, {
                id: "2",
                title: "MicroPython Masterclass",
                description: "Comprehensive curriculum for advanced IoT architecture.",
                thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiV5iGdoa9aNaXc-SXQcrqzRpaiBR3uSVTaqkgagZTFZ0lKlSaMdPOG8UYIguGngFkKBYOPzus_bk_hN7b9r9hgeaZHgVQKF4YP3dH0Qo-a_59Jwr1ub26CII_EnzZGF0SXRNmvTbcexTtTap24uKoAHslJUSNsI5QS_eZdddGSkeQl1W5KivVJD4gDsu_bizssgGO-TRZUfNDn9bz5oOSGkMIhACRarm1h6aJ_eTA6Mg4hcFIwnPgfJUdNEOkVzv3fBTLK53W",
                ratings: "2.0",
                tags: ["react", "tailwind", "fullstack"],
                repo: "https://github.com/Raxku2/innovatearena",
                deployment: "",
                contributors: ["raxku2"],


            }, {
                id: "3",
                title: "MicroPython Masterclass",
                description: "Comprehensive curriculum for advanced IoT architecture.",
                thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiV5iGdoa9aNaXc-SXQcrqzRpaiBR3uSVTaqkgagZTFZ0lKlSaMdPOG8UYIguGngFkKBYOPzus_bk_hN7b9r9hgeaZHgVQKF4YP3dH0Qo-a_59Jwr1ub26CII_EnzZGF0SXRNmvTbcexTtTap24uKoAHslJUSNsI5QS_eZdddGSkeQl1W5KivVJD4gDsu_bizssgGO-TRZUfNDn9bz5oOSGkMIhACRarm1h6aJ_eTA6Mg4hcFIwnPgfJUdNEOkVzv3fBTLK53W",
                ratings: "2.0",
                tags: ["react", "tailwind", "fullstack"],
                repo: "",
                deployment: "https://innovatearena.vercel.app/",
                contributors: ["raxku2"],


            }, {
                id: "4",
                title: "MicroPython Masterclass",
                description: "Comprehensive curriculum for advanced IoT architecture.",
                thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiV5iGdoa9aNaXc-SXQcrqzRpaiBR3uSVTaqkgagZTFZ0lKlSaMdPOG8UYIguGngFkKBYOPzus_bk_hN7b9r9hgeaZHgVQKF4YP3dH0Qo-a_59Jwr1ub26CII_EnzZGF0SXRNmvTbcexTtTap24uKoAHslJUSNsI5QS_eZdddGSkeQl1W5KivVJD4gDsu_bizssgGO-TRZUfNDn9bz5oOSGkMIhACRarm1h6aJ_eTA6Mg4hcFIwnPgfJUdNEOkVzv3fBTLK53W",
                ratings: "2.0",
                tags: ["react", "tailwind", "fullstack"],
                repo: "https://github.com/Raxku2/innovatearena",
                deployment: "https://innovatearena.vercel.app/",
                contributors: ["raxku2"],


            }
        ]
        setHIghLitedProjects(projectsData);
    };

    const othersProjectsFetcher = async () => {

        const projectsData = [
            {
                id: "1",
                title: "MicroPython Masterclass",
                description: "Comprehensive curriculum for advanced IoT architecture.",
                thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiV5iGdoa9aNaXc-SXQcrqzRpaiBR3uSVTaqkgagZTFZ0lKlSaMdPOG8UYIguGngFkKBYOPzus_bk_hN7b9r9hgeaZHgVQKF4YP3dH0Qo-a_59Jwr1ub26CII_EnzZGF0SXRNmvTbcexTtTap24uKoAHslJUSNsI5QS_eZdddGSkeQl1W5KivVJD4gDsu_bizssgGO-TRZUfNDn9bz5oOSGkMIhACRarm1h6aJ_eTA6Mg4hcFIwnPgfJUdNEOkVzv3fBTLK53W",
                ratings: "2.0",
                tags: ["react", "tailwind", "fullstack", "fullstack", "fullstack"],
                repo: "https://github.com/Raxku2/innovatearena",
                deployment: "https://innovatearena.vercel.app/",
                contributors: ["raxku2"],


            }, {
                id: "2",
                title: "MicroPython Masterclass",
                description: "Comprehensive curriculum for advanced IoT architecture.",
                thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiV5iGdoa9aNaXc-SXQcrqzRpaiBR3uSVTaqkgagZTFZ0lKlSaMdPOG8UYIguGngFkKBYOPzus_bk_hN7b9r9hgeaZHgVQKF4YP3dH0Qo-a_59Jwr1ub26CII_EnzZGF0SXRNmvTbcexTtTap24uKoAHslJUSNsI5QS_eZdddGSkeQl1W5KivVJD4gDsu_bizssgGO-TRZUfNDn9bz5oOSGkMIhACRarm1h6aJ_eTA6Mg4hcFIwnPgfJUdNEOkVzv3fBTLK53W",
                ratings: "2.0",
                tags: ["react", "tailwind", "fullstack"],
                repo: "https://github.com/Raxku2/innovatearena",
                deployment: "https://innovatearena.vercel.app/",
                contributors: ["raxku2"],


            }, {
                id: "3",
                title: "MicroPython Masterclass",
                description: "Comprehensive curriculum for advanced IoT architecture.",
                thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiV5iGdoa9aNaXc-SXQcrqzRpaiBR3uSVTaqkgagZTFZ0lKlSaMdPOG8UYIguGngFkKBYOPzus_bk_hN7b9r9hgeaZHgVQKF4YP3dH0Qo-a_59Jwr1ub26CII_EnzZGF0SXRNmvTbcexTtTap24uKoAHslJUSNsI5QS_eZdddGSkeQl1W5KivVJD4gDsu_bizssgGO-TRZUfNDn9bz5oOSGkMIhACRarm1h6aJ_eTA6Mg4hcFIwnPgfJUdNEOkVzv3fBTLK53W",
                ratings: "2.0",
                tags: ["react", "tailwind", "fullstack"],
                repo: "https://github.com/Raxku2/innovatearena",
                deployment: "https://innovatearena.vercel.app/",
                contributors: ["raxku2"],


            }, {
                id: "4",
                title: "MicroPython Masterclass",
                description: "Comprehensive curriculum for advanced IoT architecture.",
                thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiV5iGdoa9aNaXc-SXQcrqzRpaiBR3uSVTaqkgagZTFZ0lKlSaMdPOG8UYIguGngFkKBYOPzus_bk_hN7b9r9hgeaZHgVQKF4YP3dH0Qo-a_59Jwr1ub26CII_EnzZGF0SXRNmvTbcexTtTap24uKoAHslJUSNsI5QS_eZdddGSkeQl1W5KivVJD4gDsu_bizssgGO-TRZUfNDn9bz5oOSGkMIhACRarm1h6aJ_eTA6Mg4hcFIwnPgfJUdNEOkVzv3fBTLK53W",
                ratings: "2.0",
                tags: ["react", "tailwind", "fullstack"],
                repo: "https://github.com/Raxku2/innovatearena",
                deployment: "https://innovatearena.vercel.app/",
                contributors: ["raxku2"],


            }
        ]
        setOthersProjects(projectsData);
    }

    return {
        showcaseProjectFetcher,
        othersProjectsFetcher,
    }
}

export {
    useProjectFetcherHook,
}