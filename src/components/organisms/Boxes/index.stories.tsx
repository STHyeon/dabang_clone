import React from 'react';
import { Meta } from '@storybook/react';

import { Boxes, BoxesProps } from './index';

export default {
    title: 'Organisms/Boxes',
    component: Boxes
} as Meta;

export const MainBox = (args: BoxesProps) => <Boxes {...args} />;

MainBox.args = {
    BoxesType: 'type01',
    ListText: '최근 본 방',
    StrongListText: '찜한 방',
    ListDescription: '최근에 본 방과 찜한 방을 볼 수 있어요'
};

export const TextBox = (args: BoxesProps) => <Boxes {...args} />;
TextBox.args = {
    BoxesType: 'type02',
    ListText: '최근 본 단지',
    StrongListText: '찜한 단지',
    ListDescription: '최근에 본 단지와 찜한 단지를 볼 수 있어요'
};
