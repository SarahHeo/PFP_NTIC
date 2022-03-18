const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:19006"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "PFP NTIC API is running" });
});

require("./routes/pictogramRoutes.js")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});