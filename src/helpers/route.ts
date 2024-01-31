export const parsingRoute = (
    url: string,
    propsParams?: Record<string, string | number>
): string => {
    let newUrl: string = url;
    if (propsParams) {
        Object.keys(propsParams).forEach((param) => {
            newUrl = newUrl.replace(`:${param}`, String(propsParams[param]));
        });
    }
    return newUrl;
};

export const routeWithParams = (url: string, query: Record<string, string>) => {
    let newUrl = url + "?";
    Object.keys(query).forEach((key) => {
        newUrl += `${key}&${query[key]}`;
    });
    return newUrl;
};
