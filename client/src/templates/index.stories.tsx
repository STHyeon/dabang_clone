import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { BaseTemplate, BaseProps } from './index';

export default {
    title: 'Templates/Base'
} as Meta;

const Template: Story<BaseProps> = (args) => <BaseTemplate {...args} />;

export const general = Template.bind({});
general.args = {
    children: <h1>aa</h1>
};
