import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { CardGrid, CardGridProps } from './index';
import TestImg from 'assets/images/test.png';

export default {
    title: 'Organisms/CardGrid'
} as Meta;

const Now = new Date();
const Template: Story<CardGridProps> = (args) => <CardGrid {...args} />;

export const general = Template.bind({});
general.args = {
    data: [
        {
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
        },
        {
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
        },
        {
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
        }
    ]
};
