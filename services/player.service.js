const db = require("../config/db");

exports.getPlayerStats = async (playerId) => {
  const sql = "SELECT * FROM statistics WHERE player_id = ?";

  const [playerStats] = await db.execute(sql, [playerId]);

  if (playerStats.length === 0) {
    throw new Error("Player not found");
  }

  return playerStats[0];
};
