import { LinkButton } from '@/components/ui/button';

export default function Home() {
  return <div className="flex flex-col items-center justify-center h-full gap-2">
    <h1>Start new quest</h1>
    <LinkButton href={'/quest'} label={"Begin"}/>
    </div>;
}
