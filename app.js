import dotenv from "dotenv";
dotenv.config();

import express from "express";

import connectdb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import chatRoutes from "./routes/chat.routes.js";





const app = express();
const port = process.env.PORT || 3000;

// Middleware

app.use(express.json());
app.use(cookieParser());
// Allow requests from frontend
const allowedOrigins = [
  "http://localhost:5173",
  "https://chatbot-saurabh-singh.vercel.app", // your frontend domain
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

// Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api", chatRoutes)





app.get("/", (req, res) => {
  res.json("app is working");
});




// Start server
app.listen(port, () => {

  connectdb();
  console.log("✅ Server started at", port);
 
});
