import { create } from 'zustand'

interface UIState {
  mobileMenuOpen: boolean
  ageGateAccepted: boolean
  selectedCategory: string | null
  toggleMobileMenu: () => void
  closeMobileMenu: () => void
  acceptAgeGate: () => void
  setSelectedCategory: (category: string | null) => void
}

export const useUIStore = create<UIState>((set) => ({
  mobileMenuOpen: false,
  ageGateAccepted: false,
  selectedCategory: null,
  toggleMobileMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),
  acceptAgeGate: () => set({ ageGateAccepted: true }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}))
