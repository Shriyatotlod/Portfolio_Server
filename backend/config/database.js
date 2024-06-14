import mongoose from "mongoose";
// MONGO_URI = mongodb+srv://saikirannarawad0:ychII2DPpL57Y3tB@cluster0.9qxts3k.mongodb.net/
export const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "portfolio", 
    })
    .then((c) => {
      console.log(`Mongodb connected to: ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};