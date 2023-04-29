import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/providers/StoreProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();

// кастомный хук для типизации, будем использовать вместо обычного useDispatch
