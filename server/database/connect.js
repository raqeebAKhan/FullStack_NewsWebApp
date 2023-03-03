import mongoose from "mongoose";


const DataConnect = async(username, password) => {
    const URL = `mongodb://${username}:${password}@ac-5nblkqv-shard-00-00.dnd6np6.mongodb.net:27017,ac-5nblkqv-shard-00-01.dnd6np6.mongodb.net:27017,ac-5nblkqv-shard-00-02.dnd6np6.mongodb.net:27017/NEWSAPP?ssl=true&replicaSet=atlas-b6sqs5-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('Database connected successfully')
    }catch(error){
        console.log('Error while connecting with database', error);
    }
}

export default DataConnect;