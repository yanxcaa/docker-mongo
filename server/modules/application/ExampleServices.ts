import { Test } from "../domain/Example.types.js";
import { IExampleRepositry } from "../domain/IExampleRepository.js";

export class ExampleServices {
    constructor( private readonly exampleRepository : IExampleRepositry ) {}

    test(): Promise<Test[]> {
        return this.exampleRepository.test();
    }

    crear(): Promise<void> {
        return this.exampleRepository.crear();
    }
}