import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SearchMap } from './index';

export default {
    title: 'Organisms / SearchMap'
} as Meta;

const Template: Story = (args) => <SearchMap {...args} />;

export const general = Template.bind({});
