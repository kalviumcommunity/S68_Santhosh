const db = require("../Database/database");

const createUserTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )
  `;
  db.query(sql, (err) => {
    if (err) throw err;
    console.log("Users table created or already exists.");
  });
};

createUserTable();

module.exports = db;
