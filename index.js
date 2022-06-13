import express from 'express';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';
import indexRoutes from './routes/index.js';
import morgan from 'morgan';


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan("dev"));

/* Importing the routes from the index.js file in the routes folder. */
app.use(indexRoutes);

// static files
app.use(express.static(join(__dirname, "public")));

app.listen(4000, () => 
    console.log('Server running on port 4000'));