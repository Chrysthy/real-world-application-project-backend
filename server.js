//Criando um servidor com Express
import express from "express";

//lista de arrays de objetos
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

//adicionando rota - coverter string para JSON
app.use(express.json());

app.listen(3000, () => {

    console.log("Server is running on port 3000");
});

//Pode deixar vazio, só  com / ou colocar algo como /posts
app.get("/posts", (req, res) => {

    //vai devolver status ok e ao invés de send, será json recebendo posts
    res.status(200).json(posts);
});

function buscarPostPorID (id) {

    return posts.findIndex((post) => {

        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {


    res.status(200).json(posts);
});