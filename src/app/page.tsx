import Image from "next/image";
import Counter from "./components/Counter";

export default function Home() {
  return (
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans ">
      <main className="flex max-h-screen w-full max-w-3xl flex-col items-center justify-between py-2 px-16 bg-white  sm:items-start">
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-600">
            Hello there{" "}
            </p>
          <Counter />
        </div>
      </main>
  //  </div>
  );
}
