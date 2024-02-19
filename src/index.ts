import express, { Express } from 'express';
import { $log } from 'ts-log-debug';
import 'dotenv/config';
import 'module-alias/register';
import routes from "./routes";
import cors from 'cors';
import { errorMiddleware } from './middlewares/errorMiddleware';
import { connectToMongoDB } from './config/mongoConfig';


const app: Express = express();
const PORT: number = +(process.env.PORT || 8081);

connectToMongoDB();

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: '*',
}));

app.use(routes);
app.use(errorMiddleware);

app.listen(PORT, () => {
    $log.info(`Servidor escuchando en http://localhost:${PORT}`);
});
