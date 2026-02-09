import express from "express"
import cors from "cors"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import 'dotenv/config.js'
import orderRouter from "./routes/orderRoute.js"
import { connectDB } from "./config/db.js"

// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());     // request from frontend to backend is parsed using this
app.use(cors())     // using this, backend can be accessed from any frontend

// db connection
connectDB();

// api endpoints
app.use('/api/food', foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)


app.get("/", (req, res)=>{
    res.send("API Working")
})


app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})

