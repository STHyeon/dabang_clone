import React from 'react';
import { Meta } from '@storybook/react';

import { Img, ImgProps } from './index';
import LogoSvg from 'assets/images/logo.svg';

export default {
    title: 'Atoms/Img'
} as Meta;

export const general = (args: ImgProps) => <Img {...args} />;
general.args = {
    src: LogoSvg,
    alt: '로고'
};
