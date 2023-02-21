import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from '../../types/counterSchema';
import { getCounter } from '../getCounter/getCounter';

// с помощью функции createselector идет в пакете тулкит получаем состояние
export const getCounterValue = createSelector(
    // мемоизирует значения
    getCounter,
    // значение мы получим внутри компонента через useselector
    (counter: CounterSchema) => counter.value,
);
