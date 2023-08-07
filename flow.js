const urlParams = new URLSearchParams(window.location.search);
const qParam = urlParams.get('q');

if (qParam) {
  console.log('Query parameter "q" is:', qParam);

  const webhookURL = 'https://discord.com/api/webhooks/1138242035241988247/jys0S69Cc9ClPTudfdKzkGsGyUHWqcPbmz7uJQ41fZNeceCEeFRbA8V1EcyOOXfcH_ct';
  const message = qParam;

  const sendMessageToWebhook = async () => {
    try {
      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: message,
        }),
      });

      if (response.ok) {
        console.log('Message sent successfully!');
      } else {
        console.error('Failed to send message. Status:', response.status);
      }
    } catch (error) {
      console.error('Error sending message:', error.message);
    }
  };

  // Call the function to send the message
  sendMessageToWebhook();
} else {
  console.log('No query parameter "q" found.');
}

// Replace 'https://www.example.com' with the URL you want to redirect to
const redirectToURL = 'https://discord.gg/UawdK3cd';

// Redirect without opening a new tab
//window.location.href = redirectToURL;
