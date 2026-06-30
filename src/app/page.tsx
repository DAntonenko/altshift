import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Card from '@/components/ui/card';
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
      <Card
        id="970e1d8d-0d81-4fb1-9e74-ecde171d7c27"
        applicationText="Dear Hiring Manager, I am writing to express my interest in the Software Engineer position at your esteemed company. With a strong background in software development and a passion for creating innovative solutions, I am confident in my ability to contribute effectively to your team. My experience includes developing web applications using modern frameworks, collaborating with cross-functional teams, and implementing best practices in coding and testing. I am eager to bring my skills and enthusiasm to your organization and help drive successful project outcomes. Thank you for considering my application. I look forward to the opportunity to discuss how my qualifications align with your needs."
      />
      <Banner />
    </main>
  );
}
