"use strict";
module.exports = toFactory;

function toFactory(fn) {
    let obj = Object.create(null);
    
    obj.create = function (spec) {
        let _return;
        spec = spec || {};
        _return = Object.assign(Object.create(null), fn(spec));
        return Object.freeze(_return);
    };

    return Object.freeze(obj);
}
