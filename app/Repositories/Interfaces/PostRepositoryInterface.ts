import Post from 'App/Models/Post'

export default interface PostRepositoryInterface {
  all(): Promise<Post[]>

  create(data: object): Promise<Post>
}
