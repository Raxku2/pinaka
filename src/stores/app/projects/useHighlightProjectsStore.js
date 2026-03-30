import { create } from 'zustand'

export const useHighlightedProjectsStore = create((set) => ({
    highlitedProjects: [],

    setHIghLitedProjects: (data) => set({ highlitedProjects: data }),
}));