const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.NEW_MONGO_URI);

    console.log(`MongoDb connect: ${connect.connection.host}`);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

module.exports = connectDb;

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::

// const startServer = async () => {
//   try {
//     await connectDb();

//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

// startServer();
