export function removeQuotes(params) {
    const regEx =/['"]/;
    if (regEx.test(params.at(0))) return params.slice(1,-1);
    return params;
}