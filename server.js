//Criando um servidor com Express
import express from "express";

const app = express();

app.listen(3000, () => {

    console.log("Server is running on port 3000");
});

//Pode deixar vazio, só  com / ou colocar algo como /api
app.get("/api", (req, res) => {

    res.status(200).send("Hello World!");
});