
const hasChar = (val: string, c: string): boolean => {
    var index = val.indexOf(c)
    return index >= 0;
}

const hasDot = (val: string): boolean => {
    return hasChar(val, '.');
}

const StringFormat = function (str: string, data: any): string {
    if (typeof str === 'string' && (data instanceof Array)) {
        return str.replace(/({\d})/g, function (i) {
            return data[i.replace(/{/, '').replace(/}/, '')];
        });
    } else if (typeof str === 'string' && (data instanceof Object)) {

        if (Object.keys(data).length === 0) {
            return str;
        }

        return str.replace(/({([^}]+)})/g, function (i) {
            let key = i.replace(/{/, '').replace(/}/, '');
            if (!data[key]) {
                return i;
            }
            return data[key];
        });

    } else if (typeof str === 'string' && data instanceof Array === false || typeof str === 'string' && data instanceof Object === false) {
        return str;
    } else {
        return str;
    }
};

function concatValues(param: Object): string {
    return Object.values(param).join()
}

export { StringFormat, hasChar, hasDot, concatValues };
