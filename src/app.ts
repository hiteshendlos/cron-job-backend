import config from "./config";
import express from "express";
import routes from "./api/routes";
// import { connectToMongo } from "./api/database/db";
import bodyParser from "body-parser";
// let cors = require("cors");
import cors from 'cors'
import cronJob from "./api/cron/cron";

async function startServer() {
  const app = express();


  //runnig cron job

  cronJob()

  // connectToMongo();

  //for cors error

  app.use(cors())

  // Parse URL-encoded bodies
  app.use(bodyParser.urlencoded({ extended: false }));

  // Parse JSON bodies
  app.use(bodyParser.json());

  app.get('/',(req,res)=>{
    res.send('server is working')
  })

  app.use(config.api.prefix, routes());

  app.listen(config.port, () => {
    console.log("Ci cd App is working on Port", config.port);
  });
}

startServer();








