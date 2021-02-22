import React from 'react';
import * as S from './style';
import { DateFormat1, DateFormat2 } from 'utils/DateFormat';

export interface EventDateProps {
    eventDateType: string;
    dateAt: Date;
}

export function EventDate({ eventDateType, dateAt }: EventDateProps): React.ReactElement {
    return (
        <S.Date>
            {eventDateType === 'Date' && <>{dateAt && DateFormat1({ dateAt: dateAt })}</>}
            {eventDateType === 'Month' && <>{dateAt && DateFormat2({ dateAt: dateAt })}</>}
        </S.Date>
    );
}
