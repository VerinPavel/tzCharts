import styles from './MonthFilter.module.scss';

import { useCallback } from 'react';
import { MonthSelect } from '@/shared/ui/MonthSelect/MonthSelect';

interface MonthFilterProps {
  startMonth: string;
  endMonth: string;
  monthOrder: string[];
  setStartMonth: (month: string) => void;
  setEndMonth: (month: string) => void;
}

const MonthFilter: React.FC<MonthFilterProps> = ({
  startMonth,
  endMonth,
  monthOrder,
  setStartMonth,
  setEndMonth,
}) => {
  // Использую useCallback для предотвращения лишних перерендеров
  const handleStartMonthChange = useCallback(
    (month: string) => setStartMonth(month),
    [setStartMonth],
  );

  const handleEndMonthChange = useCallback(
    (month: string) => setEndMonth(month),
    [setEndMonth],
  );

  return (
    <div className={styles.container}>
      <MonthSelect
        label="От:"
        value={startMonth}
        onChange={handleStartMonthChange}
        monthOrder={monthOrder}
      />
      <MonthSelect
        label="До:"
        value={endMonth}
        onChange={handleEndMonthChange}
        monthOrder={monthOrder}
      />
    </div>
  );
};

export { MonthFilter };
