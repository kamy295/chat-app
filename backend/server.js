const express = require("express");
const chats = require("./Data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const {
  notFound,
  errorHandler,
} = require("./middleware/errorHandlingMiddleware");

dotenv.config();
connectDB();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json()); // to accept JSON

app.get("/", (req, res) => {});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`Server is running on ${PORT}`));
