const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./models/db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const orderRoutes = require("./routes/orderRoutes");
dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/order", orderRoutes);
app.listen(PORT, () => {
  connectDB();
  console.log(`server is started on the port \nhttp://localhost:${PORT}`);
});




// *
// 
// 
// headers: {
  // "Content-Type": "application/json",
  // "Authorization": `Bearer ${token}`
// },
