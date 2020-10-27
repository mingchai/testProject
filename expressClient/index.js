const express = require("express");
const app = express();
const logger = require("morgan");
const baseRouter = require("./routes/base");

app.set("view engine", "ejs");

app.use(logger("dev"));
app.use("/", baseRouter);

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

module.exports = app;
