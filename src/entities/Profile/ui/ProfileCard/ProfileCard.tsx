import { useTranslation } from 'react-i18next';
import { Currency, CurrencySelect } from 'entities/Currency';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { CountrySelect, Country } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
        data,
        isLoading,
        error,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
        readonly,
    } = props;

    if (isLoading) {
        return (
            <HStack
                justify='center'
                max
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                justify='center'
                max
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка')}
                    text={t('Перезагрузите страницу')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack
            gap='8'
            max
            className={classNames(cls.ProfileCard, mods, [className])}
        >
            {data?.avatar && (
                <HStack justify='center' max className={cls.avatarWrapper}>
                    <Avatar src={data.avatar} />
                </HStack>
            )}

            <Input
                readonly={readonly}
                onChange={onChangeFirstname}
                className={cls.input}
                value={data?.first}
                placeholder={t('Ваше имя')}
            />
            <Input
                readonly={readonly}
                onChange={onChangeLastname}
                className={cls.input}
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
            />
            <Input
                readonly={readonly}
                onChange={onChangeAge}
                className={cls.input}
                value={data?.age}
                placeholder={t('Возраст')}
            />
            <Input
                readonly={readonly}
                onChange={onChangeCity}
                className={cls.input}
                value={data?.city}
                placeholder={t('Город')}
            />
            <Input
                readonly={readonly}
                onChange={onChangeUsername}
                className={cls.input}
                value={data?.username}
                placeholder={t('Имя пользователя')}
            />
            <Input
                readonly={readonly}
                onChange={onChangeAvatar}
                className={cls.input}
                value={data?.avatar}
                placeholder={t('Ссылка на аватар')}
            />
            <CurrencySelect
                className={cls.input}
                readonly={readonly}
                value={data?.currency}
                onChange={onChangeCurrency}
            />
            <CountrySelect
                className={cls.input}
                readonly={readonly}
                value={data?.country}
                onChange={onChangeCountry}
            />
        </VStack>
    );
};
