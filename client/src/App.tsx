import { Button, Container, TextField, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

function App() {
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [socketId, setSocketId] = useState("");

  const socket = useMemo(() => io("http://localhost:4000"), []);

  const handlerSubmit = (e: any) => {
    e.preventDefault();
    socket.emit("message", { message, room });
    setMessage("");
  };

  useEffect(() => {
    socket.on("connect", () => {
      setSocketId(socket.id);
      console.log("connected", socket.id);
    });

    socket.on("welcome", (s) => {
      console.log(s);
    });

    socket.on("recieve-message", ({ message, room }) => {
      console.log({ message, room });
    });
  }, []);

  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h3" component="div" gutterBottom>
          Welcome to Chat App
        </Typography>

        <Typography>{socketId}</Typography>

        <form onSubmit={handlerSubmit}>
          <TextField
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="outlined-basic"
            label="Message"
            variant="outlined"
          />
          <TextField
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            id="outlined-basic"
            label="Room"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </form>
      </Container>
    </>
  );
}

export default App;
