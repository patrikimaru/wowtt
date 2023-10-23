const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { initializeApp, cert } = require('firebase-admin/app');
const cookieParser = require("cookie-parser");


require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const tourRoutes = require("./routes/tourRoutes");
const reserveRoutes = require("./routes/reservationRoutes");

const app = express();
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

initializeApp({
  credential: cert({
    "project_id": process.env.PROJECT_ID,
    "private_key_id": process.env.PRIVATE_KEY_ID,
    "private_key": process.env.PRIVATE_KEY,
    "client_email": process.env.CLIENT_EMAIL,
    "client_id": process.env.CLIENT_ID,
  }),
  databaseURL: process.env.DATABASE_URL
});

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
  
app.use("/tour", tourRoutes);
app.use("/user", userRoutes);
app.use("/reserve", reserveRoutes);

app.listen(PORT, ()=> console.log(`Listening at http://localhost:${PORT}`));


