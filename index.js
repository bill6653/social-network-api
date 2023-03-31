const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

// imporst route files
const userRoutes = require("./routes/api/userRoutes");
const thoughtRoutes = require("./routes/api/thoughtRoutes");
const cwd = process.cwd();

const PORT = process.env.port || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes);

// user Routes
app.use("/users", userRoutes);
app.use("/thoughts", thoughtRoutes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
