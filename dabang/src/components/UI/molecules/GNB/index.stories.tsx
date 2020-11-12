import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { GNBType, GNBProps } from './index';

export default {
    title: 'Molecules/GNB'
} as Meta;

const Template1: Story<GNBProps> = (args) => <GNBType {...args} />;
const Template2: Story<GNBProps> = (args) => <GNBType {...args} />;
const Template3: Story<GNBProps> = (args) => <GNBType {...args} />;

export const AfterBar = Template1.bind({});
AfterBar.args = {
    selectType: 'type01',
    items: ['a', 'b', 'c', 'd', 'e']
};

export const AfterNone = Template2.bind({});
AfterNone.args = {
    selectType: 'type02',
    items: ['a', 'b', 'c', 'd', 'e']
};

export const AfterComma = Template3.bind({});
AfterComma.args = {
    selectType: 'type03',
    items: ['a', 'b', 'c', 'd', 'e']
};
