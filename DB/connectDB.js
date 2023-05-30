import mongoose from 'mongoose';

// connecting to database
const connectDB = async () => {
    const connectionUrl = process.env.DB_URI;
    console.log(`process.env.DB_URI:::` + process.env.DB_URI)
    mongoose.connect(connectionUrl, { dbName: "ordoict", useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(`Database connected successfully`))
        .catch((err) => console.log("Getting Error from DB connection" + err.message))
    mongoose.set('strictQuery', false);
};

export default connectDB;


// let isConnected = false; // track the connection

// export const connectDB = async () => {
//   mongoose.set('strictQuery', true);

//   if(isConnected) {
//     console.log('MongoDB is already connected');
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.DB_URI, {
//       dbName: "ordoict",
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })

//     isConnected = true;

//     console.log('MongoDB connected')
//   } catch (error) {
//     console.log(error);
//   }
// }
