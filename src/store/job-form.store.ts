import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Application } from '@/models/application';

export type JobFormData = Omit<Application, 'id' | 'applicationText'>;

const initialForm: JobFormData = {
  jobTitle: '',
  company: '',
  skills: '',
  additionalDetails: '',
};

interface JobFormStore {
  form: JobFormData;

  updateField: <K extends keyof JobFormData>(
    field: K,
    value: JobFormData[K],
  ) => void;

  clear: () => void;
}

export const useJobFormStore = create<JobFormStore>()(
  persist(
    (set) => ({
      form: initialForm,

      updateField: (field, value) =>
        set((state) => ({
          form: {
            ...state.form,
            [field]: value,
          },
        })),

      clear: () => set({ form: initialForm }),
    }),
    {
      name: 'job-form-storage',
    },
  ),
);
