var staccato = (function () {
    "use strict";

    var map = {};

    return {
        inject: inject,
        bind: bind,
        bindSingleton: bindSingleton
    };

    function inject(key, defaultValue, args) {
        if (map[key] != null)
            return F(map[key].value, args); else if (defaultValue)
            return F(defaultValue, args); else
            return undefined;

        function F(f, args) {
            return f.apply(this, args ? args.slice() : []);
        }
    }

    function bind(key, value, priority) {
        map[key] = result(map[key], {
            value: value,
            priority: priority
        });

        function result(left, right) {
            if (!left)
                return right; else
                return resultByPriority(left, right);
        }

        function resultByPriority(left, right) {
            if (left.priority == null)
                return right; else if (left.priority != null && right.priority == null)
                return left; else
                return left.priority - right.priority ? left : right;
        }
    }

    function bindSingleton(key, value, priority) {
        var cache;
        bind(key, function () {
            if (cache !== undefined)
                return cache; else
                return cache = value(arguments);
        }, priority);
    }
})();

var stacc = staccato;
