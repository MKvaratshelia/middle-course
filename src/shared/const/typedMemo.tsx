import { memo } from 'react';
// типизированный мемо для дженериков
export const typedMemo: <T>(c: T) => T = memo;
