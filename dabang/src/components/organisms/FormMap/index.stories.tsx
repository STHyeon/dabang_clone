import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FormMap } from './index';

export default {
    title: 'Organisms / SearchMap'
} as Meta;

const Template: Story = (args) => <FormMap {...args} />;

export const general = Template.bind({});
