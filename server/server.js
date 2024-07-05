import express from "express";
import cors from "cors";
import api from "./routes/api.js";

const PORT = process.env.PORT || 5050;
const app = express();

const logger = (req, res, next) => {
  console.log(`Route accessed: ${req.method} ${req.originalUrl}`);
  console.log('Request Body:', req.body);
  console.log('Request Params:', req.params);
  console.log('Request Query:', req.query);
  next();
};

app.use(cors());
app.use(express.json());
app.use(logger); // Apply the logging middleware globally
app.use("/api", api);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});