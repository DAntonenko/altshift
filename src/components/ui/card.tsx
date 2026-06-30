'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useApplicationsStore } from '@/store/applications.store';
import { copyToClipboard } from '@/utils/copyToClipboard';
import { Application } from '@/models/application';

type CardProps = Pick<Application, 'id' | 'applicationText'>;

export default function Card({ id, applicationText }: CardProps) {
  const removeApplication = useApplicationsStore(
    (state) => state.removeApplication,
  );

  return (
    <div className="bg-gray-lighter flex h-[240px] w-full flex-col gap-4 rounded-md p-6">
      <p className="overflow-hidden whitespace-pre-wrap">{applicationText}</p>
      <footer className="before:from-gray-lighter relative flex items-center justify-between gap-2 before:pointer-events-none before:absolute before:-top-20 before:right-0 before:left-0 before:h-20 before:bg-gradient-to-t before:to-transparent before:content-['']">
        <Button variant="ghost" size="gh" onClick={() => removeApplication(id)}>
          <Image
            src="/icons/trash.svg"
            alt="trash icon"
            width={20}
            height={20}
          />
          Delete
        </Button>
        <Button
          variant="ghost"
          size="gh"
          onClick={() => copyToClipboard(applicationText)}
        >
          Copy to Clipboard
          <Image src="/icons/copy.svg" alt="copy icon" width={20} height={20} />
        </Button>
      </footer>
    </div>
  );
}
