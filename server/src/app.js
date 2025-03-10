// const express = require("express");
// const app = express();
// const { config } = require("dotenv");
// config();
// const WebSocket = require("ws");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");



// //* Require connection.js file (to connect with mongoDB server) 
// require("./db/connection.js");


// //* Require index router file  
// const router = require("./routers/index.route.js");


// //* Define necessary middlewares  
// app.use(express.json());
// app.use(express.urlencoded({
//     extended : true 
// }));
// app.use("/api/v1", router);
// app.use(cors({
//     origin: ["http://localhost:5173", "http://localhost:5173/"],
//     credentials: true,  
//     methods: ["POST", "GET", "PATCH", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
// }));

// app.use(cookieParser());


// //* Creating express server  
// const server = app.listen(process.env.PORT, () => {
//     console.log(`Server is listening on PORT number ${process.env.PORT}`);
// });



// //* Creating the web socket server 
// const wss = new WebSocket.Server({
//     server : server
// });



const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const WebSocket = require("ws");

// Load environment variables
dotenv.config();

const app = express();

// Connect to MongoDB
require("./db/connection.js");

// Import routes
const router = require("./routers/index.route.js");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Improved CORS setup
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"], // Allow frontend
    credentials: true,
    methods: ["POST", "GET", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Register routes
app.use("/api/v1", router);

const PORT = process.env.PORT || 5000;

// Start Express server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// WebSocket server setup
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("New WebSocket connection");

  ws.on("message", (message) => {
    console.log("Received:", message);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
