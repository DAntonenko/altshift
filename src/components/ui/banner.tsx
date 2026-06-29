import { Button } from '@/components/ui/button';
import { MAX_APPLICATIONS } from '@/constants/general';
import Link from 'next/link';

export default function Banner() {
  return (
    <section className="bg-green-light text-gray flex w-full flex-col items-center justify-between gap-4 rounded-lg px-6 py-13.5 text-center">
      <h2 className="text-4xl font-semibold text-black">Hit your goal</h2>
      <p>
        Generate and send out couple more job applications
        <br />
        today to get hired faster
      </p>
      <Button asChild>
        <Link href="/create">+ Create New</Link>
      </Button>
      <div className="mt-3 flex gap-2">
        {Array.from({ length: MAX_APPLICATIONS }, (_, i) => (
          <div
            key={i}
            className={`h-2 w-8 rounded-full ${i < 3 ? 'bg-slate-900' : 'bg-slate-300'}`}
          />
        ))}
      </div>
      <p>3 out of {MAX_APPLICATIONS}</p>
    </section>
  );
}
