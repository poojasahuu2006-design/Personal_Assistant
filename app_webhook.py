import sys

import requests

user_message = "can you tell me about love in 3 to 4 lines?"
request_message = {"message": user_message}

webhook_id = "5fc7391a-1c76-4b14-aaf4-a01f37a8f011"
url = f"https://pooja656564.app.n8n.cloud/webhook-test/{webhook_id}"

response = requests.post(url, json=request_message, timeout=15)

print("Status:", response.status_code)

try:
    payload = response.json()
except ValueError:
    payload = response.text

if response.ok:
    print(payload)
else:
    print(f"Webhook error: {payload}")
    if response.status_code == 404:
        print("In n8n test mode, click 'Execute workflow' on the canvas before sending the request again.")
    sys.exit(1)