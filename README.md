# AI-Powered Chatbot Demo

This is a simple AI-powered chatbot demo that can answer questions about careers, tech trends, and event information.

## Features

- Modern and responsive UI
- Real-time conversation with the AI assistant
- Predefined responses for demonstration purposes
- Easy to extend with actual AI API integration

## How to Use

1. Open the `index.html` file in a web browser
2. Type your question in the input field at the bottom
3. Press Enter or click the Send button
4. The chatbot will respond with relevant information based on your query

## Topics the Chatbot Can Discuss

- **Careers in Technology**: Ask about different tech career paths, how to get started, or skills needed
- **Technology Trends**: Inquire about emerging technologies, future trends, or innovations
- **Event Information**: Learn more about this demo, the tech expo, or other event details

## Integration with Real AI APIs

The current implementation uses predefined responses for demonstration purposes. For production use, you can uncomment and configure the OpenAI API integration code in the `script.js` file.

To use the OpenAI integration:
1. Sign up for an API key at [OpenAI](https://openai.com)
2. Replace 'YOUR_API_KEY' in the code with your actual API key
3. Uncomment the API integration code
4. Modify the `processUserInput` function to use the `callOpenAI` function

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## Demo Limitations

This is a demonstration project with limited capabilities. The chatbot:
- Can only respond to predefined topics
- Does not maintain context across multiple messages
- Has no memory of previous conversations

For a full-featured chatbot, consider implementing a more robust solution using frameworks like:
- OpenAI's GPT models
- Google's Dialogflow
- Rasa Open Source 