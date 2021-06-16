import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routerBlog from "./routers/blogRoutesPort.js"
import mongodb from "mongoose";



const app = express();
dotenv.config()
app.use(cors())

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))

app.use('/blog', routerBlog);

app.get('/', (req, res) => {
    res.send("database get")
})
const ENVCONNECT_URL = process.env.CONNECT_URL;
const PORT = process.env.PORT;

mongodb.connect(ENVCONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => {
        console.log(`database connect and port on: ${PORT}`);
    })
}).catch((e) => {
    console.error(e);
})

