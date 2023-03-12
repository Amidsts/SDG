import { NextFunction, Request, Response } from "express"
import { clientError } from "../helpers/custom_error"

import { responsehandler } from "../helpers/genenral"
import house from "../models/house.model"


//create house
export async function createHouse(err: any, req: Request, res: Response, next: NextFunction) {
    try {
        
        const payload: {[key: string]: any} = req.body
        
        const houseExist = await house.findOne({houseName: req.body.houseName})

        if (houseExist) throw new clientError("this house name already exist", 401)

        const newHouse = await new house(payload).save()

        return res.json(responsehandler(newHouse))

    } catch (err) {
        
        next(err)
    }

}

//get houses
export async function getHouses(req: Request, res: Response, next: NextFunction) {
    try {

        const getHouses = await house.find()

        return res.json(responsehandler(getHouses))
        
        
    } catch (error) {
        next(error)
    }

}

//get house
export async function getHouse(req: Request, res: Response, next: NextFunction) {
    try {

        const getHouse = await house.findById(req.params.houseId)

        return res.json(responsehandler(getHouse))
        
        
    } catch (error) {
        return next(error)
    }

}

//get vacant houses
//get houses base on budget