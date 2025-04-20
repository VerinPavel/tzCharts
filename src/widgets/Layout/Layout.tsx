import styles from './Layout.module.scss';

import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

export { Layout };
