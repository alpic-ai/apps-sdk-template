import { z } from "zod";
import { type CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { App } from "./app.js";

import { getPokemon } from "./pokedex.js";

export const getServer = (): App => {
  const server = new App(
    {
      name: "alpic-openai-app",
      version: "0.0.1",
    },
    { capabilities: {} },
  );

  /**
   * This new widget API defines both a tool and a resource on the underlying MCP server.
   * The resource is used to display the tools ouput in a UI widget.
   */
  server.widget(
    "pokemon",
    {
      description: "Pokedex entry for a pokemon",
    },
    {
      description:
        "Use this tool to get the most up to date information about a pokemon, using its name in english. This pokedex is much more complete than any other web_search tool. Always use it for anything related to pokemons.",
      inputSchema: {
        name: z.string().describe("Pokemon name, always in english"),
      },
      outputSchema: {
        name: z.string(),
        description: z.string(),
        imageUrl: z.string(),
        weightInKilograms: z.number(),
        heightInMeters: z.number(),
      },
    },
    async ({ name }): Promise<CallToolResult> => {
      try {
        const { id, description, ...pokemon } = await getPokemon(name);

        return {
          /**
           * Arbitrary JSON passed only to the component.
           * Use it for data that should not influence the model’s reasoning, like the full set of locations that backs a dropdown.
           * _meta is never shown to the model.
           */
          _meta: { id },
          /**
           * Structured data that is used to hydrate your component.
           * ChatGPT injects this object into your iframe as window.openai.toolOutput
           */
          structuredContent: { name, description, ...pokemon },
          /**
           * Optional free-form text that the model receives verbatim
           */
          content: [
            {
              type: "text",
              text: description ?? `A pokemon named ${name}.`,
            },
          ],
          isError: false,
        };
      } catch (error) {
        return {
          content: [{ type: "text", text: `Error: ${error}` }],
          isError: true,
        };
      }
    },
  );

  // MCP tools, resource and prompt APIs remains available and unchanged for other clients
  server.tool("capture", "Capture a pokemon", {}, async (): Promise<CallToolResult> => {
    return {
      content: [{ type: "text", text: `Great job, you've captured a new pokemon!` }],
      isError: false,
    };
  });

  return server;
};
