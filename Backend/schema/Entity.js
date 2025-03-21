const db = require("../Database/database");

const createEntityTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS entities (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      created_by INT,
      FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE
    )
  `;
  db.query(sql, (err) => {
    if (err) throw err;
    console.log("Entities table created or already exists.");
  });
};

createEntityTable();

module.exports = db;
