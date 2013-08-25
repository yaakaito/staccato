interface StaccatoStatic {
    inject: <T>(key: string, defaultValue?: (...args: any[]) => T, args?: any[]) => T;
    bind: <T>(key: string, value: (...args: any[]) => T, priority?: number) => void;
    bindSingleton: <T>(key: string, value: (...args: any[]) => T, priority?: number) => void;
}

declare var staccato: StaccatoStatic;
declare var stacc: StaccatoStatic;