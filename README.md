# Personal Assistant (n8n Workflow)

An AI-powered Personal Assistant built with n8n, integrating Gmail, Google Calendar, 
Google Sheets (expense tracking), Notes, and Task management through a single 
conversational AI Agent triggered via webhook.

## Files
- `Personal Assistant _n8n.json` — Exported n8n workflow (import this into n8n)
- `app_webhook.py` — Python script to test the webhook endpoint

## Setup
1. Import the JSON file into your n8n instance
2. Reconnect all credentials (Gmail, Google Calendar, Google Sheets OAuth)
3. Update the webhook URL in `app_webhook.py` with your own instance URL
4. Run `python app_webhook.py` to test
