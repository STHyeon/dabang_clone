import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Boxes, BoxesProps } from './index';
import TestImg from 'assets/images/test.png';
import {
    SEEROOM,
    SEECOMPLEX,
    ROOMDESCRIPTION,
    LOVEROOM,
    LOVECOMPLEX,
    COMPLEXDESCRIPTION
} from 'utils/contents/string';

export default {
    title: 'Organisms/Boxes',
    component: Boxes
} as Meta;

const Now = new Date();
const Template1: Story<BoxesProps> = (args) => <Boxes {...args} />;
const Template2: Story<BoxesProps> = (args) => <Boxes {...args} />;

export const MainBox = Template1.bind({});
MainBox.args = {
    BoxesType: 'type01',
    ListText: SEEROOM,
    StrongListText: LOVEROOM,
    ListDescription: ROOMDESCRIPTION
};

export const TextBox = Template2.bind({});
TextBox.args = {
    BoxesType: 'type02',
    CardType: 'type03',
    ListText: SEECOMPLEX,
    StrongListText: LOVECOMPLEX,
    ListDescription: COMPLEXDESCRIPTION,
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
