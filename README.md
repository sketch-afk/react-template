# yash-react Template

A modern, lightning-fast boilerplate to get started with [yash-react](https://www.npmjs.com/package/yash-react). 

Built on top of **Vite** with a custom JSX factory, this template provides a clean slate for building performant, component-based UIs using your own custom rendering engine.

## 🚀 Features
- **Custom Engine**: Uses `yash-react` core engine.
- **Vite Powered**: Instant Hot Module Replacement (HMR).
- **Modern CSS**: Includes a pre-configured `index.css` with a modern, glassmorphic-inspired design system.
- **Component Based**: File structure organized for scalable component development.

## 🛠 Getting Started

### 1. Installation
The fastest way to use this template is via your CLI tool:
```bash
npm create yash-app my-app-name
```

Alternatively, if you cloned this repo manually:
```
bash

npm install
npm run dev
```

### 2. Available Scripts
npm run dev: Starts the Vite development server.

npm run build: Bundles your app for production.

## 📂 Project Structure
text
src/
├── App.jsx       # Your main component
├── index.css     # Global styles
└── main.jsx      # Entry point

---

### 2. For `create-yash-app` (The CLI Tool)
*Create a file named `README.md` in the root of your `create-yash-app` folder.*

```markdown
# create-yash-app

The official CLI tool to bootstrap a new `yash-react` project in seconds.

## ⚡ Usage

Run the following command in your terminal to generate a new project:

```bash
npm create yash-app <project-name>
```
After running the command:
```
cd <project-name>
npm install
npm run dev
```

Replace <project-name> with the name of the folder you want to create (e.g., npm create yash-app my-portfolio).

## 🛠 What's inside?
This tool automatically sets up:

A local Vite development environment.

The yash-react engine installed as a dependency.

A pre-configured vite.config.js with the correct JSX factory settings.

A starter project structure with component support.

## 💡 Why use this?
Manually configuring custom JSX factories for your own engine can be tedious. create-yash-app abstracts the configuration away so you can focus on building your UI immediately.

Built by sketch-afk

---
