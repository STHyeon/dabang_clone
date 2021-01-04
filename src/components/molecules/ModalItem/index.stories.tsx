import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { LoginModal, RegisterModal, TermModal, ModalItemProps } from './index';

export default {
    title: 'Molecules/ModalItem'
} as Meta;

const Template1: Story<ModalItemProps> = (args) => <LoginModal {...args} />;
export const Login = Template1.bind({});
Login.args = {};

const Template2: Story<ModalItemProps> = (args) => <RegisterModal {...args} />;
export const Register = Template2.bind({});
Register.args = {};

const Template3: Story<ModalItemProps> = (args) => <TermModal {...args} />;
export const Term = Template3.bind({});
Term.args = {};
