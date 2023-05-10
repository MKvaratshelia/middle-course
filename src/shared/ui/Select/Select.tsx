import { ChangeEvent, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { typedMemo } from '@/shared/const/typedMemo';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

// export const Select = <T extends string>(props: SelectProps<T>) => {
export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
    const { className, label, options, value, onChange, readonly } = props;
    const mods: Mods = {};

    const optionsList = useMemo(() => {
        return options?.map((opt) => {
            return (
                <option
                    key={opt.value}
                    className={cls.option}
                    value={opt.value}
                >
                    {opt.content}
                </option>
            );
        });
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                disabled={readonly}
                onChange={onChangeHandler}
                value={value}
                className={cls.select}
            >
                {optionsList}
            </select>
        </div>
    );
});
