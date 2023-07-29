import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
  async index() {
    return await Post.query().preload('category')
  }
  async store({ request }: HttpContextContract) {
    const data = request.body()
    return await Post.create(data)
  }
}
