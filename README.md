# 🌐 Real-Time Voice Translator

A modern, real-time translator application with voice recognition capabilities. Built with **React**, **Node.js**, and **Socket.io**, this project enables seamless communication by translating spoken or typed text instantly.

---

## 🚀 Features

- **Voice Input**: Integrated speech-to-text functionality for hands-free translation.
- **Real-Time Communication**: Uses WebSockets (Socket.io) for instant translation delivery.
- **Modern UI**: Sleek and responsive design using Tailwind CSS and Radix UI components.
- **State Management**: Robust client-side state handling with Zustand.
- **Full-Stack TS**: Type-safe development across both the client and server.

---

## 🛠️ Tech Stack

### Frontend

- **Framework**: [React 19](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/) & [Lucide Icons](https://lucide.dev/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Networking**: [Socket.io-client](https://socket.io/docs/v4/client-api/)

### Backend

- **Runtime**: [Node.js](https://nodejs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Server**: [Socket.io](https://socket.io/)
- **Dev Tool**: [Nodemon](https://nodemon.io/) & [ts-node](https://typestrong.org/ts-node/)

---

## 📂 Project Structure

```text
.
├── client/          # Vite-based React frontend
│   ├── src/
│   │   ├── components/  # UI components (Radix, Tailwind)
│   │   ├── hooks/       # Custom hooks (Speech recognition)
│   │   ├── services/    # Socket connections
│   │   └── store/       # Zustand store
├── server/          # Node.js WebSocket server
│   └── src/
│       └── index.ts     # Socket handlers and translation logic
└── package.json     # Root management script
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd translator
   ```

2. Install dependencies for all parts (root, client, and server):
   ```bash
   npm run install-all
   ```

### Running the Application

To start both the client and server concurrently, run:

```bash
npm run dev
```

- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend (Socket Server)**: [http://localhost:3000](http://localhost:3000)

Alternatively, you can run them separately:

- **Client only**: `npm run client`
- **Server only**: `npm run server`

---

## 📖 Usage

1. Open the application in your browser (Google Chrome or Microsoft Edge).
2. Select the "From" and "To" languages (currently UI placeholders).
3. Click the **"Voice Input"** button and speak.
4. The application will capture your speech and send it to the server.
5. The server (currently mocks translation via uppercase) sends back the result.
6. The translation history is displayed in the table below the form.

---

## ⚠️ Limitations

- **Browser Support**: The Voice Input feature relies on the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API), which is currently supported primarily in modern versions of **Google Chrome**, **Microsoft Edge**, and **Safari**. It may not be available or functional in other browsers like Firefox or Brave (due to privacy settings) or mobile browsers with limited API support.
- **Secure Context**: Browsers require a secure context (HTTPS or `localhost`) to grant microphone permissions.
- **Internet Connectivity**: Most speech-to-text engines used by browsers (especially Chrome/Edge) require an active internet connection to process voice data via their respective cloud services.

---

## 📜 License

This project is licensed under the ISC License.
