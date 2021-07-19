import mongoose from 'mongoose';



const Connection= async() => {
    try {
        const URL='mongodb://Strangest:QUARTZ@blogweb-shard-00-00.ot99w.mongodb.net:27017,blogweb-shard-00-01.ot99w.mongodb.net:27017,blogweb-shard-00-02.ot99w.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-xnxo4v-shard-0&authSource=admin&retryWrites=true&w=majority';
    
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
        console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting to MongoDB', error);
    }
}

export default Connection;