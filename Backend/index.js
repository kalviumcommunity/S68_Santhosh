const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const entityRoutes = require("./routes/entityRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", entityRoutes);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
