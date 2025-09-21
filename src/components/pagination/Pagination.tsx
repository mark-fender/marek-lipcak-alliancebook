import { ChevronLeft, ChevronRight } from 'lucide-react';
import PaginationLink from './PaginationLink';
import { buildHref } from '@/lib/utils/buildHref/buildHref';

type PaginationProps = Readonly<{
  page: number;
  pageCount: number;
  total: number;
  searchParams: Record<string, string>;
}>;

export default function Pagination({ page, pageCount, total, searchParams }: PaginationProps) {
  if (total === 0) {
    return null;
  }

  const hasPrev = page > 1;
  const hasNext = pageCount > page;

  const previousHref = buildHref(page - 1, searchParams);
  const nextHref = buildHref(page + 1, searchParams);

  return (
    <nav
      className='mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row'
      aria-label='Pagination'>
      <PaginationLink href={previousHref} disabled={!hasPrev} rel='prev'>
        <ChevronLeft className='size-4' aria-hidden='true' />
        Previous
      </PaginationLink>

      <span aria-live='polite' className='text-sm text-muted-foreground'>
        Page <strong>{page}</strong>
        {pageCount > 0 && (
          <>
            {' '}
            of <strong>{pageCount}</strong>
          </>
        )}
      </span>

      <PaginationLink href={nextHref} disabled={!hasNext} rel='next'>
        Next
        <ChevronRight className='size-4' aria-hidden='true' />
      </PaginationLink>
    </nav>
  );
}
