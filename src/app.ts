import app from "./index"
import { ENV } from "./helpers/genenral";
import logger from "./helpers/logger";


app.listen( ENV("PORT"), () => {
    logger.info(`server connected successfully to port ${ENV("PORT")}`);
    
})