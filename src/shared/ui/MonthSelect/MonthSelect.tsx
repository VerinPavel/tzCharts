import styles from './MonthSelect.module.scss';

const MonthSelect: React.FC<{
  label: string;
  value: string;
  onChange: (month: string) => void;
  monthOrder: string[];
}> = ({ label, value, onChange, monthOrder }) => (
  <label className={styles.label}>
    {label}
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.select}
    >
      {monthOrder.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </select>
  </label>
);

export { MonthSelect };
