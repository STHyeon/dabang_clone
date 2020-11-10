interface DateFormatProps {
    dateAt?: Date;
}

export function DateFormat1({ dateAt }: DateFormatProps): string {
    if (dateAt) {
        const Year = '' + dateAt.getFullYear().toString().substring(2);
        const Month = '' + (dateAt.getMonth() + 1);
        const Day = '' + dateAt.getDate();
        const result = `${Year}.${Month}.${Day}`;
        return result;
    } else {
        return '날짜가 없습니다.';
    }
}

export function DateFormat2({ dateAt }: DateFormatProps): string {
    if (dateAt) {
        const Year = '' + dateAt.getFullYear().toString();
        const Month = '' + (dateAt.getMonth() + 1);
        const result = `${Year}.${Month}`;
        return result;
    } else {
        return '날짜가 없습니다.';
    }
}
