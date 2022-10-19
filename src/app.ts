import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';
import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// local imports
import notesRoutes from './routes/notes.routes';
import connectDb from './db/db';
import expressErrorMiddleware from './middleware/express-middleware';

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use('/api/v1/notes', notesRoutes);
app.use(expressErrorMiddleware);

const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI!);
        app.listen(PORT, () => {
            console.log(`server running on ${PORT}`);
        });
    } catch (error) {
        console.log('error', error);
    }
};

start();
