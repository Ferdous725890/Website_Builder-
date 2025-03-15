import mongoose from "mongoose";

const connectDatabase = async () => {
    try{
        await mongoose.connect(process.env.MongoURL)
        console.log("Pinged your deployment. You successfully connected to MongoDB!")
    }catch(error){
        console.log(error)
    }
}

export default connectDatabase;