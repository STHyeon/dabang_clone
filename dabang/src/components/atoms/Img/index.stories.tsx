import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Img, ImgProps } from './index';
import LogoSvg from 'assets/images/logo.svg';

export default {
    title: 'Atoms/Img'
} as Meta;

const Template: Story<ImgProps> = (args) => <Img {...args} />;

export const general = Template.bind({});
general.args = {
    src: LogoSvg,
    alt: '로고'
};
