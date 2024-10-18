// server.js
import express from "express";
//import fs from "fs";
import { yakStockHandler, yakHerdHandler } from "./src/routes/yakRoutes.js";

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Define routes
app.get("/yak-shop/stock/:T", yakStockHandler);
app.get("/yak-shop/herd/:T", yakHerdHandler);

// Start the Express server
app.listen(PORT, () => {
  console.log(`YakShop server is running on http://localhost:${PORT}
=> http://localhost:${PORT}/yak-shop/stock/13
=> http://localhost:${PORT}/yak-shop/herd/13`);
});
