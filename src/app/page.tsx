import { LinkButton } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="h-full flex items-center justify-center">
      <LinkButton href={'/quest'} label={"Begin quest"} size="xl" />
    </div>
  )
}
