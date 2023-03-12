class BaseError extends Error {
    success!: boolean
    errorName!: string
    message!: string
    statusCode!: number
    data!: object

}

//error code 400 - 499 
export class clientError extends BaseError {
    constructor (errMessage: string, statuscode: number) {
        super()

        this.success = false;
        this.errorName = "client error";
        this.message = errMessage;
        this.statusCode = statuscode;
        this.data = {}
    }
}

//error code 500 - 599
export class ServerError extends BaseError {
    constructor (errorMessage: string, statuscode: number) {
        super()

        this.success= false
        this.errorName= "server error"
        this.message= errorMessage
        this.statusCode= statuscode
        this.data= {}
    }
}
