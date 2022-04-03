const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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