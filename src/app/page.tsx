import Link from "next/link";



export default function Home() {
  return (
<div>
  <div>
    <Link href="/scale">Scale</Link>
    <Link href="/reliability">Reliability</Link>
    <Link href="/performance">Performance</Link>
  </div>
  Home Page
</div>
  );
}
