
🤖 Multi-AI Assistant (React + Vite)

A React + Vite application that integrates Google AI, OpenAI (ChatGPT), and DeepSeek AI into a single interface.
Users can ask questions and get responses from different AI models, each with their own functionality and unique strengths.

✨ Features

🔹 Multi-AI support → Choose between Google AI, OpenAI, or DeepSeek AI

🔹 Real-time responses with smooth UI

🔹 Component-based architecture for easy maintenance

🔹 Environment variables for secure API key management (.env.local)

🔹 Hot Module Reload (HMR) with Vite for fast development

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME

2️⃣ Install dependencies
npm install

3️⃣ Setup environment variables

Copy the example file:

cp .env.example .env.local


Edit .env.local and add your API keys:

VITE_OPENAI_API_KEY=your_openai_key_here
VITE_GOOGLE_API_KEY=your_google_key_here
VITE_DEEPSEEK_API_KEY=your_deepseek_key_here


⚠️ Your .env.local is ignored by Git → safe from being uploaded.

4️⃣ Run the app
npm run dev


Visit 👉 http://localhost:5173

📂 Project Structure
src/
│-- Components/
│   └-- Theme/          # UI theme handling
│-- assistants/
│   ├-- openai.js       # OpenAI API integration
│   ├-- googleai.js     # Google AI API integration
│   └-- deepseekai.js   # DeepSeek AI API integration
│-- App.jsx
.env.example

🤝 Contributing

Contributions are welcome!

Fork the repo

Create a new branch

Commit and push your changes

Open a Pull Request

📜 License

This project is licensed under the MIT License.

🙌 Acknowledgements

React

Vite

OpenAI

Google AI

DeepSeek AI
