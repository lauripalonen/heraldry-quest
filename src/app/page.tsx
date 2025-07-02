import { LinkButton } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <LinkButton href={'/quest'} label={"Begin quest"} size="xl" />
    </div>
  )
}
