import mongoose from "mongoose"; //step 12

const connectDb = async () => {
    try{ 
        await mongoose.connect(process.env.ATLAS_URI)
        console.log("mongodb connected") //so you know it works 
    } catch (e) {
        console.log(e)
    }
}