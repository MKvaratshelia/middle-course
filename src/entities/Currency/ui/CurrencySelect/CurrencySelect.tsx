import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
// import { ListBox } from 'shared/ui/ListBox/ListBox';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Currency } from '../../model/types/currency';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(
    ({ className, value, onChange, readonly }: CurrencySelectProps) => {
        const { t } = useTranslation('profile');

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange],
        );
        const props = {
            className,
            value,
            defaultValue: t('Укажите валюту'),
            label: t('Укажите валюту'),
            items: options,
            onChange: onChangeHandler,
            readonly,
            // мы говорим тайпскрипту что это константа
            direction: 'top right' as const,
        };
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ListBox {...props} />}
                off={<ListBoxDeprecated {...props} />}
            />
            // <ListBox
            //     onChange={onhangeHandler}
            //     value={value}
            //     items={options}
            //     defaultValue={t('Выберите валюту')}
            //     className={className}
            //     readonly={readonly}
            //     label={t('Выберите валюту')}
            //     direction='top right'
            // />
        );
    },
);
