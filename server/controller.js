const pool = require("./db");
const bcrypt = require("bcrypt");

module.exports = {
  postSignup: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await pool.query(
        "INSERT INTO users (username, password, lessonid, languageid, email) VALUES ($1, $2, 1, 1, $3);",
        [username, hashedPassword, email]
      );
      res.json(newUser.rows[0]);
    } catch (err) {
      console.error(err);
    }
  },
  postSignin: async (req, res) => {
    try {
      const { username, password } = req.body;
      const salt = bcrypt.genSaltSync(10);
      const passHash = bcrypt.hashSync(password, salt);
      const usersLog = await pool.query(
        "SELECT id, username, password FROM users WHERE username = $1",
        [username]
      );
      let actUser = usersLog.rows[0];
      if (actUser.username === username) {
        let matched = bcrypt.compare(passHash, actUser.password);
        if (matched) {
          return res.status(200).send({ id: actUser.id, token: "key28834" });
        }
      } else {
        return res.status(200).send({ id: -1 });
      }
    } catch (err) {
      res.status(401).send("Username not availible");
    }
  },
  getUsers: async (req, res) => {
    try {
      const { id } = req.params;
      const userLog = await pool.query(
        "SELECT username, lessonid FROM users WHERE id = $1",
        [id]
      );
      res.status(200).send(userLog.rows[0]);
    } catch (err) {
      res.status(404).send("User not Found");
      console.error(err);
    }
  },
  getLesson: async (req, res) => {
    const { id } = req.params;
    const dataToSend = await pool.query(
      "SELECT * FROM lessoncontent WHERE lessonid = $1;",
      [id]
    );
    res.status(200).send(dataToSend.rows);
  },
  getFlashcards: async (req, res) => {
    const { id } = req.params;
    const dataToSend = await pool.query(
      "SELECT * FROM flashcards WHERE lessonid = $1",
      [id]
    );
    res.status(200).send(dataToSend.rows);
  },
  getTips: async (req, res) => {
    const { id } = req.params;
    const dataToSend = await pool.query(
      "SELECT * FROM tips WHERE lessonid = $1",
      [id]
    );
    res.status(200).send(dataToSend.rows);
  },
  getLogo: async (req, res) => {
    const dataToSend = await pool.query("SELECT * FROM lessons");
    res.status(200).send(dataToSend.rows);
  },
};
