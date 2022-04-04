import { randomNumberBetween } from 'utils/helpers';

export function first<T>(array: T[], n = 1): T | T[] {
    if (n === 1) return array[0];
    return array.filter((_, i: number) => i < n);
}

export function sample<T>(array: T[]): T {
    return array[randomNumberBetween(0, array.length - 1)];
}
