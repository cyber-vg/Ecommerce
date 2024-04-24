import mongoose from 'mongoose';
const ConnectDb= async()=> {
    try {
        const conn = await mongoose.connect(process.env.MON_URL)
        console.log("connect to db");
    
        } catch (error) {
        console.log(error);
    }
}
export default ConnectDb