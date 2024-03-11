import { io } from "socket.io-client";

function App() {
  const socket = io("localhost:4000");
  console.log(socket);
  
  return (
    <>
      <div>main</div>
    </>
  );
}

export default App;
