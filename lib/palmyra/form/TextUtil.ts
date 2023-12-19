function camelLowerCase(v: string) {
    var regex = /\s+(\w)?/gi;
    if (typeof v != 'string')
        return v;

    const r = v.trim().toLowerCase().replace(regex, function (_m, w) {
        return w.toUpperCase();
    });

    return r;
}

function camelCase(v: string) {
    var regex = /\s+(\w)?/gi;
    if (typeof v != 'string')
        return v;

    const r = v.trim().replace(regex, function (_m, w) {
        return w.toUpperCase();
    });

    return r;
}

export { camelCase, camelLowerCase };