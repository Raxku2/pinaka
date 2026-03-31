import { create } from 'zustand'

export const useOtherProjectsStore = create((set) => ({
    othersProjects: [],
    projectCount: 0,

    setOthersProjects: (data) => set({ othersProjects: data }),
    setProjectCount: (data) => set({ projectCount: data }),

}));

