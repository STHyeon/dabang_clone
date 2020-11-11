import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { GNBType1, GNBType2, GNBType3, GNBProps } from './index';

export default {
    title: 'Molecules/GNB'
} as Meta;

const Template1: Story<GNBProps> = (args) => <GNBType1 {...args} />;
const Template2: Story<GNBProps> = (args) => <GNBType2 {...args} />;
const Template3: Story<GNBProps> = (args) => <GNBType3 {...args} />;

export const AfterBar = Template1.bind({});
AfterBar.args = {
    items: ['a', 'b', 'c', 'd', 'e']
};

export const AfterNone = Template2.bind({});
AfterNone.args = {
    items: ['a', 'b', 'c', 'd', 'e']
};

export const AfterComma = Template3.bind({});
AfterComma.args = {
    items: ['a', 'b', 'c', 'd', 'e']
};
