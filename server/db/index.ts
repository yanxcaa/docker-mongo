import dns from 'node:dns/promises';
dns.setServers(['8.8.8.8', '1.1.1.1']);

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const MONGO_DB_CONNECTION_STRING = process.env.MONGO_DB_CONNECTION_STRING!;

export const Animal = mongoose.model('Animal', new mongoose.Schema({
    name: String,
    last_name: String,      
    age: Number,
}));

mongoose.connect(MONGO_DB_CONNECTION_STRING);