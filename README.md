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
.inject<T>(name: string [, defaultValue: (args) => T] [, args: any[]])
```

## staccato.bind

```typescript
.bind<T>(name: string, value: (args) => T [, priotiry: number])
```

## staccato.bindSingleton

```
.bindSingleton<T>(name: string, value: (args) => T [, priotiry: number])
```
