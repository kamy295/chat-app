const moongose = require("mongoose");

const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await moongose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Mongo DB Connected : ${conn.connection.host} `.cyan.bold.underline
    );
  } catch (error) {
    console.log(`Error: ${error.message} `.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
