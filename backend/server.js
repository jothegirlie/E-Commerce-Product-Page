const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ecommerce shoe shop",
  password: process.env.DB_PASSWORD,
  port: 5432,
});

app.get("/api/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products ORDER BY id");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});


const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      error: "Access token required",
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        error: "Invalid or expired token",
      });
    }

    req.user = user;
    next();
  });
};


// SIGN UP

app.post("/api/auth/signup", async (req, res) => {
  try {
    const { fullname, email, password } = req.body; 

    console.log("SIGNUP BODY:", req.body);
    console.log("FULLNAME:", fullname);

    if (!email || !password || !fullname) {
      return res.status(400).json({
        error: "Name, email and password are required",
      });
    }

    // Check if the email already exists
    const existingUser = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({
        error: "Email is already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    // Create the user
    const result = await pool.query(
      "INSERT INTO users (full_name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, full_name, email, created_at",
      [fullname,email,hashedPassword]
    );

    console.log("INSERT RESULT:", result.rows[0]);

    res.status(201).json({
      message: "User created successfully",
      user: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Server error",
    });
  }
});

// SIGN UP end

// LOG IN 

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: "Email and password are required",
      });
    }

    // Find the user
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        error: "No user found with these credentials",
      });
    }

    const user = result.rows[0];

    // Compare the entered password with the stored hash
    const passwordMatches = await bcrypt.compare(
      password,
      user.password_hash
    );

    if (!passwordMatches) {
      return res.status(401).json({
        error: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    
    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.full_name
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Server error",
    });
  }
});

// LOG IN END

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});

// GET - Update Name / Email

app.post("/api/auth/update", async (req, res) => {
  try {
    const { fullname, email } = req.body;
    await pool.query("UPDATE users SET full_name = $1 WHERE email =$2" , 
      [fullname,email])
      res.json({message:"success"})
  }catch(error){
    res.json({error: "something went wrong!"})
  }
  }
)


