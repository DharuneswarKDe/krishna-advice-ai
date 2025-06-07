
// API service for the Krishna AI backend

// Define the base URL for your Python backend
const API_BASE_URL = 'http://localhost:8082'; // Change this to your actual backend URL

// Function to send chat messages to the backend
export async function sendChatMessage(userInput: string, generation: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_input: userInput,
        generation: generation // Pass the selected generation to tailor responses
      }),
    });
    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }
    const result = await response.json();
    return{
      content: result.response };
  } catch (error) {
    console.error('Error sending message:', error);
    return {
      content: "I'm having trouble connecting to my wisdom source. Please try again later.",
    };
  }
}

// Check if the backend is available
export async function checkBackendStatus(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}`);
    return response.ok;
  } catch (error) {
    console.error('Backend connectivity error:', error);
    return false;
  }
}
