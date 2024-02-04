const express = require("express");
const app = express();

const cors = require('cors');
 const port = 5000;

 const UserRouter = require("./routers/userRouter");
 const ArtistRouter = require("./routers/artistRouter")
 const PublishRouter = require("./routers/publishRouter")
 const HorrorRouter = require("./routers/horrorRouter")
 const UtilRouter = require("./routers/util")


app.get("/", (req, res) => {
    res.send("hello word")

})

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"]
  }));

app.use("/user", UserRouter);
app.use("/artist", ArtistRouter);
app.use("/publish", PublishRouter);
app.use("/publish", HorrorRouter);
app.use("/util", UtilRouter);

app.use(express.static('./static/uploads'));



app.listen(port, () =>{
    console.log("server started");

})