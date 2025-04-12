/**
 * This is a complete example of an MCP server.
 */
import { z } from "zod";
import { FastMCP } from "fastmcp";

const server = new FastMCP({
  name: "Test",
  version: "1.0.0",
});

// --- Zod Example ---
const AddParamsZod = z.object({
  a: z.number().describe("The first number"),
  b: z.number().describe("The second number"),
});

server.addTool({
  name: "add-zod",
  description: "Add two numbers (using Zod schema)",
  parameters: AddParamsZod,
  execute: async (args) => {
    // args is typed as { a: number, b: number }
    console.log(`[Zod] Adding ${args.a} and ${args.b}`);
    return String(args.a + args.b);
  },
});

server.start({
  transportType: "stdio",
});