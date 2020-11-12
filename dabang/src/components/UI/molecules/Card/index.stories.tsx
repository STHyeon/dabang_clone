import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Card, CardProps } from './index';
import TestImg from 'assets/images/test.png';

export default {
    title: 'Molecules/Card'
} as Meta;

const Now = new Date();
const Template1: Story<CardProps> = (args) => <Card {...args} />;
const Template2: Story<CardProps> = (args) => <Card {...args} />;
const Template3: Story<CardProps> = (args) => <Card {...args} />;
const Template4: Story<CardProps> = (args) => <Card {...args} />;

export const Main = Template1.bind({});
Main.args = {
    selectType: 'type01',
    imgSrc: `${TestImg}`,
    to: '/',
    title: 'test',
    chkDate: Now
};

export const Detail1 = Template2.bind({});
Detail1.args = {
    selectType: 'type02',
    title: 'test',
    FlagValid: true,
    Flag: '플러스',
    room: '오피스텔',
    roomInfo: '래미안',
    to: '/',
    imgSrc: `${TestImg}`,
    description1: '반지층, 라라라',
    description2: '밥밥지지츠츠',
    chkDate: Now
};

export const Detail2 = Template3.bind({});
Detail2.args = {
    selectType: 'type03',
    to: '',
    title: '강변',
    room: '오피스텔',
    roomInfo: '510세대',
    description1: 'ㅁㅁㅁㅁ',
    imgSrc: `${TestImg}`,
    ableRoom: 4,
    complexData: true,
    chkDate: Now
};

export const Detail3 = Template4.bind({});
Detail3.args = {
    selectType: 'type04',
    to: '/',
    imgSrc: `${TestImg}`,
    description1: '보증금',
    description2: '5억'
};
