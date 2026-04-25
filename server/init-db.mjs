import { drizzle } from "drizzle-orm/mysql2";
import { appSettings } from "../drizzle/schema.ts";

const db = drizzle(process.env.DATABASE_URL);

async function initializeDatabase() {
  try {
    console.log("Initializing database...");
    
    // Check if settings exist
    const existing = await db.select().from(appSettings).limit(1);
    
    if (existing.length === 0) {
      // Insert default settings
      await db.insert(appSettings).values({
        downloadLink: "https://example.com/download",
        appName: "Yacine TV",
      });
      console.log("✓ Database initialized with default settings");
    } else {
      console.log("✓ Database already initialized");
    }
  } catch (error) {
    console.error("Error initializing database:", error);
    process.exit(1);
  }
}

initializeDatabase();
