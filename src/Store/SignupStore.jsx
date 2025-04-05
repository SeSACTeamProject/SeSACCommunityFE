import { create } from "zustand";

const useSignupStore = create((set) => ({
  id: "",
  password: "",
  passwordConfirm: "",
  email: "",
  name: "",
  phone: "",
  nickname: "",
  birthdate: "",
  setId: (id) => set({ id }),
  setPassword: (password) => set({ password }),
  setPasswordConfirm: (passwordConfirm) => set({ passwordConfirm }),
  setEmail: (email) => set({ email }),
  setName: (name) => set({ name }),
  setPhone: (phone) => set({ phone }),
  setNickname: (nickname) => set({ nickname }),
  setBirthdate: (birthdate) => ({ birthdate }),

  // 모달 닫았을때 초기화되게
  resetSignupStep2: () => set({
    id: "",
    password: "",
    passwordConfirm: "",
  }),
  resetSignupStep3: () => set({
    email: "",
    name: "",
    phone: "",
  }),
  resetSignupStep4: () => set({
    nickname: "",
    birthdate: "",
  })
}));

export default useSignupStore;
