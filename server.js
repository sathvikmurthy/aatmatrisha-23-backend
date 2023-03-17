const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(`${process.env.MONGO_URL_TEST}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

app.get('/', (req, res) => {
    res.send("AT23")
})

app.listen(3001, () => {
    console.log("Server Running");
})