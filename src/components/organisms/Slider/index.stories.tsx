import React from 'react';
import { Meta } from '@storybook/react';

import { Slick, SlickProps } from './index';
import { Type02CardData } from 'utils/contents/data';

export default {
    title: 'Organisms/Slick'
} as Meta;

export const general = (args: SlickProps) => <Slick {...args} />;
general.args = { data: Type02CardData, boxWidth: '185px', slidesToShow: 7, slidesToScroll: 7 };
