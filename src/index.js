import dotenv from 'dotenv'

import mongoose from 'mongoose';
import Connected from './db/index.js';
import { app } from './app';
export { DATABASE_NAME } from './constant.js'

dotenv.config({
  path: './.env'
})

Connected()
  .then(() => {
    app.on('err', (err) => {
      console.log("error !:", err);
    })
    app.listen(process.env.PROT || 4000, () => {
      console.log('⏳ Sever is started at Port',process.env.PROT)
    })
  })
  .catch((err) => {
    console.log('DB connection Failed !!', err);
  })
/*
import express from 'express'

const app = express();

; (async () => {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}/${DATABASE_NAME}`)
    app.on("error", (err) => {
      console.log("error: ", err)
      throw err
    })
    app.listen(process.env.PROT, () => {
      console.log("App is running on Port No: ", process.env.PROT);
    })
  } catch (err) {

    console.log("error : ", err);
    throw err
  }

})()  //  Immediately Invoked Function Expression (IIFE).
*/