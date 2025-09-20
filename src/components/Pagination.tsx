import Link from 'next/link';

type PaginationProps = {
  readonly page: number;
  readonly hasPrev: boolean;
  readonly hasNext: boolean;
};

export default function Pagination({ page, hasPrev, hasNext }: PaginationProps) {
  const prev = new URLSearchParams({ page: String(page - 1) }).toString();
  const next = new URLSearchParams({ page: String(page + 1) }).toString();

  return (
    <nav className='mt-6 flex items-center justify-between' aria-label='Pagination'>
      <Link
        href={`/?${prev}`}
        aria-disabled={!hasPrev}
        className={`px-3 py-2 rounded-lg underline-offset-4 focus-visible:outline-none focus-visible:ring-2 ${
          hasPrev ? 'underline' : 'opacity-40 pointer-events-none'
        }`}>
        Previous
      </Link>
      <span aria-live='polite' className='text-sm text-zinc-400'>
        Page {page}
      </span>
      <Link
        href={`/?${next}`}
        aria-disabled={!hasNext}
        className={`px-3 py-2 rounded-lg underline-offset-4 focus-visible:outline-none focus-visible:ring-2 ${
          hasNext ? 'underline' : 'opacity-40 pointer-events-none'
        }`}>
        Next
      </Link>
    </nav>
  );
}
