exports.validateSignup = (req, res, next) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  next();
};

exports.validateLogin = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  next();
};

exports.validateCreateMatch = (req, res, next) => {
  const { team_1, team_2, date, venue } = req.body;
  if (!team_1 || !team_2 || !date || !venue) {
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
