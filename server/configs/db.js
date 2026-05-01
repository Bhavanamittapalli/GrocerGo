import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import seedDatabase from "./seed.js";

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log("Database Connected"));

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/greencart`, {
            serverSelectionTimeoutMS: 5000,
        });
        await seedDatabase();
    } catch (error) {
        console.warn("Atlas connection failed:", error.message);
        console.log("Starting local in-memory MongoDB...");

        const path = await import('path');
        const dbPath = path.join(process.cwd(), 'db_data');
        
        const mongod = await MongoMemoryServer.create({
            instance: {
                dbPath: dbPath, 
                storageEngine: 'wiredTiger',
            },
        });
        const uri = mongod.getUri();
        await mongoose.connect(uri);
        console.log(`Connected to persistent local MongoDB at ${uri}`);
        await seedDatabase();
    }
};

export default connectDB;