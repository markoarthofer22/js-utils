import {
    CURRENCY_FORMATTER,
    COMPACT_NUMBER_FORMATTER,
    NUMBER_FORMATTER,
    DIVISIONS,
    RELATIVE_DATE_FORMATTER,
} from '../constants/constants';

export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number);
}

export function formatNumber(number: number) {
    return NUMBER_FORMATTER.format(number);
}

export function formatCompactNumber(number: number) {
    return COMPACT_NUMBER_FORMATTER.format(number);
}

// eslint-disable-next-line consistent-return
export function formatRelativeDate(toDate: Date, fromDate = new Date()) {
    let duration = (toDate.getTime() - fromDate.getTime()) / 1000;

    for (let i = 0; i <= DIVISIONS.length; i += 1) {
        const division = DIVISIONS[i];
        if (Math.abs(duration) < division.amount) {
            return RELATIVE_DATE_FORMATTER.format(
                Math.round(duration),
                // @ts-ignore
                division?.name
            );
        }
        duration /= division.amount;
    }
}
