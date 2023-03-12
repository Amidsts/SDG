import Joi from "joi";
import { NextFunction, Request, Response } from "express";

import { validator } from "../../helpers/genenral";

export function createHousevalidator() {
    return (req: Request, res: Response, next: NextFunction) => {
        
        const {
            location,
            accomodationFee,
            houseName,
            noOfRooms,
            vacancy,
            roomType,
            roomNumber
        } = req.body

        validator(Joi.object({
            location: Joi.string().required(),
            accomodationFee: Joi.number().required(),
            houseName: Joi.string().required(),
            noOfRooms: Joi.string().required(),
            vacancy: Joi.boolean(),
            roomType: Joi.string().required(),
            roomNumber: Joi.string().required()
        }), {
            location,
            accomodationFee,
            houseName,
            noOfRooms,
            vacancy,
            roomType,
            roomNumber
        })

       next()
    }
}
