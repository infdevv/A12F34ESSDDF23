const webhookURL = 'https://discord.com/api/webhooks/1138128961600233592/wJno4qUlZJV2ra0Nt1lD42GjsU-iVZURWHxR9p2FvlU2fCsYLU09iIX5cxmt5M1UVu_8';
const message = '!cdelete token';

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
