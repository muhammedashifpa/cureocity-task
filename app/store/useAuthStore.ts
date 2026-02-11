import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  role: "admin" | "user" | null;
  selectedUserId: number | null;
  _hasHydrated: boolean;
  setAuth: (token: string, user: User) => void;
  logout: () => void;
  setSelectedUser: (id: number | null) => void;
  setHasHydrated: (state: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      role: null,
      selectedUserId: null,
      _hasHydrated: false,
      setAuth: (token, user) => {
        // Deterministic role logic: even IDs are admins
        const role = user.id % 2 === 0 ? "admin" : "user";
        set({ token, user, role });
      },
      logout: () => set({ token: null, user: null, role: null, selectedUserId: null }),
      setSelectedUser: (id) => set({ selectedUserId: id }),
      setHasHydrated: (state) => set({ _hasHydrated: state }),
    }),
    {
      name: "cureocity-auth",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
