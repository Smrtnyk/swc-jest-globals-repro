import {throwError} from "./baz";

export function sum(a: number, b: number) {
    throwError();
    return a + b;
}
