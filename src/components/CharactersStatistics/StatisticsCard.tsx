type StatCardProps = Readonly<{
  label: string;
  value: string;
  helper: string;
  highlight?: boolean;
}>;

export default function StatisticsCard({ label, value, helper, highlight }: StatCardProps) {
  return (
    <div className='flex flex-col gap-2 rounded-xl border border-border/60 bg-background/80 p-4 shadow-inner transition hover:-translate-y-0.5 hover:shadow-md focus-within:outline focus-within:outline-ring/30'>
      <span className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
        {label}
      </span>
      <span
        aria-live='polite'
        className={`text-2xl font-semibold tracking-tight ${
          highlight ? 'text-primary' : 'text-foreground'
        }`}>
        {value}
      </span>
      <span className='text-xs text-muted-foreground'>{helper}</span>
    </div>
  );
}
