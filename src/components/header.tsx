import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8 ">
        <Link href="/" className="hover:underline font-bold ">
          Home
        </Link>
        <div className="space-x-4  text-l">
          <Link href="/scale" className="hover:underline">
            Scale
          </Link>
          <Link href="/reliability" className="hover:underline">
            Reliability
          </Link>
          <Link href="/performance" className="hover:underline">
            Performance
          </Link>
        </div>
      </nav>
    </div>
  );
}

