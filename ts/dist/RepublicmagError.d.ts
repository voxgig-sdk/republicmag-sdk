import { Context } from './Context';
declare class RepublicmagError extends Error {
    isRepublicmagError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { RepublicmagError };
