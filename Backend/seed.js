const db = require("./Database/database");


const users = [
  { name: "Alice" },
  { name: "Bob" },
  { name: "Charlie" },
];

users.forEach((user) => {
  db.query("INSERT INTO users (name) VALUES (?)", [user.name], (err) => {
    if (err && err.code !== "ER_DUP_ENTRY") console.error("User insert error:", err);
  });
});


const entities = [
  { name: "Entity 1", description: "Description 1", created_by: 1 },
  { name: "Entity 2", description: "Description 2", created_by: 2 },
  { name: "Entity 3", description: "Description 3", created_by: 3 },
];

entities.forEach((entity) => {
  db.query("INSERT INTO entities (name, description, created_by) VALUES (?, ?, ?)", 
  [entity.name, entity.description, entity.created_by], 
  (err) => {
    if (err && err.code !== "ER_DUP_ENTRY") console.error("Entity insert error:", err);
  });
});

console.log("Database seeded successfully!");
