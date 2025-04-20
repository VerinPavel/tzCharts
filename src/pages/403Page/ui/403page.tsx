import styles from './403page.module.scss';

import { NavLink } from '@/shared/ui/NavLink/NavLink';
import { Button } from '@/shared/ui/Button/Button';

const ForbiddenPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>403</h1>
      <p className={styles.message}>У вас нет доступа к этой странице.</p>
      <NavLink
        to="/login"
        children={<Button children="Вернуться на страницу входа" />}
      />
    </div>
  );
};

export { ForbiddenPage };
