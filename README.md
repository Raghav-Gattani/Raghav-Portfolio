# 👒 Raghav Gattani | One Piece Portfolio

A personal portfolio website with a **Luffy x Whitebeard** theme, built to showcase my projects, with a searchable project board and an AI chatbot that answers questions about me.

🌐 **Live website:** https://raghav-portfolio-five-coral.vercel.app/

---

## 🎯 About
I'm Raghav, a B.Tech 2nd year student who wants to become the **King of Developers**, a backend engineer as strong as Whitebeard.

## 🛠 Technologies
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Vercel Serverless Function (Node.js)
- **AI Chatbot:** Groq API (`openai/gpt-oss-20b`, with `openai/gpt-oss-120b` as fallback)
- **Tools:** Cursor AI, Git, GitHub, Vercel

## ✨ Features
- Sections: **Home, About Me, Skills, Projects, Contact, AI Chatbot**
- **Project search** by name or technology (try "Python", "Quiz" or "Book")
- **Tag filters** to narrow projects by technology
- **Light / Dark mode toggle** (Sunny Day / Night Sea), saved between visits
- **Responsive design** for desktop and mobile, with a mobile menu
- **AI chatbot** that answers questions about my skills, education and projects using my portfolio data
- Clear **error message** in the chat if the API request fails
- API key stored in **Vercel environment variables**, never in the code or GitHub

## 📂 Projects
| # | Project | GitHub | Live |
|---|---------|--------|------|
| 1 | Python Programs Collection | [Python-Programs](https://github.com/Raghav-Gattani/Python-Programs) | - |
| 2 | Messy Python Code Improvement | [messy-code](https://github.com/Raghav-Gattani/messy-code) | - |
| 3 | Bug Fixing Using Cursor AI | [bug-fixing](https://github.com/Raghav-Gattani/bug-fixing) | - |
| 4 | Interactive Quiz Application | [quiz-app](https://github.com/Raghav-Gattani/quiz-app) | [Open](https://quiz-app-theta-ashy-30.vercel.app/) |
| 5 | Book Reading List Application | [reading-list](https://github.com/Raghav-Gattani/reading-list) | [Open](https://reading-list-gc4c.vercel.app/) |

## 📁 Project Structure
```
├── index.html        # Website (HTML, CSS, JS)
├── api/
│   └── chat.js       # Serverless function that calls the Groq API
├── avatar.svg        # Profile avatar
├── package.json
└── README.md
```

## 🚀 Setup Instructions
1. **Clone the repo**
   ```bash
   git clone <your-repository-url>
   cd <repository-folder>
   ```
2. **Get a Groq API key** from [console.groq.com](https://console.groq.com).
3. **Run locally** (needed for the chatbot to work):
   ```bash
   npm i -g vercel
   echo "GROQ_API_KEY=your_key_here" > .env.local
   vercel dev
   ```
   Open the local URL shown in the terminal.
4. **Deploy on Vercel**
   - Import the GitHub repo in Vercel.
   - Go to **Settings → Environment Variables** and add `GROQ_API_KEY`.
   - Click **Deploy** (redeploy if you added the key afterwards).

> ⚠️ Never commit your API key. `.env` files are listed in `.gitignore`.

## 🤖 How the Chatbot Works
1. The visitor types a question in the chat box.
2. `index.html` sends the question plus my portfolio data to `/api/chat`.
3. The serverless function in `api/chat.js` adds the secret key from the environment variable and calls the Groq API.
4. The reply comes back and is shown in the chat. If anything fails, an error message is shown instead.

## 📬 Contact
- 📧 luffy82732@gmail.com
- 💻 [github.com/Raghav-Gattani](https://github.com/Raghav-Gattani)

---
*Set sail, nakama. The One Piece is code.* ⚓
