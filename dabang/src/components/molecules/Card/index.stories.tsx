import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Card, CardProps } from './index';
import TestImg from 'assets/images/test.png';

import {
    MORESEECOMPLEXTEXT,
    RECENTLYCOMPLEXTEXT,
    MORESEEROOMTEXT,
    RECENTLYROOMTEXT
} from 'utils/contents/String';

export default {
    title: 'Molecules/Card'
} as Meta;

const Now = new Date();
const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Main = Template.bind({});
Main.args = {
    CardType: 'type01',
    imgSrc: `${TestImg}`,
    to: '/',
    title: 'test',
    chkDate: Now
};

export const Detail1 = Template.bind({});
Detail1.args = {
    CardType: 'type02',
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

export const Detail2 = Template.bind({});
Detail2.args = {
    CardType: 'type03',
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

export const Detail3 = Template.bind({});
Detail3.args = {
    CardType: 'type04',
    to: '/',
    imgSrc: `${TestImg}`,
    description1: '보증금',
    description2: '5억'
};

export const SeeRoom = Template.bind({});
SeeRoom.args = {
    CardType: 'type05',
    to: '',
    title: MORESEEROOMTEXT
};

export const SeeComplex = Template.bind({});
SeeComplex.args = {
    CardType: 'type05',
    to: '',
    title: MORESEECOMPLEXTEXT
};

export const ChkSeeRoom = Template.bind({});
ChkSeeRoom.args = {
    CardType: 'type05',
    to: '/',
    title: RECENTLYROOMTEXT
};

export const ChkSeeComplex = Template.bind({});
ChkSeeComplex.args = {
    CardType: 'type05',
    to: '/',
    title: RECENTLYCOMPLEXTEXT
};