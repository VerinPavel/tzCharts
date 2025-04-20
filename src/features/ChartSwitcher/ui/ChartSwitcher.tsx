import styles from './ChartSwitcher.module.scss';

import { Button } from '@/shared/ui/Button/Button';

interface ChartSwitcherProps {
  selectedChart: 'line' | 'histogram' | 'average';
  onChartChange: (chartType: 'line' | 'histogram' | 'average') => void;
}

const ChartSwitcher: React.FC<ChartSwitcherProps> = ({
  selectedChart,
  onChartChange,
}) => {
  const isSelected = (chartType: 'line' | 'histogram' | 'average') =>
    selectedChart === chartType;

  return (
    <div className={styles.chartSwitcher}>
      <Button
        onClick={() => onChartChange('line')}
        disabled={isSelected('line')}
      >
        Линейный график
      </Button>

      <Button
        onClick={() => onChartChange('histogram')}
        disabled={isSelected('histogram')}
      >
        Гистограмма
      </Button>

      <Button
        onClick={() => onChartChange('average')}
        disabled={isSelected('average')}
      >
        Среднее значение
      </Button>
    </div>
  );
};

export { ChartSwitcher };
