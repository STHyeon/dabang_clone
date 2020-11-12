import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormInput, FormInputProps } from './index';

export default {
    title: 'Molecules/FormInput'
} as Meta;

const Template1: Story<FormInputProps> = (args) => <FormInput {...args} />;
const Template2: Story<FormInputProps> = (args) => <FormInput {...args} />;

export const general = Template1.bind({});
general.args = {
    selectType: 'type01',
    labelName: '이메일',
    required: false,
    invalid: false,
    disabled: false,
    placeholder: '이메일을 입력해 주세요.',
    captionContent: '에러'
};

export const include_btn = Template2.bind({});
include_btn.args = {
    selectType: 'type02',
    labelName: '',
    required: false,
    bgIcon: false,
    invalid: false,
    disabled: false,
    placeholder: '이메일을 입력해 주세요.',
    src: '',
    alt: '',
    styletype: 'secondary',
    captionContent: '',
    btnText: 'a'
};
