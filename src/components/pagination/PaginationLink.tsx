import { cn } from '@/lib/utils/cn';
import Link from 'next/link';
import { ReactNode } from 'react';

type PaginationLinkProps = Readonly<{
  href: string;
  disabled: boolean;
  children: ReactNode;
  rel: 'next' | 'prev';
}>;

export default function PaginationLink({ href, disabled, children, rel }: PaginationLinkProps) {
  return (
    <Link
      href={href}
      aria-disabled={disabled}
      rel={disabled ? undefined : rel}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60',
        disabled && 'pointer-events-none opacity-40',
      )}>
      {children}
    </Link>
  );
}
