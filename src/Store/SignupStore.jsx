import { create } from "zustand";
4
const useSignupStore = create((set) => ({
    id: '',
    password: '',
    passwordConfirm: '',
    email: '',
    setId: (id) => set({ id }),
    setPassword: (password) => set({ password }),
    setPasswordConfirm: (passwordConfirm) => set({ passwordConfirm }),
    setEmail: (email) => set({ email }),
}));

export default useSignupStore;