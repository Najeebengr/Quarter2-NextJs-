import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-10">
    <Link href={'/dashboard'}>
    Dashboard
    </Link> 
    <Link href={'/blog'}>
    Blog
    </Link>
     <Link href={'/dashboard/settings/'}>
    Settings
    </Link>
     <Link href={'/dashboard/analytics'}>
    Analytics
    </Link> 
     <Link href={'/name'}>
    Name
    </Link> 
    <div>
      <a href="https://github.com/panaverse/learn-nextjs" target="_blank"> Learn NextJs</a>
    </div>
     </main>
  );
}
