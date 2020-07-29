// import express = require("express"); // import-require combo
import express from "express"; // browser-based import syntax
import bparser from "body-parser";

import router from "./routes/router";

const app = express();

app.use(bparser.json()); // inferred-type

app.use(router);

app.listen(5000);

console.log("http-server");
