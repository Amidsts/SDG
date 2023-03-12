import { Router } from "express";
import { 
    createHouse, 
    getHouse, 
    getHouses 
} from "../controllers/house.controller";
import { createHousevalidator } from "../middlewares/input_validation/house.validation";

const router = Router()


router.post("/create-house", createHousevalidator(), createHouse)
router.get("/getHouses", getHouses)
router.get("/getHouse/:houseId", getHouse)

export default router