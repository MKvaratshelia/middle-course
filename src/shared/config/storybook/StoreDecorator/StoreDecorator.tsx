import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

// eslint-disable-next-line operator-linebreak
export const StoreDecorator =
    (state: DeepPartial<StateSchema>) => (StoryComponent: Story) =>
        (
            <StoreProvider initialState={state}>
                <StoryComponent />
            </StoreProvider>
        );
