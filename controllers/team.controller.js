const teamService = require("../services/team.service");

exports.addPlayerToSquad = async (req, res) => {
  try {
    const teamId = req.params.teamId;
    const { name, role } = req.body;
    const result = await teamService.addPlayerToSquad(teamId, name, role);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
