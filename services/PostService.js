import Post from "../models/Post.js";
import FileService from "./FileService.js";
class PostService {
    async create(post, picture) {
            const fileName = FileService.saveFile(picture);
            const newPost = await Post.create({...post, picture: fileName});
            return newPost;
    }
    async getAll() {
            const posts = await Post.find();
            return posts;
    }
    async getById(id) {
            if (!id) {
                throw new Error( 'bad request');
            }
            const post = await Post.findById(id);
            return post;
    }
    async updateById(id, post) {
            if (!id) {
                throw new Error( 'bad request');
            }
            const newPost = await Post.findByIdAndUpdate(id, post, {new: true});
            return newPost;
    }
    async deleteById(id) {
            if (!id) {
                throw new Error( 'bad request');
            }
            const post = await Post.findByIdAndDelete(id);
            return post;
    }
}

export default new PostService;