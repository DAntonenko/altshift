import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { Application } from '@/models/application';

interface ApplicationsStore {
  applications: Application[];

  addApplication: (application: Application) => void;

  removeApplication: (id: string) => void;

  clearApplications: () => void;
}

export const useApplicationsStore = create<ApplicationsStore>()(
  persist(
    (set) => ({
      applications: [],

      addApplication: (application) =>
        set((state) => ({
          applications: [application, ...state.applications],
        })),

      removeApplication: (id) =>
        set((state) => ({
          applications: state.applications.filter(
            (application) => application.id !== id,
          ),
        })),

      clearApplications: () =>
        set({
          applications: [],
        }),
    }),
    {
      name: 'applications-storage',
    },
  ),
);
