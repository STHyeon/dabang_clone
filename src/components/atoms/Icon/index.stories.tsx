import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Icon, IconProps } from './index';
import LogoSvg from 'assets/images/logo.svg';

export default {
    title: 'Atoms/Icon'
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const general = Template.bind({});
general.args = {
    src: LogoSvg,
    alt: '로고',
    height: '2rem'
};
