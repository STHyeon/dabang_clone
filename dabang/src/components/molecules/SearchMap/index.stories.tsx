import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SearchMap, SearchMapProps } from './index';

export default {
    title: 'Molecules / SearchMap'
} as Meta;

const Template: Story<SearchMapProps> = (args) => <SearchMap {...args} />;

export const general = Template.bind({});
general.args = {
    address: '중앙로'
};
