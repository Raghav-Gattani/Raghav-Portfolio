# ⚓ One Piece Themed Portfolio

A personal portfolio with a Luffy x Whitebeard theme, project search/filter, light/dark mode and an API-powered chatbot.

**Live website:** https://YOUR-SITE.vercel.app  <!-- replace after deploying -->

## Technologies
HTML, CSS, JavaScript, Vercel Serverless Functions, Groq API, GitHub, Cursor AI

## Features
- Sections: Home, About Me, Skills, Projects, Contact, AI Chatbot
- 5 project "wanted poster" cards with GitHub + live links
- Search by project name / technology + tag filters
- Light (Sunny Day) / Dark (Night Sea) toggle
- Responsive layout with mobile menu
- Chatbot grounded in portfolio data; shows an error message if the API fails
- API key stored in Vercel environment variables (never in the repo)

## Setup
1. Edit the `CONFIG` object at the top of the `<script>` in `index.html` (name, skills, links, projects).
2. Add your photo as `profile.jpg` in the root folder.
3. `git init && git add . && git commit -m "Portfolio" && git branch -M main`
4. Create a GitHub repo, then `git remote add origin <url> && git push -u origin main`
5. Import the repo in Vercel → Settings → Environment Variables → add `GROQ_API_KEY` → Deploy.
6. Put the live URL in this README.
