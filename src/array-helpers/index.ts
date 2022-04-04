import { randomNumberBetween } from 'utils/helpers';

export function first<T>(array: T[], n = 1): T | T[] {
    if (n === 1) return array[0];
    return array.filter((_, i: number) => i < n);
}

export function last<T>(array: T[], n = 1): T | T[] {
    if (n === 1) return array[array.length - 1];
    return array.filter((_, i) => array.length - i <= n);
}

export function sample<T>(array: T[]): T {
    return array[randomNumberBetween(0, array.length - 1)];
}

export function pluck<T extends Record<string, any>>(
    array: T[],
    key: keyof T
): T | T[] {
    return array.map((element) => element[key as number]);
}

export function groupBy<T extends Record<string, any>>(
    array: T[],
    key: keyof T
): any {
    return array.reduce((group: { [any: string]: any }, element) => {
        const keyValue = element[key];
        return { ...group, [keyValue]: [...(group[keyValue] ?? []), element] };
    }, {});
}
