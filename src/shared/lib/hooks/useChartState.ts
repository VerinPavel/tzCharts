import { useState } from 'react';

const useChartState = () => {
  const [startMonth, setStartMonth] = useState<string>('Jan');
  const [endMonth, setEndMonth] = useState<string>('Dec');
  const [selectedChart, setSelectedChart] = useState<
    'line' | 'histogram' | 'average'
  >('line');

  // Обработчик изменения типа графика
  const handleChartChange = (chartType: 'line' | 'histogram' | 'average') => {
    if (chartType === selectedChart) return null;
    setSelectedChart(chartType);
  };

  return {
    startMonth,
    setStartMonth,
    endMonth,
    setEndMonth,
    selectedChart,
    setSelectedChart,
    handleChartChange,
  };
};

export { useChartState };
