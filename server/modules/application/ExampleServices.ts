import { Test } from "../domain/Example.types.js";
import { IExampleRepositry } from "../domain/IExampleRepository.js";

export class ExampleServices {
    constructor( private readonly exampleRepository : IExampleRepositry ) {}

    find(): Promise<Test[]> {
        return this.exampleRepository.find();
    }

    crear(): Promise<void> {
        return this.exampleRepository.crear();
    }
}