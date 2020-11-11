import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormInput, FormInputProps } from './index';

export default {
    title: 'Molecules/FormInput'
} as Meta;

const Template: Story<FormInputProps> = (args) => <FormInput {...args} />;

export const general = Template.bind({});
general.args = {
    inputName: '이메일',
    required: false,
    invalid: false,
    disabled: false,
    placeholder: '이메일을 입력해 주세요.',
    captionContent: '에러'
};
