import { MockData } from '@/widgets/Chart/api/mockAPI';
import { useMemo } from 'react';

const useFilterChartData = (
  mockData: MockData[],
  startMonth: string,
  endMonth: string,
  monthOrder: string[],
) => {
  return useMemo(() => {
    const startIndex = monthOrder.indexOf(startMonth);
    const endIndex = monthOrder.indexOf(endMonth);

    if (startIndex === -1 || endIndex === -1 || startIndex > endIndex) {
      return [];
    }

    return mockData.filter((item) => {
      const index = monthOrder.indexOf(item?.name);
      return index >= startIndex && index <= endIndex;
    });
  }, [mockData, startMonth, endMonth, monthOrder]);
};

export { useFilterChartData };
