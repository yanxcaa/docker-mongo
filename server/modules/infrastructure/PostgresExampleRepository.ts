import { Test } from "../domain/Example.types.js";
import { Animal } from '../../db/index.js';
import { IExampleRepositry } from "../domain/IExampleRepository.js";

// Mongooes class

export class PostgresExampleRepository implements IExampleRepositry {
    async test(): Promise<Test[]> {
        try {
            const animals = await Animal.find();

            return animals.map(animal => ({
                name: animal.name ?? '',
                last_name: animal.last_name ?? '',
                age: animal.age ?? 0
            })) as Test[];
        } finally {}
    }

    async crear(): Promise<void> {
        try {
            await Animal.create({
                name: 'animal',
                last_name: 'last',
                age: 12
            })

            return;
        } finally {}
    }
}