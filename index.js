"use strict";
module.exports = toFactory;
const toString = Object.prototype.toString;

function toFactory(fn) {
    
    Create.create = function create(spec) {
        return Create(spec);
    };
    
    function Create(spec) {
        let _return;
        spec = spec || {};
        _return = fn(spec);
        if (toString.call(_return) === '[object Function]') {
            return Object.freeze(_return);
        }
        _return = Object.assign(Object.create(null), _return);
        return Object.freeze(_return);
    }

    return Object.freeze(Create);
    
}
