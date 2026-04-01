import { create } from 'zustand'

export const useUserInfoStore = create((set) => ({
    userType: 'guest',


    setUserType: (data) => set({ userType: data }),
}));


