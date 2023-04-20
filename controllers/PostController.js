import Post from "../models/Post";
import PostService from "../services/PostService.js";
class PostController {
    async create(req, res) {
        try {
            const post = req.body;
            const newPost = await PostService(post, req.files.picture);
            return res.json(newPost);
        } catch (error) {
            res.status(500).json(e.message);
        }
    }
    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            return res.json(posts);
        } catch (error) {
            res.status(500).json(e.message);
        }
    }
    async getById(req, res) {
        try {
            const post = await PostService.getById(req.params.id);
            return res.json(post);
        } catch (error) {
            res.status(500).json(e.message);
        }
    }
    async updateById(req, res) {
        try {
            const post = await PostService.updateById(req.params.id, req.body);
            res.json(post);
        } catch (error) {
            res.status(500).json(e.message);
        }
    }
    async deleteById(req, res) {
        try {
            const post = await PostService.deleteById(req.params.id);
            res.json(post);
        } catch (error) {
            res.status(500).json(e.message);
        }
    }
    }

export default new PostController;