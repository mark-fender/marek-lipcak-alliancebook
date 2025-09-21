import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-white text-center text-zinc-900 px-4'>
      <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>404</h1>
      <p className='mt-4 text-xl sm:text-2xl'>These are not the droids you are looking for.</p>
      <Link
        href='/'
        className='mt-6 rounded-lg bg-black px-4 py-2 text-white font-medium shadow hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-black'>
        Return to base
      </Link>
    </main>
  );
}
