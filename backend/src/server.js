const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app
    .use(bodyParser.json({ limit: '20MB' }))
    .use(bodyParser.urlencoded({ limit: '20MB', extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ message: "PFP NTIC API is running" });
});

require("./routes/pictogramRoutes.js")(app);
require("./routes/userRoutes.js")(app);
require("./routes/educatorRoutes.js")(app);
require("./routes/authenticationRoutes.js")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});