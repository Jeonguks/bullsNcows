const express = require("express");
const path = require("path");
const app = express();

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/src', express.static(path.join(__dirname, 'src')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
});
app.get("/rank", (req, res) => {
    res.sendFile(path.join(__dirname, "./rank.html"));
});

app.use((req, res, next) => {
    res.status(404).send("잘못된 접근입니다.")
});

app.listen(8000, () => {
    console.log("listening on 8000");
});
