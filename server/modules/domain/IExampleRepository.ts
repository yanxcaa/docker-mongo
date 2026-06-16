import { Test } from "./Example.types.js";

export interface IExampleRepositry {
    find(): Promise<Test[]>;
    crear(): Promise<void>;
}