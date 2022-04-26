/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "./items/items.router";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet()); // Middleware
app.use(cors()); // Cross Origin Request Sharing
app.use(express.json());
app.use("/api/menu/items", itemsRouter);

/**
 * Server Activation
 */

app.listen(PORT, () => { // Exposes the PORT
    console.log(`Listening on port ${PORT}`);
});
