import styles from './ChartSkeleton.module.scss';

const ChartSkeleton: React.FC = () => (
  <div className={styles.chartSkeleton}>
    <div className={styles.dotsWrapper}>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
    </div>
  </div>
);

export { ChartSkeleton };
