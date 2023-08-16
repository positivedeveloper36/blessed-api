import PostRepositoryInterface from 'App/Repositories/Interfaces/PostRepositoryInterface'
import Post from 'App/Models/Post'

export default class LucidPostRepository implements PostRepositoryInterface {
  public async all(): Promise<Post[]> {
    return Post.all()
  }

  public async create(data: object): Promise<Post> {
    return Post.create(data)
  }
}
