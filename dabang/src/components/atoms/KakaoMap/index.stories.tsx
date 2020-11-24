import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { KakaoMap, KakaoMapProps } from './index';

export default {
    title: 'Atoms/KakaoMap',
    component: KakaoMap
} as Meta;

const Template: Story<KakaoMapProps> = (args) => <KakaoMap {...args} />;

export const general = Template.bind({});
general.args = {
    latitude: 37.5662952,
    longitude: 126.9779451
};
