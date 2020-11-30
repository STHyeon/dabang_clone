import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Love } from './index';

export default {
    title: 'Page/Love'
} as Meta;

const Template: Story = (args) => <Love {...args} />;

export const general = Template.bind({});
