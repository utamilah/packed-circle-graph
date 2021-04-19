const express = require("express");
const app = express();
const port = 8000;
const fs = require("fs");

app.get("/", (req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" });
	fs.readFile("./index.html", null, function (error, data) {
		if (error) {
			res.writeHead(404);
			res.write("File not found!");
		} else {
			res.write(data);
		}
		res.end();
	});
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
