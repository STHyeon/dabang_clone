import React from 'react';
import { Meta } from '@storybook/react';

import { Label, LabelProps } from './index';

export default {
    title: 'Atoms/Label'
} as Meta;

export const general = (args: LabelProps) => <Label {...args} />;
general.args = {
    children: '라벨',
    required: false,
    htmlFor: 'ex'
};
