import dns from 'node:dns/promises';
dns.setServers(['8.8.8.8', '1.1.1.1']);

import { Test } from "../domain/Example.types.js";
import mongoose from 'mongoose'
import { IExampleRepositry } from "../domain/IExampleRepository.js";

const Animal = mongoose.model('Animal', new mongoose.Schema({
    name: String,
    last_name: String,      
    age: Number,
}))

mongoose.connect('mongodb+srv://yanca:MongoPassword@cluster0.wfbi5f2.mongodb.net/?appName=Cluster0')

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