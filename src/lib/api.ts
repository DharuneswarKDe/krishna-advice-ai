
// API service for the Krishna AI backend

// Define the base URL for your Python backend
const API_BASE_URL = 'http://localhost:5000'; // Change this to your actual backend URL

export interface ChatResponse {
  content: string;
  references?: string[];
}

// Function to send chat messages to the backend
export async function sendChatMessage(message: string, generation?: string): Promise<ChatResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        generation, // Pass the selected generation to tailor responses
      }),
    });

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }

    return await response.json();
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
    const response = await fetch(`${API_BASE_URL}/api/health`);
    return response.ok;
  } catch (error) {
    console.error('Backend connectivity error:', error);
    return false;
  }
}
