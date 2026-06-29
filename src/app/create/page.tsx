'use client';

import { useMemo } from 'react';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

import { Application } from '@/models/application';
import { JobFormData } from '@/store/job-form.store';
import { useJobFormStore } from '@/store/job-form.store';
import { useApplicationsStore } from '@/store/applications.store';

import { MAX_APPLICATIONS } from '@/constants/general';

const applications: Application[] | [] = []; //remove with real applications array from state manager !!

export default function Create() {
  const { form, updateField, clear } = useJobFormStore();

  function handleFieldChange<K extends keyof JobFormData>(
    field: K,
    value: JobFormData[K],
  ) {
    updateField(field, value);
  }

  const canGenerate = useMemo(() => {
    return (
      form.jobTitle.trim() !== '' &&
      form.company.trim() !== '' &&
      form.skills.trim() !== '' &&
      form.additionalDetails.trim() !== ''
    );
  }, [form]);

  function generateId(): string {
    return crypto.randomUUID();
  }

  const addApplication = useApplicationsStore((state) => state.addApplication);

  function handleGenerate() {
    const generationData = { ...form };

    const applicationText = `
      Dear ${generationData.company} Team,
      I am writing to express my interest in the ${generationData.jobTitle} position.
      My experience in the realm combined with my skills in ${generationData.skills} make me a strong candidate for this role.
      ${generationData.additionalDetails}
    `;

    addApplication({
      id: generateId(),

      ...generationData,

      applicationText,
    });

    clear();
  }

  return applications.length >= MAX_APPLICATIONS ? (
    <main>
      <p>
        You have reached the maximum number of applications. You can delete some
        of them to be able to create new ones.
      </p>
    </main>
  ) : (
    <main className="mt-8 flex w-full flex-col gap-8 sm:flex-row">
      <section className="flex-1">
        <h2 className="text-gray text-4xl font-semibold">
          {form.jobTitle && form.company
            ? `${form.jobTitle}, ${form.company}`
            : 'New Application'}
        </h2>
        <hr className="bg-gray my-4 h-px w-full" />
        <div className="space-y-6">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-1 flex-col gap-2">
              <label className="text-gray-dark text-sm font-medium">
                Job title
              </label>

              <Input
                value={form.jobTitle}
                maxLength={100}
                placeholder="Product Manager"
                className="border-gray-light focus-visible:ring-gray-light"
                onChange={(e) => handleFieldChange('jobTitle', e.target.value)}
              />
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label className="text-gray-dark text-sm font-medium">
                Company
              </label>

              <Input
                value={form.company}
                maxLength={100}
                placeholder="Apple"
                className="border-gray-light focus-visible:ring-gray-light"
                onChange={(e) => handleFieldChange('company', e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-dark text-sm font-medium">
              I am good at...
            </label>

            <Input
              value={form.skills}
              maxLength={100}
              placeholder="HTML, CSS and doing things in time"
              className="border-gray-light focus-visible:ring-gray-light"
              onChange={(e) => handleFieldChange('skills', e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-dark text-sm font-medium">
              Additional details
            </label>

            <Textarea
              value={form.additionalDetails}
              maxLength={1200}
              rows={8}
              placeholder="Describe why you are a great fit or paste your bio"
              className="border-gray-light focus-visible:ring-gray-light"
              onChange={(e) =>
                handleFieldChange('additionalDetails', e.target.value)
              }
            />
            <span
              className={`text-xs ${
                form.additionalDetails.length > 1000
                  ? 'text-red-500'
                  : 'text-muted-foreground'
              }`}
            >
              {form.additionalDetails.length}/1200
            </span>
          </div>

          <Button
            disabled={!canGenerate}
            onClick={handleGenerate}
            className="w-full"
          >
            Generate Now
          </Button>
        </div>
      </section>
      <section className="bg-gray-lighter flex-1 rounded-md p-6">
        Your personalized job application will appear here...
      </section>
    </main>
  );
}
