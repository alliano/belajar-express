import "dotenv/config";
import { env } from "process";
import express from "express";
import { log } from "console";
import { routers } from "./src/routers/routes.js";
import { } from "./src/routers/private-routes.js"

const APP_PORT = env.APP_PORT;
const APP_HOST = env.APP_HOST;

const app = express();
app.use(express.json());
app.use(routers)

app.listen(APP_PORT, APP_HOST, () => log(`Server berjalan pada ${APP_HOST}:${APP_PORT}`))