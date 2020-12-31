import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Modal, ModalProps } from './index';

export default {
    title: 'Molecules/Modal',
    component: Modal
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const general = Template.bind({});
general.args = {};
