DI for TypeScript
============================

```typescript
class Hoge {
    private value = stacc.injection('value', (a) => new Value(a), ['A'])
}
 
stacc.bind('value', (a) => new MockValue(a))
```
 
# API

## stacc

Alias `staccato`.

## staccato.injection

```typescript
.injection(name [, defaultValue(args)] [, args[]])
```

## staccato.bind

```typescript
.bind(name, value(args))
```

## staccato.bindSingleton

```
.bindSingleton(name, value(args))
```
