const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const connectDB = require("./db");

const app = express();

// Middleware to parse form data and JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to the database
let db;
connectDB().then((database) => {
  db = database;
});

// Sign-In Route
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await db.collection("users").findOne({ email });

    if (user) {
      // Compare the plain-text password with the hashed password
      const isPasswordValid = bcrypt.compareSync(password, user.password);

      if (isPasswordValid) {
        res.send("Login successful! Welcome, " + user.user_name);
      } else {
        res.status(401).send("Email or password is incorrect.");
      }
    } else {
      res.status(401).send("Email or password is incorrect.");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("An error occurred. Please try again.");
  }
});


// Sign-Up Route
app.post("/signup", async (req, res) => {
  const { first_name, last_name, phone_number, email, password} = req.body;

  // Hash the password
  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const userExists = await db.collection("users").findOne({ email });
    if (userExists) {
      return res.status(400).send("Email is already in use.");
    }

    // Derive username from last name
    const userName = last_name;

    const newUser = {
      first_name,
      last_name,
      user_name: userName, 
      phone_number,
      email,
      password: hashedPassword,
    };

    await db.collection("users").insertOne(newUser);
    res.send("Sign up successful! Please log in.");
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).send("An error occurred. Please try again.");
  }
});


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
