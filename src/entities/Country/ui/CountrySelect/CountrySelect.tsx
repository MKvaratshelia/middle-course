import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select } from '@/shared/ui/Select';
// import { ListBox } from 'shared/ui/ListBox/ListBox';
import { ListBox } from '@/shared/ui/Popups';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(
    ({
 className, value, onChange, readonly, 
}: CountrySelectProps) => {
        const { t } = useTranslation('profile');

        const onhangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange],
        );
        return (
            <ListBox
                onChange={onhangeHandler}
                value={value}
                items={options}
                defaultValue={t('Выберите страну')}
                className={className}
                readonly={readonly}
                label={t('Выберите страну')}
                direction='top right'
            />
        );
    },
);
