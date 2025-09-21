'use client';

import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

type SearchBarProps = Omit<ComponentPropsWithoutRef<'input'>, 'type'> & {
  containerClassName?: string;
};

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      containerClassName = '',
      className = '',
      id = 'query',
      placeholder = 'Find characters by name, e.g. Luke Skywalker',
      ...rest
    },
    ref,
  ) => {
    return (
      <div className={`flex flex-col gap-2 ${containerClassName}`}>
        <label htmlFor={id} className='text-sm font-medium text-muted-foreground'>
          Search characters
        </label>

        <div className='relative'>
          <Search
            className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground'
            aria-hidden='true'
          />
          <Input
            id={id}
            ref={ref}
            type='search'
            placeholder={placeholder}
            autoComplete='off'
            className={`pl-9 ${className}`}
            {...rest}
          />
        </div>

        <p className='mt-1 text-xs text-muted-foreground'>
          Tip: press <kbd className='rounded border px-1 py-0.5 text-[0.75rem]'>/</kbd> to focus the
          search field.
        </p>
      </div>
    );
  },
);

SearchBar.displayName = 'SearchBar';

export default SearchBar;
