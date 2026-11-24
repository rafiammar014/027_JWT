require('dotenv').config();

const express = require('express');
const connectDatabase = require('./config/db');
const apiRouter = require('./api');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

async function startServer() {
    try {
        await connectDatabase();

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error.message);
        process.exit(1);
    }
}

startServer();