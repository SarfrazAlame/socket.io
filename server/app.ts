import express, { Request, Response } from 'express';
import { Server } from 'socket.io';

const port = 4000

const app = express()
const server = new Server(app)

app.get('/', (req: Request, res: Response) => {
    res.send("hello world")
})

app.listen(port, () => { console.log(`Server is running on port ${port}`) })