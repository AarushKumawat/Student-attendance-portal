const jwt = require ("jsonwebtoken");
require('dotenv').config()
const db = require('../src/config/db')

const isStudentAuthenticated = async (
  req,
  res,
  next
) => {
  try {
    const query = `SELECT * FROM student_token WHERE token= ?`;
    const authHeader = req.header("Authorization");
    const token = authHeader ? authHeader.replace("Bearer ", "") : null;
    const value = [token];
    const data = await db.query(query, value);

    if (data.rowCount === null) {
      return res.json({ status: false, message: "No user" });
    }
    if (data.rowCount < 1) {
      return res
        .status(401)
        .json({ status: false, message: "Unauthorized user!" });
    }
    const userId = data[0][0].fk_student;
    const userQuery = `SELECT * FROM studentinformation WHERE id = ?`;
    const userQueryParams = [userId];
    const userQueryData = await db.query(userQuery, userQueryParams);

    req.user = userQueryData[0][0];
    req.token = token;
    next();
  } catch (err) {}
};
const generateStudentToken = async (user_id) => {
  try {
    console.log(user_id);
    
    const timestamp = new Date();
    const key = process.env.TOKEN_SECRET || "default_secret_token";
    const token = jwt.sign({ id: user_id }, key, { expiresIn: "24h" });
    const tokenRecord = `INSERT INTO student_token(token, fk_student, created_at) VALUES(?, ?, ?)`;
    const values = [token, user_id, timestamp];
    await db.query(tokenRecord, values);
    return token;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {generateStudentToken, isStudentAuthenticated}
