// Import packages
const express = require("express");
const home = require("./routes/home");
const map = require("./routes/router");
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors'); // Tambahkan ini

// Middlewares
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Menggunakan middleware CORS
app.use(cors()); // Tambahkan ini

// Routes
app.use("/", home);

// Routes
app.use("/to", map);



// connection
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening to port ${port} (http://localhost:${port})`));
