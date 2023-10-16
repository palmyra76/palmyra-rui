
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