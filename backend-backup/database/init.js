const db = require("./database");

// USERS TABLE
db.exec(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role TEXT DEFAULT 'user',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
`);

// SURVEY APPLICATIONS TABLE
db.exec(`
CREATE TABLE IF NOT EXISTS survey_applications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    application_number TEXT UNIQUE,
    applicant_name TEXT NOT NULL,
    address TEXT NOT NULL,
    contact_number TEXT,
    purpose TEXT NOT NULL,
    status TEXT DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
    REFERENCES users(id)
);
`);

console.log("My Geo database tables created successfully!");

db.close();