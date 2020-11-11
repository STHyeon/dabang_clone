import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ImgBtn, ImgBtnProps } from './index';

export default {
    title: 'Molecules/ImgBtn',
    component: ImgBtn
} as Meta;

const Template: Story<ImgBtnProps> = (args) => <ImgBtn {...args} />;

export const general = Template.bind({});
