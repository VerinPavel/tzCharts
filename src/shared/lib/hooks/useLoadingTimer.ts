// Хук для имитации загрузки при изменении выбранного графика

import { useState, useEffect } from 'react';

const useLoadingEffect = (dependency: string) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [dependency]);

  return loading;
};

export { useLoadingEffect };
