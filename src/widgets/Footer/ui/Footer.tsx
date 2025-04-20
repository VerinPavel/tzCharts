import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>Тестовое задание</p>
      <p>Исполнитель: Верин Павел</p>
      <p>&copy;2025</p>
    </footer>
  );
};

export { Footer };
