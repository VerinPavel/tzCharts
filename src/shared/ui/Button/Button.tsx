import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  className = '',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${props.disabled ? styles.disabled : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
