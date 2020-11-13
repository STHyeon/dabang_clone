import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ImgBtn, ImgBtnProps } from './index';
import TestImg from 'assets/images/test.png';

export default {
    title: 'Molecules/ImgBtn',
    component: ImgBtn
} as Meta;

const Template: Story<ImgBtnProps> = (args) => <ImgBtn {...args} />;

export const general = Template.bind({});
general.args = {
    src: `${TestImg}`,
    alt: 'test',
    styletype: 'transparent'
};
