import React from 'react';

import { DateFormat1, DateFormat2 } from 'utils/dateFormat/DateFormat';

export interface EventDateProps {
    selectType: string;
    dateAt?: Date;
}

export function EventDate({ selectType, dateAt }: EventDateProps): React.ReactElement {
    return (
        <>
            {selectType === 'type01' && <>{dateAt && DateFormat1({ dateAt: dateAt })}</>}
            {selectType === 'type02' && <>{dateAt && DateFormat2({ dateAt: dateAt })}</>}
        </>
    );
}
