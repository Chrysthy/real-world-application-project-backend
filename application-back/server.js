import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

const posts = [

    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },

    {
        id: 2,
        descricao: "Um lindo por do sol",
        imagem: "https://placekitten.com/400/200"
    },

    {
        id: 3,
        descricao: "Um gato brincando no jardim",
        imagem: "https://placekitten.com/350/150"
    },

    {
        id: 4,
        descricao: "Café e leitura",
        imagem: "https://placekitten.com/450/250"
    },

    {
        id: 5,
        descricao: "Paisagem montanhosa",
        imagem: "https://placekitten.com/500/300"
    },

    {
        id: 6,
        descricao: "Relaxando no sofá",
        imagem: "https://placekitten.com/600/400"
    }
];


const app = express();

app.use(express.json());

app.listen(3000, () => {

    console.log("Server is running on port 3000...");
});

async function getTodosPosts() {

    const db = conexao.db("real-world-application");

    const colecao = db.collection("posts");

    return colecao.find().toArray();
}

app.get("/posts", async (req, res) => {

    const posts = await getTodosPosts();

    res.status(200).json(posts);
});

// function buscarPostPorID(id) {

//     return posts.findIndex((post) => {

//         return post.id === Number(id)
//     })
// }

// app.get("/posts/:id", (req, res) => {

//     //params= parâmetros da requisição
//     const index = buscarPostPorID(req.params.id)

//     //index passando a posição do post
//     res.status(200).json(posts[index]);

// });