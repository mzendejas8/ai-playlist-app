This app analyzes a mood, genre, or text description (like “sad indie road trip vibes”) and creates a playlist using the Spotify API. Built as a personal learning project to practice:
API integration
OAuth authentication
AI-assisted prompts
Frontend + backend engineering
Full-stack project structure
Git/GitHub workflow
🚀 Features
🎧 Generate songs based on text prompts (e.g., “lonely piano songs”, “2000s nostalgia indie”)
🤖 AI-powered mood → track transformation
🔍 Spotify search integration
📜 Create playlists inside the user’s Spotify account
🎨 Clean UI for entering prompts
🔒 Secure environment variable handling (.env)
🧰 Local development without requiring deployment
📦 Ready to expand into a full portfolio project
🛠️ Tech Stack
Frontend
HTML, CSS, JavaScript
(or React — depending on where you take it next)
Backend
Node.js + Express (Spotify OAuth & API calls)
OpenAI or local AI model for processing prompts
APIs
Spotify Web API (Search, Recommendations, Playlist creation)
OpenAI API (optional, for interpreting mood descriptions)
📁 Project Structure (example)
ai-playlist-app/
│
├── public/              # frontend assets
├── src/
│   ├── server.js        # Express backend
│   ├── spotify.js       # Spotify API helpers
│   ├── ai.js            # AI prompt processing
│   └── routes/
│       ├── auth.js      # OAuth login
│       └── playlist.js  # Playlist creation endpoints
│
├── .gitignore
├── .env.example
├── package.json
└── README.md
🔧 Setup & Installation
1. Clone the repo
git clone git@github.com:mzendejas8/ai-playlist-app.git
cd ai-playlist-app
2. Install dependencies
npm install
3. Create your environment file
cp .env.example .env
Add your keys:
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
OPENAI_API_KEY=
REDIRECT_URI=http://localhost:3000/callback
4. Run the app locally
npm start
🔐 Environment Variables
DO NOT commit .env.
The .env.example file is included to show what variables are expected.
🗺️ Roadmap
 Add AI mood analyzer
 Add full Spotify OAuth flow
 Build playlist generator UI
 Add custom cover art generator
 Add multi-genre recommendations
 Deploy frontend on GitHub Pages
 Deploy backend on Render or Railway
🤝 Contributing
This is a personal learning project.
Pull requests are welcome if you’d like to help improve it.
📄 License
MIT License
