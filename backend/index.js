const express = require("express");
const server = express();
const cors = require("cors");
const userRouter = require("./routes/user_routes");
const portflolioRouter = require("./routes/portfolio_routes");

require("dotenv/config");
const PORT = process.env.PORT;

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/users/", userRouter);
server.use("/portfolio/", portflolioRouter);

server.get("/", (req, res) => {
  res.send("Server started");
});

server.listen(PORT, () => {
  console.log("Server started successfully at ", PORT);
});
