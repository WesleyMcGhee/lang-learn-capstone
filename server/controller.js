const pool = require("./db");
const bcrypt = require("bcrypt");
module.exports = {
  postSignup: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);
      const newUser = await pool.query(
        "INSERT INTO users (username, password, lessonid, languageid, email) VALUES ($1, $2, 1, 1, $3);",
        [username, password, email]
      );
      res.json(newUser.rows[0]);
    } catch (err) {
      console.error(err);
    }
  },
};
