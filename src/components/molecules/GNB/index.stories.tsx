import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { GNB, GNBProps } from './index';

export default {
    title: 'Molecules/GNB'
} as Meta;

const Template1: Story<GNBProps> = (args) => <GNB {...args} />;
const Template2: Story<GNBProps> = (args) => <GNB {...args} />;
const Template3: Story<GNBProps> = (args) => <GNB {...args} />;

export const AfterBar = Template1.bind({});
AfterBar.args = {
    GNBType: 'type01',
    items: ['a', 'b', 'c', 'd', 'e']
};

export const AfterNone = Template2.bind({});
AfterNone.args = {
    GNBType: 'type02',
    items: ['a', 'b', 'c', 'd', 'e']
};

export const AfterComma = Template3.bind({});
AfterComma.args = {
    GNBType: 'type03',
    items: ['a', 'b', 'c', 'd', 'e']
};
