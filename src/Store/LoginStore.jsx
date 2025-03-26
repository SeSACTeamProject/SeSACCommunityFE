import { create } from "zustand";

const useLoginStore = create((set) => ({
    id: '',
    password: '',
    setId: (id) => set({ id }),
    setPassword: (password) => set({ password }),
}));

export default useLoginStore;