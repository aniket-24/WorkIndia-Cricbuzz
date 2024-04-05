const authService = require("../services/auth.service");

exports.signup = async (req, res) => {
  try {
    const { username, password, email, role } = req.body;
    const result = await authService.signup(username, password, email, role);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const result = await authService.login(username, password, role);
    res.status(200).json(result);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};
