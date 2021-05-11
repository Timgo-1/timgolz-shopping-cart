import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny")); // logging framework

// Serve our api message
app.get("/api/message", async (req, res, next) => {
  try {
    res.status(201).json({ message: "HELLOOOOO FROM EXPRESS" });
  } catch (err) {
    next(err);
  }
});

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  app.use(express.static("build"));

  // Express will serve up the front-end index.html file if it doesn't recognize the route
  app.get("*", (req, res) =>
    res.sendFile(path.resolve("build", "index.html"))
  );
}

// Choose the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));

