const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(express.json());
app.use(cors());

app.listen(port, `Server is up and running on ${port}...`);
