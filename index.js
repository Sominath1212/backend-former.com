const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./models/db");
const categoryRoutes = require("./routes/categoryRoutes");
dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.listen(PORT, () => {
  connectDB();
  console.log(`server is started on the port \nhttp://localhost:${PORT}`);
});
