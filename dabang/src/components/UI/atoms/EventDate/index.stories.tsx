import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { EventDate, EventDateProps } from './index';

export default {
    title: 'Atoms/EventDate',
    argTypes: {
        dateAt: {
            description: '날짜 데이터'
        }
    }
} as Meta;

const Now = new Date();
const Template1: Story<EventDateProps> = (args) => <EventDate {...args} />;
const Template2: Story<EventDateProps> = (args) => <EventDate {...args} />;

export const FullDate = Template1.bind({});
FullDate.args = {
    EventDateType: 'type01',
    dateAt: Now
};

export const UntilMonths = Template2.bind({});
UntilMonths.args = {
    EventDateType: 'type02',
    dateAt: Now
};
