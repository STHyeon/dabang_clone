import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Slick, SlickProps } from './index';
import { Type04CardData } from 'utils/contents/data';

export default {
    title: 'Organisms/Slick'
} as Meta;

const Template: Story<SlickProps> = (args) => <Slick {...args} />;

export const general = Template.bind({});
general.args = { data: Type04CardData, boxWidth: 185, slidesToScroll: 5 };
