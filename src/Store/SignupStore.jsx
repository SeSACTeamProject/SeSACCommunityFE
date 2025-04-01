import { create } from "zustand";

const useSignupStore = create((set) => ({
  id: "",
  password: "",
  passwordConfirm: "",
  email: "",
  name: "",
  phone: "",
  birthdate: "",
  setId: (id) => set({ id }),
  setPassword: (password) => set({ password }),
  setPasswordConfirm: (passwordConfirm) => set({ passwordConfirm }),
  setEmail: (email) => set({ email }),
  setName: (name) => set({ name }),
  setPhone: (phone) => set({ phone }),
  setBirthdate: (birthdate) => ({ birthdate }),
}));

export default useSignupStore;
