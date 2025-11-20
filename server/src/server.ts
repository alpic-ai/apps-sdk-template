import { type CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { McpServer } from "skybridge/server";

const server = new McpServer(
  {
    name: "alpic-openai-app",
    version: "0.0.1",
  },
  { capabilities: {} },
);

server.widget(
  "catalog",
  {
    description: "catalog of components",
  },
  {
    description: "Use this tool to display the full catalog of components from @openai/apps-sdk-ui",
  },
  async (): Promise<CallToolResult> => {
    return {
      content: [{ type: "text", text: `Full catalog of components` }],
      isError: false,
    };
  },
);

export default server;
