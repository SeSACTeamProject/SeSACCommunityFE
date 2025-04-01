import { create } from "zustand";

const useNavBarStore = create((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));

export default useNavBarStore;
