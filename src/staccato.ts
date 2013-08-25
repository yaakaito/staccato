interface StaccatoStatic {
    inject: <T>(key: string, defaultValue?: (...args: any[]) => T, args?: any[]) => T;
    bind: <T>(key: string, value: (...args: any[]) => T, priority?: number) => void;
    bindSingleton: <T>(key: string, value: (...args: any[]) => T, priority?: number) => void;
}

var staccato: StaccatoStatic = (function() {
    "use strict"

    var map = {}

    return {
        inject: inject,
        bind: bind,
        bindSingleton: bindSingleton
    }

    function inject<T>(key: string, defaultValue?: (...args: any[]) => T, args?: any[]): T {
        if (map[key] != null)
            return F(map[key].value, args)
        else if (defaultValue)
            return F(defaultValue, args)
        else
            return undefined

        function F(f, args): T {
            return f.apply(this, args ? args.slice() : [])
        }
    }

    function bind<T>(key: string, value: (...args: any[]) => T, priority?: number): void {
        map[key] = result(map[key], {
            value: value,
            priority: priority
        })

        function result(left, right): T {
            if (!left) 
                return right
            else
                return resultByPriority(left, right)
        }

        function resultByPriority(left, right): T {
            if (left.priority == null)
                return right
            else if (left.priority != null && right.priority == null)
                return left
            else
                return left.priority - right.priority ? left : right

        }
    }

    function bindSingleton<T>(key: string, value: (...args: any[]) => T, priority?: number): void {
        var cache
        bind(key, function() {
            if (cache !== undefined)
                return cache
            else 
                return cache = value(arguments)
        }, priority)
    }
})()

var stacc = staccato;