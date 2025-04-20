import styles from './LK.module.scss';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getFromStorage } from '@/shared/lib/store';
import { Button } from '@/shared/ui/Button/Button';

const LK: React.FC = () => {
  const [user, setUser] = useState<{ email: string; password: string } | null>(
    getFromStorage('auth'),
  );
  const navigate = useNavigate();

  const handleClearData = () => {
    localStorage.removeItem('auth');
    setUser(null);
    navigate('/login');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2>Личный кабинет</h2>
        <p>
          <strong>Почта:</strong> {user?.email}
        </p>
        <Button onClick={handleClearData}>Выйти из аккаунта</Button>
      </div>
    </div>
  );
};

export { LK };
