const db = require("../config/db");

exports.findByUsername = async (username) => {
  const sql = "SELECT * FROM users WHERE username = ?";
  const [results] = await db.execute(sql, [username]);
  return results.length > 0 ? results[0] : null;
};
