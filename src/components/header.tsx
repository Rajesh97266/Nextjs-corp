import Link from "next/link";

export default function Header() {
  return (
    <div className="flex space-x-4 p-4 bg-gray-800 text-white">
      <Link href="/" className="hover:underline">
        Home
      </Link>
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
  );
}

