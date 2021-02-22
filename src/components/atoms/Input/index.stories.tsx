import React from 'react';
import { Meta } from '@storybook/react';

import { Input, InputProps } from './index';

export default {
    title: 'Atoms/Input'
} as Meta;

export const general = (args: InputProps) => <Input {...args} />;
general.args = {
    description: '예제',
    invalid: false,
    disabled: false,
    placeholder: '입력해주세요.'
};
