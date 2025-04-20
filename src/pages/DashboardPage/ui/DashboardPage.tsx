import { Chart } from '@/widgets/Chart/ui/Chart';
import { DoubleChartY } from '@/entities/DoubleChartY';

const DashboardPage = () => {
  return (
    <div style={{ height: '500px', padding: '24px', textAlign: 'center' }}>
      <Chart />
      <DoubleChartY />
    </div>
  );
};

export { DashboardPage };
