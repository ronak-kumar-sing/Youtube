import mongoose from 'mongoose';
import { DATABASE_NAME } from '../constant.js';

const Connected = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.DATABASE_URL}/${DATABASE_NAME}`)
    console.log('Mongoose DB is connected!!', connection.connection.host);
  } catch (error) {
    console.log("Mongoose DB connection error: ", error);
    process.exit(1)
  }
}

export default Connected;

