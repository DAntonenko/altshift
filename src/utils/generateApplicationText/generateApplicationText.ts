import { JobFormData } from '@/store/job-form.store';

export function generateApplicationText(data: JobFormData): string {
  return [
    `Dear ${data.company} Team,`,
    `I am writing to express my interest in the ${data.jobTitle} position.`,
    `My experience in the realm combined with my skills in ${data.skills} make me a strong candidate for this role.`,
    data.additionalDetails,
  ].join('\n\n');
}
