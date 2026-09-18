const userMessage = "can you tell me about love in 3 to 4 lines?";
const requestMessage = { message: userMessage };

const webhookId = "5fc7391a-1c76-4b14-aaf4-a01f37a8f011";
const url = `https://pooja656564.app.n8n.cloud/webhook-test/${webhookId}`;

async function testWebhook() {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestMessage),
    });

    console.log("Status:", response.status);

    const payload = await response.json().catch(() => response.text());

    if (response.ok) {
      console.log(payload);
    } else {
      console.log("Webhook error:", payload);
      if (response.status === 404) {
        console.log(
          "In n8n test mode, click 'Execute workflow' on the canvas before sending the request again."
        );
      }
      process.exit(1);
    }
  } catch (error) {
    console.error("Request failed:", error.message);
    process.exit(1);
  }
}

testWebhook();