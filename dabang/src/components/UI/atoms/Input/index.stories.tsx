import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input, InputProps } from './index';

export default {
    title: 'Atoms/Input'
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const general = Template.bind({});
general.args = {
    description: '예제',
    invalid: false,
    disabled: false,
    placeholder: '입력해주세요.'
};
