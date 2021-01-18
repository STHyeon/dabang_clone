import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Label, LabelProps } from './index';

export default {
    title: 'Atoms/Label'
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const general = Template.bind({});
general.args = {
    children: '이메일',
    required: false
};
