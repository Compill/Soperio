// export * from './lib/utils';

export const IS_DEV: boolean = process.env.NODE_ENV !== "production";

export type LiteralUnion<T extends U, U = string> = T | (U & { zz_IGNORE_ME?: never; });
export type OrString<T extends string> = LiteralUnion<T, string>;
