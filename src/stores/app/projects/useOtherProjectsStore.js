import { create } from 'zustand'

export const useOtherProjectsStore = create((set) => ({
    othersProjects: [],

    setOthersProjects: (data) => set({ othersProjects: data }),
}));

