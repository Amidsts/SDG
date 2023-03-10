import app from "./index"
import { ENV } from "./helpers/genenral";
import logger from "./helpers/logger";
import mongoose from "mongoose";

mongoose.set('strictQuery', true);
mongoose.connect(ENV("URI")).then(res => {
    logger.info(`db connected`);
}).catch(err => {
    logger.error(`can't connect to db`)
})

const PORT = ENV("PORT") || 7000
app.listen(PORT, () => {
    logger.info(`server connected successfully to port ${PORT}`);
})