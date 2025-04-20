import styles from './404page.module.scss';

import { NavLink } from '@/shared/ui/NavLink/NavLink';
import { Button } from '@/shared/ui/Button/Button';

import { getFromStorage } from '@/shared/lib/store';

const NotFoundPage: React.FC = () => {
  const user = getFromStorage('auth');

  const isAuthenticated = Boolean(user);

  const targetPath = isAuthenticated ? '/dashboard' : '/login';
  const buttonText = isAuthenticated
    ? 'Вернуться на страницу Графиков'
    : 'Вернуться на страницу Входа';

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Страница не найдена</p>
      <NavLink to={targetPath}>
        <Button children={buttonText} />
      </NavLink>
    </div>
  );
};

export { NotFoundPage };
