import express, { Express } from 'express';
import 'module-alias/register';
import routes from "./routes";
import cors from 'cors';
import { errorMiddleware } from '@shared/middlewares/errorMiddleware';
import { connectToMongoDB } from '@shared/config/mongoConfig';

const app: Express = express();
app.use(express.json());
app.use(routes);
const PORT: number = +(process.env.PORT || 8081);
const NODE_ENV = process.env.NODE_ENV;
app.use(cors());

connectToMongoDB();

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT} en modo ${NODE_ENV}`);
});
