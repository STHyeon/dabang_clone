import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { EventDate1, EventDate2, EventDateProps } from './index';

export default {
    title: 'Atoms/EventDate',
    argTypes: {
        dateAt: {
            description: '날짜 데이터'
        }
    }
} as Meta;

const Now = new Date();
const Template1: Story<EventDateProps> = (args) => <EventDate1 {...args} />;
const Template2: Story<EventDateProps> = (args) => <EventDate2 {...args} />;
const AllTemplate: Story<EventDateProps> = (args) => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <EventDate1 {...args} />
        <EventDate2 {...args} />
    </div>
);

export const FullDate = Template1.bind({});
FullDate.args = {
    dateAt: Now
};

export const UntilMonths = Template2.bind({});
UntilMonths.args = {
    dateAt: Now
};

export const AllType = AllTemplate.bind({});
AllType.args = {
    dateAt: Now
};
