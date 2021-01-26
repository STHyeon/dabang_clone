import React from 'react';
import { Meta } from '@storybook/react';
import { FormInput, FormInputProps } from './index';

export default {
    title: 'Molecules/FormInput'
} as Meta;

export const general = (args: FormInputProps) => <FormInput {...args} />;
general.args = {
    htmlFor: 'aaa',
    children: '이메일',
    disabled: false,
    required: false,
    invalid: false,
    captionContent: '에러',
    placeholder: '이메일을 입력해 주세요.',
    inputTitle: 'dddddd',
    buttonContent: ''
};
