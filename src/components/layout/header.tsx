import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MAX_APPLICATIONS } from '@/constants/general';
import Link from 'next/link';

export default function Header() {
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
        3/{MAX_APPLICATIONS} applications generated
        <div className="flex gap-1">
          {Array.from({ length: MAX_APPLICATIONS }, (_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${i < 3 ? 'bg-slate-900' : 'bg-slate-300'}`}
            />
          ))}
        </div>
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
