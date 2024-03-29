"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JsonReviver {
    constructor() {
        this.setReviverOf = (propName, converter) => this.reviver[propName] = converter;
        this.callback = () => (key, value) => {
            for (let i in this.reviver)
                if (key === i && typeof value === 'string')
                    return (this.reviver[i])(value);
            return value;
        };
        this.reviver = {};
    }
}
exports.default = JsonReviver;
