exports.validateSignup = (req, res, next) => {
  const { username, password, email, role } = req.body;
  if (
    !username ||
    !password ||
    !email ||
    !role ||
    !["admin", "guest"].includes(role)
  ) {
    return res
      .status(400)
      .json({ error: "Missing or invalid required fields" });
  }
  next();
};

exports.validateLogin = (req, res, next) => {
  const { username, password, role } = req.body;
  if (!username || !password || !role || !["admin", "guest"].includes(role)) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  next();
};

exports.validateCreateMatch = (req, res, next) => {
  const { team1, team2, date, venue } = req.body;
  if (!team1 || !team2 || !date || !venue) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  next();
};

exports.validateAddPlayerToSquad = (req, res, next) => {
  const { name, role } = req.body;
  if (!name || !role) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  next();
};
