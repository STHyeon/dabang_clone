import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { GNB, GNBProps } from './index';

export default {
    title: 'Molecules/GNB'
} as Meta;

const Template: Story<GNBProps> = (args) => <GNB {...args} />;

export const AfterBar = Template.bind({});
AfterBar.args = {
    GNBType: 'type01',
    items: ['a', 'b', 'c', 'd', 'e']
};

export const AfterNone = Template.bind({});
AfterNone.args = {
    GNBType: 'type02',
    items: ['a', 'b', 'c', 'd', 'e']
};

export const AfterComma = Template.bind({});
AfterComma.args = {
    GNBType: 'type03',
    items: ['a', 'b', 'c', 'd', 'e']
};

export const Default = Template.bind({});
Default.args = {
    GNBType: 'type04',
    items: ['a', 'b', 'c', 'd', 'e']
};
