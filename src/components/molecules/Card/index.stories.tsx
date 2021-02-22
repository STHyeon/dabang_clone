import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Card, CardProps } from './index';
import TestImg from 'assets/images/test.png';

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
    title: '메인',
    chkDate: Now,
    boxWidth: '580px'
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
    alt: 'test',
    description1: '반지층, 라라라',
    description2: '밥밥지지츠츠',
    chkDate: Now,
    boxWidth: '216px'
};

export const Detail2 = Template.bind({});
Detail2.args = {
    CardType: 'type03',
    to: '/',
    title: '강변',
    room: '오피스텔',
    roomInfo: '510세대',
    description1: 'ㅁㅁㅁㅁ',
    imgSrc: `${TestImg}`,
    alt: 'test',
    ableRoom: 4,
    complexData: true,
    chkDate: Now,
    boxWidth: '280px'
};

export const Detail3 = Template.bind({});
Detail3.args = {
    CardType: 'type04',
    to: '/',
    imgSrc: `${TestImg}`,
    alt: 'test',
    description1: '보증금',
    description2: '5억',
    boxWidth: '185px'
};

export const SeeRoom = Template.bind({});
SeeRoom.args = {
    CardType: 'type05',
    to: '',
    noneTitle: '아직 못 본 더 많은 방이 있어요.',
    boxWidth: '280px'
};

export const SeeComplex = Template.bind({});
SeeComplex.args = {
    CardType: 'type05',
    to: '',
    noneTitle: '아직 못 본 더 많은 단지가 있어요.',
    boxWidth: '280px'
};

export const ChkSeeRoom = Template.bind({});
ChkSeeRoom.args = {
    CardType: 'type05',
    to: '/',
    noneTitle: '최근 본 지역의 다른 방을 찾아보세요',
    boxWidth: '280px'
};

export const ChkSeeComplex = Template.bind({});
ChkSeeComplex.args = {
    CardType: 'type05',
    to: '/',
    noneTitle: '최근 본 지역의 다른 단지를 찾아보세요',
    boxWidth: '280px'
};
