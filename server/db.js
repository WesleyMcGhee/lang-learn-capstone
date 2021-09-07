const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "ILikeDogs",
  host: "localhost",
  port: 5432,
  database: "langlearn",
});

module.exports = pool;
