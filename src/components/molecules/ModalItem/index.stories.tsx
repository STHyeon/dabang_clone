import React from 'react';
import { Meta } from '@storybook/react';

import { LoginModal, RegisterModal, TermModal, ModalItemProps } from './index';

export default {
    title: 'Molecules/ModalItem'
} as Meta;

export const Template1 = (args: ModalItemProps) => <LoginModal {...args} />;

export const Template2 = (args: ModalItemProps) => <RegisterModal {...args} />;

export const Template3 = (args: ModalItemProps) => <TermModal {...args} />;
