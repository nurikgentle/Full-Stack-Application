require("dotenv").config();
const express = require('express');
const dbConnect = require("./dbConnect");
const cors = require("cors");
const app = express();
const movieRoutes = require("./routes/movies")

dbConnect();

app.use(express.json());
app.use(cors());

app.use("/api", movieRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
