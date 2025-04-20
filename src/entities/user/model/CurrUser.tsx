import { getFromStorage } from '@/shared/lib/store';

const getCurrentUser = () => getFromStorage('auth');
export { getCurrentUser };
