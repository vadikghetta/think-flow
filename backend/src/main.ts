import express from "express";

const app = express();

app.get("/ping", (req, res) => {
	res.send("pong");
});

app.listen(8080, () => {
	console.info("Listening in http://localhost:8080");
});
