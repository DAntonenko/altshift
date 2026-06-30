'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Card from '@/components/ui/card';
import Banner from '@/components/ui/banner';
import Link from 'next/link';
import { useApplicationsStore } from '@/store/applications.store';

import { MAX_APPLICATIONS } from '@/constants/general';

export default function Home() {
  const applications = useApplicationsStore((state) => state.applications);

  return (
    <main className="my-8 flex h-full w-full flex-col gap-4">
      <section className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold text-black">Applications</h1>
        <Button asChild size="sm">
          <Link href="/create">+ Create New</Link>
        </Button>
      </section>

      <hr className="bg-gray my-2 h-px w-full" />

      <section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        {applications.map((app) => (
          <Card
            key={app.id}
            id={app.id}
            applicationText={app.applicationText}
          />
        ))}
      </section>
      {applications.length < MAX_APPLICATIONS && <Banner />}
    </main>
  );
}
