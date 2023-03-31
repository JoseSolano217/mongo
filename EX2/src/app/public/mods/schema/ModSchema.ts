import { model, Schema } from "mongoose";
import Mod from "../entity/Mod";

const modSchema = new Schema<Mod>(
    {
        modName: {type: String, required: true, unique: true},
        modDownloads: {type: Number, default: 0},
        modOwner: {type: String, required: true},
        modState: {type: Boolean, default: false}
    }, 
    {
        versionKey: false
    }
)

export default model("Mod", modSchema, "Mod")