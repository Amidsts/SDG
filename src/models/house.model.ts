import { Schema, model, Document, Types } from "mongoose";

interface IHouse extends Document {
    userId?: {
        type: Types.ObjectId,
        ref: "users"
    }
    location: string,
    accomodationFee: string,
    houseName: string,
    noOfRooms: string
    vacancy: boolean
    roomType: "a room selfcontain" | "room and parlour" | "single room" | "others",
    roomNumber: string
    roomVideo?: {
        videoId: string,
        videoUrl: string
    }
}

const houseSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    location: {
        type: String,
        require: true
    },
    accomodationFee: {
        type: Number,
        require: true
    },
    houseName: {
        type: String,
        require: true
    },
    noOfRooms: {
        type: String,
        require: true
    },
    vacancy: {
        type: Boolean,
        default: true
    },
    roomType: {
        type: String,
        require: true,
        enum: ["a room selfcontain", "room and parlour", "single room", "others"]
    },
    roomNumber: {
        type: String,
        require: true
    },
    roomVideo: {
        videoId: String,
        videoUrl: String
    }
})

const House = model<IHouse>("house", houseSchema)

export default House