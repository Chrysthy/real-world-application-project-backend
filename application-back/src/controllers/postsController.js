import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {

    const posts = await getTodosPosts();

    res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
    
    const novoPost = req.body;

}