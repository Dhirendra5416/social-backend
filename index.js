import express from "express";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import likeRoutes from "./routes/likes.js"
import postRoutes from "./routes/posts.js"
import relationshipRoutes from "./routes/relationships.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();


//middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
  app.use(express.json());
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
  app.use(cookieParser());
  


app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/post",postRoutes)
app.use("/api/like",likeRoutes)
app.use("/api/relationships", relationshipRoutes);

// Start the server
app.listen(8800, () => {
    console.log("App is connected on port 8800");
});
