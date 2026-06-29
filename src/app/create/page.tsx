'use client';

import { useMemo, useState } from 'react';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

import { Application } from '@/models/application';
import { useJobFormStore } from '@/store/job-form.store';

import { MAX_APPLICATIONS } from '@/constants/general';

const applications: Application[] | [] = []; //remove with real applications array from state manager

export default function Create() {
  const { form, updateField } = useJobFormStore();

  const [localForm, setLocalForm] = useState(form);

  function setField<K extends keyof typeof localForm>(field: K, value: string) {
    setLocalForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function commitField<K extends keyof typeof localForm>(field: K) {
    updateField(field, localForm[field]);
  }

  const canGenerate = useMemo(() => {
    return (
      localForm.jobTitle.trim() !== '' &&
      localForm.company.trim() !== '' &&
      localForm.skills.trim() !== '' &&
      localForm.additionalDetails.trim() !== ''
    );
  }, [localForm]);

  function handleGenerate() {
    updateField('jobTitle', localForm.jobTitle);
    updateField('company', localForm.company);
    updateField('skills', localForm.skills);
    updateField('additionalDetails', localForm.additionalDetails);

    console.log('GENERATE:', localForm);
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
        <h2 className="text-gray text-4xl font-semibold">New Application</h2>
        <hr className="bg-gray my-4 h-px w-full" />
        <div className="space-y-6">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-1 flex-col gap-2">
              <label className="text-gray-dark text-sm font-medium">
                Job title
              </label>

              <Input
                value={localForm.jobTitle}
                maxLength={100}
                placeholder="Product Manager"
                className="border-gray-light focus-visible:ring-gray-light"
                onChange={(e) => setField('jobTitle', e.target.value)}
                onBlur={() => commitField('jobTitle')}
              />
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label className="text-gray-dark text-sm font-medium">
                Company
              </label>

              <Input
                value={localForm.company}
                maxLength={100}
                placeholder="Apple"
                className="border-gray-light focus-visible:ring-gray-light"
                onChange={(e) => setField('company', e.target.value)}
                onBlur={() => commitField('company')}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-dark text-sm font-medium">
              I am good at...
            </label>

            <Input
              value={localForm.skills}
              maxLength={100}
              placeholder="HTML, CSS and doing things in time"
              className="border-gray-light focus-visible:ring-gray-light"
              onChange={(e) => setField('skills', e.target.value)}
              onBlur={() => commitField('skills')}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-dark text-sm font-medium">
              Additional details
            </label>

            <Textarea
              value={localForm.additionalDetails}
              maxLength={1200}
              rows={8}
              placeholder="Describe why you are a great fit or paste your bio"
              className="border-gray-light focus-visible:ring-gray-light"
              onChange={(e) => setField('additionalDetails', e.target.value)}
              onBlur={() => commitField('additionalDetails')}
            />
            <span
              className={`text-xs ${
                localForm.additionalDetails.length > 1000
                  ? 'text-red-500'
                  : 'text-muted-foreground'
              }`}
            >
              {localForm.additionalDetails.length}/1200
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
