'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Undo2 } from 'lucide-react';

import SearchBar from '@/components/SearchBar';

import { Button } from '@/components/ui/button';
import { isFormField } from '@/lib/utils/isFormField';
import FilterSelect from './FilterSelect';
import { CharacterFilters } from '@/types/FilterTypes';
import { GENDER_OPTIONS, STARSHIP_OPTIONS, SORT_OPTIONS } from '@/lib/const';

type FiltersProps = Readonly<{
  query: string;
  filters: CharacterFilters;
}>;

export default function Filters({ query, filters }: Readonly<FiltersProps>) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== '/') return;
      if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;

      const target = event.target as HTMLElement | null;
      if (target && isFormField(target)) return;

      event.preventDefault();
      searchInputRef.current?.focus();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleReset = () => {
    const formEl = formRef.current;

    if (formEl) {
      formEl.reset();

      const genderEl = formEl.querySelector<HTMLSelectElement>('#gender');
      const starshipEl = formEl.querySelector<HTMLSelectElement>('#starship');
      const sortEl = formEl.querySelector<HTMLSelectElement>('#sort');

      if (genderEl) genderEl.value = GENDER_OPTIONS[0].value;
      if (starshipEl) starshipEl.value = STARSHIP_OPTIONS[0].value;
      if (sortEl) sortEl.value = SORT_OPTIONS[0].value;
    }

    router.push(
      `/?query=&gender=${GENDER_OPTIONS[0].value}&starship=${STARSHIP_OPTIONS[0].value}&sort=${SORT_OPTIONS[0].value}`,
    );
  };

  return (
    <section aria-label='Filters' className='w-full mt-4 px-4 sm:px-0'>
      <form
        ref={formRef}
        method='get'
        role='search'
        className='flex flex-col gap-6 rounded-2xl border bg-card/80 p-4 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/60'>
        <input type='hidden' name='page' value='1' />

        <SearchBar ref={searchInputRef} name='query' defaultValue={query} />

        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          <FilterSelect
            id='gender'
            label='Gender'
            name='gender'
            options={GENDER_OPTIONS}
            defaultValue={filters.gender}
          />
          <FilterSelect
            id='starship'
            label='Starships'
            name='starship'
            options={STARSHIP_OPTIONS}
            defaultValue={filters.starship}
          />
          <FilterSelect
            id='sort'
            label='Sort'
            name='sort'
            options={SORT_OPTIONS}
            defaultValue={filters.sort}
          />
        </div>

        <div className='flex justify-end gap-2'>
          <Button type='button' variant='ghost' onClick={handleReset} className='text-sm'>
            <Undo2 className='size-4' aria-hidden='true' />
            Reset
          </Button>
          <Button type='submit' className='sm:w-auto'>
            Apply filters
          </Button>
        </div>
      </form>
    </section>
  );
}
