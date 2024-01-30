import express, { Express } from 'express';
import 'dotenv/config';
import 'module-alias/register';
import routes from "./routes";
import cors from 'cors';
import { errorMiddleware } from './middlewares/errorMiddleware';
import { connectToMongoDB } from './config/mongoConfig';


const app: Express = express();
app.use(express.json());
app.use(routes);
const PORT: number = +(process.env.PORT || 8081);
app.use(cors());

connectToMongoDB();

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
