import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Card1, Card2, Card3, Card4, CardProps } from './index';

export default {
    title: 'Molecules/Card',
    component: Card2
} as Meta;

const Now = new Date();
const Template1: Story<CardProps> = (args) => <Card1 {...args} />;
const Template2: Story<CardProps> = (args) => <Card2 {...args} />;
const Template3: Story<CardProps> = (args) => <Card3 {...args} />;
const Template4: Story<CardProps> = (args) => <Card4 {...args} />;

export const Main = Template1.bind({});
Main.args = {
    chkDate: Now
};

export const Detail1 = Template2.bind({});
Detail1.args = {
    chkDate: Now
};

export const Detail2 = Template3.bind({});
Detail2.args = {
    chkDate: Now
};

export const SimpleCard = Template4.bind({});
SimpleCard.args = {
    to: '',
    description1: '',
    description2: ''
};
