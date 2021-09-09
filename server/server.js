const express = require("express");
const ctrl = require("./controller");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(express.json());
app.use(cors());

app.post("/users/signup", ctrl.postSignup);
app.post("/users/login", ctrl.postSignin);

app.listen(port, () => console.log(`Server is up and running on ${port}...`));
