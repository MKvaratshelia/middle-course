import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counterSchema';

// файл с экшенами и редюсером
const initialState: CounterSchema = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

// экспортируем экшены и редюсер
export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
