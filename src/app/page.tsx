import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Banner from '@/components/ui/banner';

export default function Home() {
  return (
    <main className="my-8 flex w-full flex-col items-center justify-center gap-4">
      <Button>+ Create New</Button>
      <Button size="sm">+ Create New</Button>
      <Button className="w-full">Generate Now</Button>
      <Button className="w-full" disabled>
        Generate Now
      </Button>
      <Button variant="outline" className="w-full">
        <Image
          src="/icons/repeat.svg"
          alt="refresh icon"
          width={24}
          height={24}
        />
        Try Again
      </Button>
      <div className="flex gap-2">
        <Button variant="ghost" size="gh">
          <Image
            src="/icons/trash.svg"
            alt="trash icon"
            width={20}
            height={20}
          />
          Delete
        </Button>
        <Button variant="ghost" size="gh">
          Copy to Clipboard
          <Image src="/icons/copy.svg" alt="copy icon" width={20} height={20} />
        </Button>
      </div>
      <Banner />
    </main>
  );
}
