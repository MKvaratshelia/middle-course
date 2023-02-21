import { StateSchema } from 'app/providers/StoreProvider';

// получаем состояние весь стэйт счетчика но не его значение
// функция которая получает стэйт и возвращает стэйт
export const getCounter = (state: StateSchema) => state.counter;
