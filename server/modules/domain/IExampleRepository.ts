import { Test } from "./Example.types.js";

export interface IExampleRepositry {
    test(): Promise<Test[]>;
    crear(): Promise<void>;
}