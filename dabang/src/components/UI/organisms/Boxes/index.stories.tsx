import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Boxes1, Boxes2, BoxesProps } from './index';
import {
    SEEROOM,
    SEECOMPLEX,
    ROOMDESCRIPTION,
    LOVEROOM,
    LOVECOMPLEX,
    COMPLEXDESCRIPTION
} from 'utils/contents/String';

export default {
    title: 'Organisms/Boxes'
} as Meta;

const Template1: Story = (args) => <Boxes1 {...args} />;
const Template2: Story<BoxesProps> = (args) => <Boxes2 {...args} />;

export const MainBox = Template1.bind({});
export const ListBox1 = Template2.bind({});
ListBox1.args = {
    ListText: SEEROOM,
    StrongListText: LOVEROOM,
    ListDescription: ROOMDESCRIPTION
};

export const ListBox2 = Template2.bind({});
ListBox2.args = {
    ListText: SEECOMPLEX,
    StrongListText: LOVECOMPLEX,
    ListDescription: COMPLEXDESCRIPTION
};
