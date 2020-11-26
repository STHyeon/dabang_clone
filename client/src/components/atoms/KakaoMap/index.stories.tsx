import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { KakaoMap, KakaoMapProps } from './index';
declare const kakao: any;

export default {
    title: 'Atoms/KakaoMap',
    component: KakaoMap
} as Meta;

const Template: Story<KakaoMapProps> = (args) => <KakaoMap {...args} />;

export const general = Template.bind({});
general.args = {
    address: '카카오 본사',
    positions: [
        {
            title: '카카오',
            latitude: 33.450705,
            longitude: 126.570677
        },
        {
            title: '생태연못',
            latitude: 33.450936,
            longitude: 126.569477
        },
        {
            title: '텃밭',
            latitude: 33.450879,
            longitude: 126.56994
        },
        {
            title: '근린공원',
            latitude: 33.451393,
            longitude: 126.570738
        }
    ]
};
