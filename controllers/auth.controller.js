const authService = require("../services/auth.service");

exports.signup = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const result = await authService.signup(username, password, email);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await authService.login(username, password);
    res.status(200).json(result);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};
