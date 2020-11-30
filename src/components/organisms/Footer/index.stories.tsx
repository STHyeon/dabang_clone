import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Footer } from './index';

export default {
    title: 'Organisms/Footer'
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const general = Template.bind({});
general.args = {
    // children: <h1>aa</h1>
};
