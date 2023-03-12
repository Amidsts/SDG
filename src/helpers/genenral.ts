import dotenv from "dotenv"
import { clientError } from "./custom_error"
dotenv.config()



export function ENV (secret: string | any, altSecret = "") {

    let {env} = process
    
    return env[secret] || altSecret
} 

export function validator( schema: {[payload: string]: any}, inputData: {[payload: string]: any}) {

    const {error, value} = schema.validate(inputData)
    
    if (error) throw new clientError(`${value} ${error}`, 400)

    return value
}

export function responsehandler(response: any, Message= "success") {

    return {
        message: Message,
        statusCode: 200,
        data: response
    }
}