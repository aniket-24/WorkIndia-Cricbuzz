const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (username, password, email) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = "INSERT INTO admin (username, password, email) VALUES (?, ?, ?)";

  const [result] = await db.execute(sql, [username, hashedPassword, email]);

  return {
    status: "Admin Account successfully created",
    status_code: 200,
    user_id: result.insertId,
  };
};

exports.login = async (username, password) => {
  const sql = "SELECT * FROM admin WHERE username = ?";

  const [results] = await db.execute(sql, [username]);

  if (
    results.length > 0 &&
    (await bcrypt.compare(password, results[0].password))
  ) {
    const token = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET);

    return {
      status: "Admin Login successful",
      status_code: 200,
      user_id: results[0].id,
      access_token: token,
    };
  } else {
    return {
      status: "Incorrect username/password provided. Please retry",
      status_code: 401,
    };
  }
};
