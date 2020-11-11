import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Card1, Card2, Card3, Card4, CardProps } from './index';

export default {
    title: 'Molecules/Card'
} as Meta;

const Now = new Date();
const Template1: Story<CardProps> = (args) => <Card1 {...args} />;
const Template2: Story<CardProps> = (args) => <Card2 {...args} />;
const Template3: Story<CardProps> = (args) => <Card3 {...args} />;
const Template4: Story<CardProps> = (args) => <Card4 {...args} />;

export const Main = Template1.bind({});
Main.args = {
    to: '/',
    title: 'test',
    chkDate: Now
};

export const Detail1 = Template2.bind({});
Detail1.args = {
    title: 'test',
    FlagValid: true,
    Flag: '플러스',
    room: '오피스텔',
    roomInfo: '래미안',
    to: '/',
    imgSrc: '',
    description1: '반지층, 라라라',
    description2: '밥밥지지츠츠',
    chkDate: Now
};

export const Detail2 = Template3.bind({});
Detail2.args = {
    to: '',
    title: '강변',
    room: '오피스텔',
    roomInfo: '510세대',
    description1: 'ㅁㅁㅁㅁ',
    ableRoom: 4,
    complexData: true,
    chkDate: Now
};

export const Detail3 = Template4.bind({});
Detail3.args = {
    to: '/',
    description1: '보증금',
    description2: '5억'
};
