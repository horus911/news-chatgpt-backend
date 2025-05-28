const backendUrl = 'https://news-chatgpt-backend.onrender.com/'; // <-- remplace par ton URL Render

async function getSummary(text) {
  const response = await fetch(`${backendUrl}/api/summarize`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text })
  });
  const data = await response.json();
  return data.summary;
}
