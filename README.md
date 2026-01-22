# Apps SDK Template

A minimal TypeScript template for building ChatGPT and MCP Apps with widget rendering.

**This template has been generated and is powered by [Skybridge](https://github.com/alpic-ai/skybridge).**

## Getting Started

### Prerequisites

- Node.js 24+
- pnpm (install with npm install -g pnpm)
- HTTP tunnel such as [ngrok](https://ngrok.com/download)

### Local Development

#### 1. Install

```bash
git clone git@github.com:alpic-ai/apps-sdk-template.git
cd apps-sdk-template
pnpm install
```

#### 2. Start your local server

Run the development server from the root directory:

```bash
pnpm dev
```

Open DevTools to test your app locally: http://localhost:3000/
MCP server running at:  http://localhost:3000/mcp

#### 3. Connect to ChatGPT

- ChatGPT requires connectors to be publicly accessible. To expose your server on the Internet, run:
```bash
ngrok http 3000
```
- In ChatGPT, navigate to **Settings → Connectors → Create** and add the forwarding URL provided by ngrok suffixed with `/mcp` (e.g. `https://3785c5ddc4b6.ngrok-free.app/mcp`)

### Create your first widget

#### 1. Add a new widget

- Register a widget in `server/server.ts` with a unique name (e.g., `my-widget`)
- Create a matching React component at `web/src/widgets/my-widget.tsx`. The file name must match the widget name exactly

#### 2. Edit widgets with Hot Module Replacement (HMR)

Edit and save components in `web/src/widgets/` — changes appear instantly in the host

#### 3. Edit server code

Modify files in `server/` and reload your ChatGPT connector in **Settings → Connectors → [Your connector] → Reload**

## Deploy to Production

Use [Alpic](https://alpic.ai/) to deploy your OpenAI App to production

[![Deploy on Alpic](https://assets.alpic.ai/button.svg)](https://app.alpic.ai/new/clone?repositoryUrl=https%3A%2F%2Fgithub.com%2Falpic-ai%2Fapps-sdk-template)

- In ChatGPT, navigate to **Settings → Connectors → Create** and add your MCP server URL (e.g., `https://your-app-name.alpic.live`)

## Resources

- [Skybridge Documentation](https://docs.skybridge.tech)
- [Apps SDK Documentation](https://developers.openai.com/apps-sdk)
- [Model Context Protocol Documentation](https://modelcontextprotocol.io/)
- [Alpic Documentation](https://docs.alpic.ai/)
