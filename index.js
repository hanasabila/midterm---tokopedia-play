require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoString = process.env.db_url;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', ( ) => {
    console.log('Database Connected');
})

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

const video = require('./models/videoModel');
const videoRoutes = require('./routes/videoRoutes');

app.use('/video', videoRoutes);

app.listen(5000, () => {
    console.log(`Server is running on port ${5000}`);
});