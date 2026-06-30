'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MAX_APPLICATIONS } from '@/constants/general';
import Link from 'next/link';
import { useApplicationsStore } from '@/store/applications.store';

export default function Header() {
  const applicationsCount = useApplicationsStore(
    (state) => state.applications.length,
  );

  return (
    <header className="flex w-full flex-wrap items-center justify-between gap-4">
      <Image
        src="/logo.svg"
        alt="AltShift logo"
        width={179}
        height={48}
        priority
      />
      <div className="flex items-center gap-4 text-lg">
        {applicationsCount}/{MAX_APPLICATIONS} applications generated
        {applicationsCount >= MAX_APPLICATIONS ? (
          <Image
            src="/icons/check.svg"
            alt="check icon"
            width={28}
            height={28}
          />
        ) : (
          <div className="flex gap-1">
            {Array.from({ length: MAX_APPLICATIONS }, (_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${i < applicationsCount ? 'bg-slate-900' : 'bg-slate-300'}`}
              />
            ))}
          </div>
        )}
        <Button asChild variant="outline" size="xs">
          <Link href="/">
            <Image
              src="/icons/home.svg"
              alt="home icon"
              width={20}
              height={20}
            />
          </Link>
        </Button>
      </div>
    </header>
  );
}
