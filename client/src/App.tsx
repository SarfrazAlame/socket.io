import { Button, Container, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { io } from "socket.io-client";

function App() {
  const socket = io("http://localhost:4000");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected", socket.id);
    });

    socket.on("welcome", (s) => {
      console.log(s);
    });
  }, []);

  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h1" component="div" gutterBottom>
          Welcome to Chat App
        </Typography>

        <form>
          <TextField id="outlined-basic" label="outlined" variant="outlined" />
          <Button variant="contained" color="primary">
            Send
          </Button>
        </form>
      </Container>
    </>
  );
}

export default App;
