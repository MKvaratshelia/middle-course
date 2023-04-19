import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    items: [
        { value: 'dsg', content: 'dsg' },
        { value: 'dsg', content: 'dsg' },
    ],
    label: '235325',
    value: '235',
};
export const DirectionTop = Template.bind({});
DirectionTop.args = {
    items: [
        { value: 'dsg', content: 'dsg' },
        { value: 'dsg', content: 'dsg' },
    ],
    label: '235325',
    value: '235',
    direction: 'top',
};
export const readonly = Template.bind({});
readonly.args = {
    items: [
        { value: 'dsg', content: 'dsg' },
        { value: 'dsg', content: 'dsg' },
    ],
    label: '235325',
    value: '235',
    readonly: true,
};
