'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useRef, useEffect, useState } from 'react';

type SearchBarProps = { readonly initialQuery?: string };

export default function SearchBar({ initialQuery = '' }: SearchBarProps) {
  const router = useRouter();
  const params = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onSlash = (e: KeyboardEvent) => {
      if (e.key === '/' && !(e.target instanceof HTMLInputElement)) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onSlash);
    return () => window.removeEventListener('keydown', onSlash);
  }, []);

  const submit = (value: string) => {
    const searchParams = new URLSearchParams(params);
    if (value) {
      searchParams.set('q', value);
    } else {
      searchParams.delete('q');
    }
    searchParams.delete('page');
    router.push(`/?${searchParams.toString()}`);
  };

  const handleInputChange = (value: string) => {
    if (searchTimeout) clearTimeout(searchTimeout);
    setSearchTimeout(
      setTimeout(() => {
        submit(value);
      }, 300),
    );
  };

  return (
    <label className='block w-full md:w-80 mx-auto mb-6 mt-8' aria-label='Search characters'>
      <span id='search-label' className='sr-only'>
        Search for characters
      </span>
      <input
        ref={inputRef}
        defaultValue={initialQuery}
        onKeyDown={(e) => {
          if (e.key === 'Enter') submit((e.target as HTMLInputElement).value);
        }}
        onBlur={(e) => submit(e.currentTarget.value)}
        onChange={(e) => handleInputChange(e.currentTarget.value)}
        placeholder='Search (press / to focus)'
        className='w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50'
        aria-labelledby='search-label'
      />
    </label>
  );
}
