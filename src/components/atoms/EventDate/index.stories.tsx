import React from 'react';
import { Meta } from '@storybook/react';

import { EventDate, EventDateProps } from './index';

export default {
    title: 'Atoms/EventDate',
    argTypes: {
        dateAt: {
            description: '날짜 데이터'
        },
        eventDateType: {
            control: {
                type: 'select',
                options: ['Date', 'Month']
            }
        }
    }
} as Meta;

const Now = new Date();

export const S_EventDate = (args: EventDateProps) => <EventDate {...args} />;
S_EventDate.args = {
    eventDateType: 'Date',
    dateAt: Now
};
