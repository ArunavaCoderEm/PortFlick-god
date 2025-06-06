const express = require("express");
const server = express();
const cors = require("cors");
const userRouter = require("./Routes/user_routes");
const portflolioRouter = require("./Routes/portfolio_routes");
const adminRouter = require("./Routes/admin_routes");
const templateRouter = require("./Routes/template_routes");

require("dotenv/config");
const PORT = process.env.PORT;

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));


server.use("/admin", adminRouter);
server.use("/users/", userRouter);
server.use("/portfolio/", portflolioRouter);
server.use("/template", templateRouter);

server.get("/", (req, res) => {
  res.send("Server started");
});

server.listen(PORT, () => {
  console.log("Server started successfully at ", PORT);
});
