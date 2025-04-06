import Link from 'next/link'
 
export default function Page() {
  return (
    <>
      <h1>Hello Next.js!</h1>
      <Link href="/blog">
        <span className="text-[#2b95f8] underline hover:opacity-80 transition">
          Blog
        </span>
      </Link>
    </>
  );
}