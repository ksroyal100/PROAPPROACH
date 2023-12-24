import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


   const ConnectDB = async () => {
        try {
            const connectInst1 = await mongoose.connect(`${process.env.MONGO_uRI}/${DB_NAME}`);
            console.log(`\n MongoDB connected !! DB HOST: ${connectInst1.connection.host}`);
    } catch (error) {
            console.log(error);
                process.exit(1);
    }
}
export default ConnectDB;