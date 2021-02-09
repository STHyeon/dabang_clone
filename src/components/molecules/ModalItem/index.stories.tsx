import React from 'react';
import { Meta } from '@storybook/react';

import { LoginItemModal, RegisterItemModal, TermItemModal, ModalItemProps } from './index';

export default {
    title: 'Molecules/ModalItem'
} as Meta;

export const Template1 = (args: ModalItemProps) => <LoginItemModal {...args} />;

export const Template2 = (args: ModalItemProps) => <RegisterItemModal {...args} />;

export const Template3 = (args: ModalItemProps) => <TermItemModal {...args} />;
