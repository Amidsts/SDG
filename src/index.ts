import express from "express";
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan";
import userRouter from "./routes/user";
import houseRouter from "./routes/house.routes"

const app = express()

app.use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use((cors()))
    .use(helmet())
    .use(morgan("tiny"))
    .use(userRouter)
    .use("/v1/house", houseRouter)

export default app