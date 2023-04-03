import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

// делаем стейт, в функцию передаем стейт возвращает строку error
describe('getProfileData.test', () => {
    test('should return error', () => {
        const data = {
            username: 'admin',
            lastname: 'Kva',
            age: 32,
            country: Country.Russia,
            first: 'dsg',
            city: 'dsg',
            currency: Currency.EUR,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
