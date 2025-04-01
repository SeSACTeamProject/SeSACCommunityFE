import { create } from "zustand";

const useLoginModalStore = create((set) => ({
  isOpen: false, // 모달상태
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export default useLoginModalStore;
