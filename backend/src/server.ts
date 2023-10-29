import express, { Request, Response } from "express";
import axios from 'axios';
import { COUNTRIES_LIST_URL, COUTRY_URL } from "./urls";
import cors from 'cors';

interface ServerOptions {
    port: number;
  }

const PORT = 3001;
const app = express();

app.use(cors())

app.get("/countries", async (req: Request, res: Response) => {
    try {
        const response = await axios.get(COUNTRIES_LIST_URL);
        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/country/:code", async (req: Request, res: Response) => {
    const { code } = req.params;
    try {
        const response = await axios.get(`${COUTRY_URL}${code}`);
        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

 function startServer(options: ServerOptions) {
    const { port } = options;
    const server = app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
    return server;
  }

  const server = startServer({ port: 3001 });
  process.title = 'myApp';