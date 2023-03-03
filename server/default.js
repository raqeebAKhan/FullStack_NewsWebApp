import News from "./models/newsSchema.js";
import { data } from "./constants/data.js";

const DefaultData = async () => {
    try{
        await News.deleteMany({});
        await News.insertMany(data);
        console.log("Data inserted Successfully")
    }catch(error){
        console.log("error", error.message)
    }
} 

export default DefaultData;