'use client'
import Link from "next/link"
import About from "../about/page";
import AboutButton from "./aboutbutton";
import { useRouter } from "next/navigation";


export default function Nav() {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-center gap-6 p-6 bg-blue-100">
      {/* <Link 
        href="/" 
        className="text-base font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        Home
      </Link>
      <Link 
        href="/about" 
        className="text-base font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        About
      </Link> */}
      
      <button onClick={() => router.push("/")} className="px-4 py-2 bg-blue-400 text-base font-medium text-zinc-900 rounded transition-colors hover:bg-yellow-500">
        Home</button>
        <button onClick={() => router.push("/about")} className="px-4 py-2 bg-blue-400 text-base font-medium text-zinc-900 rounded transition-colors hover:bg-yellow-500 ">
          About</button>  
     
    </nav>
  );
}