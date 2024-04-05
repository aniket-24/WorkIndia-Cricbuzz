const db = require("../config/db");

exports.addPlayerToSquad = async (teamId, name, role) => {
  const sql = "INSERT INTO player (name, role, team_id) VALUES (?, ?, ?)";

  const [result] = await db.execute(sql, [name, role, teamId]);

  return {
    message: "Player added to squad successfully",
    player_id: result.insertId,
  };
};
