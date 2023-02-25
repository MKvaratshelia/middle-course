import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUserNameProps {
    username: string;
    password: string;
}

// создаем асинхронную функцию потом передадим ее в slice
export const loginByUserName = createAsyncThunk<
    User,
    LoginByUserNameProps,
    { rejectValue: string }
>('login/fetchByIdStatus', async (authData, thunkAPI) => {
    try {
        const response = await axios.post<User>(
            'http://localhost:8000/login',
            authData,
        );
        if (!response.data) {
            throw new Error();
        }
        // будем хранить там и понимать авторизован или нет
        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data),
        );
        // toolkit дает возможность вызвать диспач для асинхронных операций
        thunkAPI.dispatch(userActions.setAuthData(response.data));
        return response.data;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue('error');
    }
});
