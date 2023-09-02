import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./src/database/schema/*",
  driver: "pg",
  out: "./migrations",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL!,
    ssl: true,
  },
} satisfies Config;
