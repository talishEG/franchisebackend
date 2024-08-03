const express = require('express')
const app = express()
const config = require("./config/envConfig");
const apiRoutes = require("./routes/apiRoutes");
const connect = require("./config/db");
const cors = require('cors');

// database connection
connect();
const port = config.PORT;

// Use CORS middleware
app.use(cors());

app.use(express.json());

// Api Routes
app.use('/api/v1',apiRoutes);

// Home Page
app.get('/', (req, res) => {
    res.json({"message" : "Welcome To Learning Design Backend"});
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});