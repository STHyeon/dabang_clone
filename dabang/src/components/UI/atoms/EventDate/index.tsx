import React from 'react';

// import * as S from './style';
import { DateFormat1, DateFormat2 } from 'utils/dateFormat/DateFormat';

export interface EventDateProps {
    dateAt?: Date;
}

export function EventDate1({ dateAt }: EventDateProps): React.ReactElement {
    return <>{dateAt && DateFormat1({ dateAt: dateAt })}</>;
}

export function EventDate2({ dateAt }: EventDateProps): React.ReactElement {
    return <>{dateAt && DateFormat2({ dateAt: dateAt })}</>;
}
