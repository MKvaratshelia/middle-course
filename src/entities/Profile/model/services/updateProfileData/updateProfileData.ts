import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

import { Profile } from '../../types/profile';

// создаем асинхронную функцию потом передадим ее в slice
export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>('profile/updateProfileData', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    // получаю селектор (данные)
    // в компонентах это useSelector
    const formData = getProfileForm(getState());

    try {
        const response = await extra.api.put<Profile>('/profile', formData);

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
