const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Import routes
const adminRoutes = require("./routes/admin.routes");
const matchRoutes = require("./routes/match.routes");
const teamRoutes = require("./routes/team.routes");
const playerRoutes = require("./routes/player.routes");

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/matches", matchRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/players", playerRoutes);

app.get("/", async (req, res) => {
  res.send("Hello");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!!");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
