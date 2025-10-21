import express, { type Express } from "express";

import { mcp, widgetsDevServer } from "skybridge/server";
import type { ViteDevServer } from "vite";
import { env } from "./env.js";
import server from "./server.js";
// import path from "path";
// import { fileURLToPath } from "url";
// import cors from "cors";

const app = express() as Express & { vite: ViteDevServer };

app.use(express.json());

app.use(mcp(server));

if (env.NODE_ENV !== "production") {
  app.use(await widgetsDevServer());
}

// To be deleted, only for bridge testing purposes
// if (env.NODE_ENV === "production") {
//   const __filename = fileURLToPath(import.meta.url);
//   const __dirname = path.dirname(__filename);

//   // Enable CORS for all routes
//   app.use(cors());

//   app.use("/assets", express.static(path.join(__dirname, "assets")));
// }

app.listen(3000, (error) => {
  if (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }

  console.log(`Server listening on port 3000 - ${env.NODE_ENV}`);
  console.log(
    "Make your local server accessible with 'ngrok http 3000' and connect to ChatGPT with URL https://xxxxxx.ngrok-free.app/mcp",
  );
});

process.on("SIGINT", async () => {
  console.log("Server shutdown complete");
  process.exit(0);
});
