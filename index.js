 const express = require("express");
const employeeRouter = require("./router/router.js");
require('./database/db');
const app = express();
const port = process.env.PORT || 6924;
//app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(employeeRouter);
app.listen(port, () => {
    console.log(`express server is running at http://localhost:${port}`);
});

  