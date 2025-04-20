import { LineChartCustom } from '@/widgets/Chart/ui/LineChart';
import { Histogram } from '@/widgets/Chart/ui/Histogram';
import { AverageChart } from '@/widgets/Chart/ui/AverageChart';

import { mockData, monthOrder } from '../api/mockAPI';
import { MonthFilter } from '@/features/MonthFilter';
import { useFilterChartData } from '@/shared/lib/hooks/useFilterChartData';
import { ChartSwitcher } from '@/features/ChartSwitcher/ui/ChartSwitcher';
import { ChartSkeleton } from '@/shared/ui/ChartSkeleton/ChartSkeleton';

import { useChartState } from '@/shared/lib/hooks/useChartState';
import { useLoadingEffect } from '@/shared/lib/hooks/useLoadingTimer';

const Chart: React.FC = () => {
  const {
    startMonth,
    setStartMonth,
    endMonth,
    setEndMonth,
    selectedChart,
    handleChartChange,
  } = useChartState();

  const loading = useLoadingEffect(selectedChart);

  const filteredData = useFilterChartData(
    mockData,
    startMonth,
    endMonth,
    monthOrder,
  );

  return (
    <>
      <MonthFilter
        startMonth={startMonth}
        endMonth={endMonth}
        monthOrder={monthOrder}
        setStartMonth={setStartMonth}
        setEndMonth={setEndMonth}
      />

      <ChartSwitcher
        selectedChart={selectedChart}
        onChartChange={handleChartChange}
      />

      {loading ? (
        <ChartSkeleton />
      ) : (
        <>
          {selectedChart === 'line' && <LineChartCustom data={filteredData} />}
          {selectedChart === 'histogram' && <Histogram data={filteredData} />}
          {selectedChart === 'average' && <AverageChart data={filteredData} />}
        </>
      )}
    </>
  );
};

export { Chart };
