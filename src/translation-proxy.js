module.exports = function translationProxy(target, locale) {
    return new Proxy(target, {
        get(obj, prop) {
            const translatedProp = `${prop}$`;
            if (prop in obj) {
                switch(typeof obj[prop]) {
                    case 'string':
                    case 'boolean':
                    case 'number':
                    return obj[prop];
                    default:
                    if (![Array, Object].includes(obj[prop].constructor)) {
                        return obj[prop];
                    }
                    return translationProxy(obj[prop], locale);
                }
            } else if (translatedProp in obj) {
                return obj[translatedProp][locale];
            }
        }
    });
};