import { formatMetric } from '@/lib/utils/formatMetric/formatMetric';
import StatisticsCard from './StatisticsCard';
import type { CharacterStatistics } from '@/lib/api/types.ts';

const numberFormatter = new Intl.NumberFormat();

type ResultsSummaryProps = Readonly<{
  total: number;
  stats: CharacterStatistics;
}>;

export default function CharacterStatistics({ total, stats }: ResultsSummaryProps) {
  return (
    <section
      aria-label='Result insights'
      className='mt-6 grid gap-4 rounded-2xl border bg-card/70 p-4 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/60 md:grid-cols-4'>
      <StatisticsCard
        label='Matching characters'
        value={numberFormatter.format(total)}
        helper='Across the whole dataset'
        highlight
      />
      <StatisticsCard
        label='Average height'
        value={formatMetric(stats.averageHeight, 'cm')}
        helper='Based on known values'
      />
      <StatisticsCard
        label='Average mass'
        value={formatMetric(stats.averageMass, 'kg')}
        helper='Based on known values'
      />
      <StatisticsCard
        label='Pilots'
        value={numberFormatter.format(stats.starshipPilots)}
        helper={`${numberFormatter.format(stats.distinctHomeworlds)} unique homeworlds`}
      />
    </section>
  );
}
