const pool = require("./db");
const bcrypt = require("bcrypt");
const lessons = require("./lesson.json");
const flashCards = require("./flashcard.json");

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
  getLesson: (req, res) => {
    const { id } = req.params;
    const dataToSend = [];
    for (let i in lessons) {
      if (lessons[i].lessonId === +id) {
        dataToSend.push(lessons[i]);
      }
    }
    res.status(200).send(dataToSend);
  },
  getFlashcards: (req, res) => {
    const { id } = req.params;
    const dataToSend1 = [];
    for (let i in flashCards) {
      if (flashCards[i].lesson_id === +id) {
        dataToSend1.push(flashCards[i]);
      }
    }
    res.status(200).send(dataToSend1);
  },
  getTest: async (req, res) => {
    {
      let dataQuery = await pool.query("SELECT * FROM test");
      res.status(200).send(dataQuery.rows[0]);
    }
  },
};
