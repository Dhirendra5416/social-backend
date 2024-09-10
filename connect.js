import mysql from "mysql2";
import dotenv from "dotenv"

// Load environment variables from the .env file
dotenv.config();

// MySQL Database connection
export const db = mysql.createConnection({
host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
 
//Establish connection to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        return;
    }
    console.log('Connected to the database successfully!');
});