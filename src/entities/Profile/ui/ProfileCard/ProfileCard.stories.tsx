import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        lastname: 'Kva',
        age: 32,
        country: Country.Russia,
        first: 'dsg',
        city: 'dsg',
        currency: Currency.EUR,
        avatar,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'Ошибка',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
