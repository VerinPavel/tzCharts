import styles from './LoginForm.module.scss';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../model/useAuth';
import { Button } from '@/shared/ui/Button/Button';

const LoginForm = () => {
  const { login, error } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      navigate('/dashboard');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
      />
      {error && <p className={styles.error}>{error}</p>}

      <Button children="Login" type="submit" />
    </form>
  );
};

export { LoginForm };
