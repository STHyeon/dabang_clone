import React from 'react';

import { DateFormat1, DateFormat2 } from 'utils/dateFormat/DateFormat';

export interface EventDateProps {
    EventDateType?: string;
    dateAt?: Date;
}

export function EventDate({ EventDateType, dateAt }: EventDateProps): React.ReactElement {
    return (
        <>
            {EventDateType === 'type01' && <>{dateAt && DateFormat1({ dateAt: dateAt })}</>}
            {EventDateType === 'type02' && <>{dateAt && DateFormat2({ dateAt: dateAt })}</>}
        </>
    );
}
