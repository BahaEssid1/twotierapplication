const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // serve HTML, CSS, JS

let db;

function connectWithRetry() {
  db = mysql.createConnection({
    host: "contacts-db",  // container name
    user: "root",
    password: "rootpassword",
    database: "contactsdb"
  });

  db.connect(err => {
    if (err) {
      console.error("Erreur connexion MySQL, retrying in 2s...", err);
      setTimeout(connectWithRetry, 2000);
    } else {
      console.log("Connexion MySQL OK.");

      // Start Express server only once DB is ready
      app.listen(3000, () => {
        console.log("Frontend/Backend server running on port 3000");
      });
    }
  });
}

connectWithRetry();

// Routes
app.post("/contacts", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ message: "Champs manquants" });

  db.query("INSERT INTO contacts (name, email) VALUES (?, ?)", [name, email], (err) => {
    if (err) {
      console.error("Erreur insertion:", err);
      return res.status(500).json({ message: "Erreur serveur" });
    }
    res.json({ message: "Contact ajouté" });
  });
});

app.get("/contacts", (req, res) => {
  db.query("SELECT * FROM contacts", (err, results) => {
    if (err) return res.status(500).json({ message: "Erreur serveur" });
    res.json(results);
  });
});
