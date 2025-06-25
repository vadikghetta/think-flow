import * as trpExpress from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import logger from "logger/logger.service";
import { trpcRouter } from "./trpc";

const app = express();

app.use(cors());

app.get("/ping", (req, res) => {
	res.send("pong");
});

app.use(
	"/trpc",
	trpExpress.createExpressMiddleware({
		router: trpcRouter
	})
);
app.listen(8080, () => {
	logger.log("Listening  in http://localhost:8080");
});
