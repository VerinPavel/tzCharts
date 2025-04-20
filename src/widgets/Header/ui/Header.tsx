import styles from './Header.module.scss';

import { NavLink } from '@/shared/ui/NavLink/NavLink';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/dashboard">Погода</NavLink>
        <NavLink to="/cabinet">Личный кабинет</NavLink>
      </nav>
    </header>
  );
};

export { Header };
