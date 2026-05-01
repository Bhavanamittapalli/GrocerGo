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

        const mongod = await MongoMemoryServer.create({
            instance: {
                dbPath: 'C:/Users/bhava/Downloads/grocery_full stack_app/Grocergo.cicd/server/db_data', 
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