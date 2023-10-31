import mongoose from 'mongoose';

let isConnect = false; // variable to check if mongoose is connect

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);
  if (!process.env.MONGODB_URL) return console.log('MONGODB_URL not found');
  if (isConnect) return console.log('Already connected to MongoDB');
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnect = true;
  } catch (error) {
    console.log(error);
  }
};
