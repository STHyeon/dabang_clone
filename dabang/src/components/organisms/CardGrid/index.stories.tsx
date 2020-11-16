import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { CardGrid, CardGridProps } from './index';
import { Type01CardData } from 'utils/contents/data';

export default {
    title: 'Organisms/CardGrid'
} as Meta;

const Template: Story<CardGridProps> = (args) => <CardGrid {...args} />;

export const general = Template.bind({});
general.args = { data: Type01CardData };
