import React from 'react';
import { Meta } from '@storybook/react';

import { Icon, IconProps } from './index';

export default {
    title: 'Atoms/Icon'
} as Meta;

export const general = (args: IconProps) => <Icon {...args} />;
general.args = {
    iconType: 'fas',
    iconTitle: 'chevron-right',
    iconSize: '24px'
};
