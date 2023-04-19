import express from "express";

const PORT = 5000;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json('Hello world');
})

app.listen(PORT, () => {
    console.log(`server started listening on port: ${PORT}`)
})