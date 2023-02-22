import dotenv from "dotenv"
dotenv.config()



export function ENV (secret: string | any, altSecret = "") {

    let {env} = process
    
    return env[secret] || altSecret
} 