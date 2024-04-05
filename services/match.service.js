const db = require("../config/db");

exports.createMatch = async (team1, team2, date, venue) => {
  const sql =
    "INSERT INTO match (team_1, team_2, date, venue) VALUES (?, ?, ?, ?)";

  const [result] = await db.execute(sql, [team1, team2, date, venue]);

  return {
    message: "Match created successfully",
    match_id: result.insertId,
  };
};

exports.getMatches = async () => {
  const sql = "SELECT * FROM match";

  const [matches] = await db.execute(sql);

  return matches;
};

exports.getMatchDetails = async (matchId) => {
  const sql = `
    SELECT
      m.id AS match_id,
      m.team_1,
      m.team_2,
      m.date,
      m.venue,
      m.status,
      (
        SELECT JSON_ARRAYAGG(
          JSON_OBJECT(
            'player_id', p.id,
            'name', p.name
          )
        )
        FROM player p
        WHERE p.team_id = (SELECT id FROM team WHERE name = m.team_1)
      ) AS team_1_squad,
      (
        SELECT JSON_ARRAYAGG(
          JSON_OBJECT(
            'player_id', p.id,
            'name', p.name
          )
        )
        FROM player p
        WHERE p.team_id = (SELECT id FROM team WHERE name = m.team_2)
      ) AS team_2_squad
    FROM match m
    WHERE m.id = ?
  `;

  const [matchDetails] = await db.execute(sql, [matchId]);

  if (matchDetails.length === 0) {
    throw new Error("Match not found");
  }

  return matchDetails[0];
};
