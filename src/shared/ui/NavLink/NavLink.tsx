import styles from './NavLink.module.scss';

import { Link, useLocation } from 'react-router-dom';

interface AppLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<AppLinkProps> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={`${styles.link} ${isActive ? styles.active : ''}`}>
      {children}
    </Link>
  );
};

export { NavLink };
