import cookie from "@fastify/cookie";
import fastify from "fastify";
import { transactionsRouter } from "./routes/transactions";

export const app = fastify();

app.register(cookie);

app.register(transactionsRouter, {
  prefix: "transactions",
});
