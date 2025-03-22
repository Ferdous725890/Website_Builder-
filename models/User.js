import mongoose, { version } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, require: true}
},
{
    versionKey: false
})

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User