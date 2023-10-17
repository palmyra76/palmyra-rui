export function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}

export function mergeDeep(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                mergeDeep(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }

    return mergeDeep(target, ...sources);
}


const delayGenerator = (ms: number) => {
    var timer: ReturnType<typeof setTimeout>;
    return function (callback: Function) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            callback.apply(null);
        }, ms || 0);
    };
}

const delay = delayGenerator(300);

export { delay };