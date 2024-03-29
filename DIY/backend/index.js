const express = require("express")

const app = express();
const cors = require("cors")
const port = 3000;

const UserRouter = require("./Routers/User")


app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"]
}));

app.use("/user", UserRouter);


app.listen(port,() => {
    console.log("Server Started");
})