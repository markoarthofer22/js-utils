export function randomNumberBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function sleep(duration: number): Promise<any> {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}

export function memoize<T>(cb: (...a: T[] | any[]) => any | void) {
    const cache = new Map();
    return (...args: any[]) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);

        const result = cb(...args);
        cache.set(key, result);
        return result;
    };
}
