import { Context } from './Context';
declare class KitsuError extends Error {
    isKitsuError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { KitsuError };
