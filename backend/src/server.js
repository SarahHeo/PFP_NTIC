const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path');

var corsOptions = {
    origin: true,
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, "images/picto")));
// so now we can access and read files in localhost:8080/images/picto/
// localhost:8080/ + url picto will now work

app.get("/", (req, res) => {
  res.json({ message: "PFP NTIC API is running" });
});

require("./routes/pictogramRoutes.js")(app);
require("./routes/userRoutes.js")(app);
require("./routes/educatorRoutes.js")(app);
require("./routes/authenticationRoutes.js")(app);
require("./routes/pictoUploadRoutes.js")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});