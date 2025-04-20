import { useState } from 'react';
import { Auth } from './Auth';
import { saveToStorage } from '@/shared/lib/store';

const useAuth = () => {
  const [error, setError] = useState('');

  const login = (email: string, password: string) => {
    const result = Auth.safeParse({ email, password });
    if (!result.success) {
      setError('Неверная почта или пароль (мин 6 символом)');
      return false;
    }
    saveToStorage('auth', { email });
    return true;
  };

  return { error, login };
};

export { useAuth };
