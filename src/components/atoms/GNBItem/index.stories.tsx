import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { GNBItem, GNBItemProps } from './index';

export default {
    title: 'Atoms/GNBItem',
    component: GNBItem
} as Meta;

const Template: Story<GNBItemProps> = (args) => <GNBItem {...args} />;

export const general = Template.bind({});
general.args = {
    children: '',
    active: false,
    onClick: action('onClick')
};
