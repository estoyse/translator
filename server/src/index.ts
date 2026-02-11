import { Server } from "socket.io";

export interface Translation {
  original: string;
  id: string;
  translation: string;
}

const io = new Server(3000, {
  cors: {
    methods: ["GET", "POST"],
    origin: ["http://localhost:5173"],
  },
});

io.on("connection", socket => {
  console.log("server is up");

  socket.on("translate", async (data: Translation) => {
    const translation = await translate(data.original);

    socket.emit("translation_result", { ...data, translation });
  });
});

async function translate(text: string) {
  await sleep(3000);
  return text.toUpperCase();
}

async function sleep(ms: number) {
  return await new Promise(resolve => setTimeout(resolve, ms));
}
