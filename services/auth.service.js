const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (username, password, email, role) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const sql =
    "INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)";

  const [result] = await db.execute(sql, [
    username,
    hashedPassword,
    email,
    role,
  ]);

  return {
    status: `${role} Account successfully created`,
    status_code: 200,
    user_id: result.insertId,
  };
};

exports.login = async (username, password, role) => {
  const sql = "SELECT * FROM users WHERE username = ? AND role = ?";

  const [results] = await db.execute(sql, [username, role]);

  if (
    results.length > 0 &&
    (await bcrypt.compare(password, results[0].password))
  ) {
    const token = jwt.sign(
      { id: results[0].id, role: results[0].role },
      process.env.JWT_SECRET
    );

    return {
      status: "Login successful",
      status_code: 200,
      user_id: results[0].id,
      access_token: token,
      role: results[0].role,
    };
  } else {
    return {
      status: "Incorrect username/password/role provided. Please retry",
      status_code: 401,
    };
  }
};
