import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Icon, IconProps } from './index';

export default {
    title: 'Atoms/Icon'
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const general = Template.bind({});
general.args = {
    IconType: 'fas',
    IconTitle: 'angle-right',
    IconSize: '24px'
};
