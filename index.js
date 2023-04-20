import express from "express";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
const PORT = 5000;
const DB_URL = process.env.DB_URL;
import router from "./router.js";
const app = express();
app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload());
app.use(router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        app.listen(PORT, () => {
            console.log(`server started listening on port: ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}
startApp();