import ConnectDB from "./db/conn.js";
import dotenv from "dotenv";
import express from "express"

const app = express()

dotenv.config({
    path: "./env"
})
ConnectDB()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running at port : ${process.env.PORT} `);
        })
    })
    .catch((err) => {
        console.log("Mongo db connection coebase failed !!", err);
    })
