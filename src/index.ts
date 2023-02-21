import express from "express";
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan";

const app = express()

app.use(express.json())
    .use(express.urlencoded({extended: true}))
    .use((cors()))
    .use(helmet())
    .use(morgan("tiny"))

export default app