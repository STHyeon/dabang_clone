import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Slick, SlickProps } from './index';
import { Type02CardData } from 'utils/contents/data';

export default {
    title: 'Organisms/Slick'
} as Meta;

const Template: Story<SlickProps> = (args) => <Slick {...args} />;

export const general = Template.bind({});
general.args = { data: Type02CardData, boxWidth: '185px', slidesToShow: 7, slidesToScroll: 7 };
