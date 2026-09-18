# Personal Assistant (n8n Workflow)

An AI-powered Personal Assistant built with n8n, integrating Gmail, Google Calendar, 
Google Sheets (expense tracking), Notes, and Task management through a single 
conversational AI Agent triggered via webhook.

## Features
- 📧 **Gmail** — Read, fetch, and send emails
- 📅 **Google Calendar** — Create and view calendar events
- 💰 **Expense Tracking** — Add and read expenses via Google Sheets, with automatic calculation support
- 📝 **Notes** — Create, update, and read notes (Google Docs)
- ✅ **Tasks** — Create, view, and delete tasks
- 🌐 **Web Scraping** — Fetch and summarize content from any URL (via Firecrawl)

All powered by a single AI Agent that intelligently picks the right tool based on natural language input.

## Files
- `Personal Assistant _n8n.json` — Exported n8n workflow (import this into n8n)
- `app_webhook.js` — Node.js script to test the webhook endpoint

## Setup
1. Import the JSON file into your n8n instance
2. Reconnect all credentials (Gmail, Google Calendar, Google Sheets OAuth, OpenAI API key)
3. Update the `webhookId` and `url` in `app_webhook.js` with your own instance details
4. Run the following to test:
```bash
   node app_webhook.js
```

## Example Usage
Send a POST request with a JSON body like:
```json
{ "message": "Add an expense of 500 rupees for food today" }
```

The AI Agent will automatically detect intent and use the appropriate tool (Calendar, Sheets, Gmail, Notes, or Tasks) to fulfill the request.

## Tech Stack
- **n8n** — Workflow automation & AI Agent orchestration
- **OpenAI (GPT)** — LLM powering the AI Agent
- **Node.js** — Webhook testing script
- **Google APIs** — Gmail, Calendar, Sheets, Docs integration
