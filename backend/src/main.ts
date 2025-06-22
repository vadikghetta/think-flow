import express from "express";
import * as trpExpress from "@trpc/server/adapters/express";
import { trpcRouter } from "./trpc";

const app = express();

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
	console.info("Listening in http://localhost:8080");
});
