import { formatMetric } from './formatMetric';

describe('formatMetric', () => {
  it('should return the formatted value with the unit', () => {
    expect(formatMetric(123.45, 'cm')).toBe('123 cm');
  });

  it('should round the value to the nearest integer', () => {
    expect(formatMetric(123.56, 'kg')).toBe('124 kg');
    expect(formatMetric(123.4, 'kg')).toBe('123 kg');
  });

  it('should return "—" when the value is null', () => {
    expect(formatMetric(null, 'cm')).toBe('—');
  });

  it('should handle zero as a valid value', () => {
    expect(formatMetric(0, 'm')).toBe('0 m');
  });

  it('should handle negative values correctly', () => {
    expect(formatMetric(-123.45, 'kg')).toBe('-123 kg');
  });
});
