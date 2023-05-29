import express from "express";
import env from "dotenv";
// import { findCarValue } from './controllers/findCarValueController';
import router from "./routes/findCarValueRoute";

env.config();
const server = express();
server.use(express.json());

server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
