type FilterSelectProps<T extends string> = {
  id: string;
  label: string;
  name: string;
  options: { value: T; label: string }[];
  defaultValue: T;
};

export default function FilterSelect<T extends string>({
  id,
  label,
  name,
  options,
  defaultValue,
}: Readonly<FilterSelectProps<T>>) {
  return (
    <label className='flex flex-col gap-2 text-sm font-medium text-muted-foreground' htmlFor={id}>
      {label}
      <select
        id={id}
        name={name}
        defaultValue={defaultValue}
        className='h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm font-normal text-foreground shadow-xs outline-none transition focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
