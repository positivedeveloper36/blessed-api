// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PostRepository from '@ioc:App/Repositories/PostRepository'
import { inject } from '@adonisjs/fold'

@inject()
export default class CommentsController {
  constructor(private postRepository: PostRepository) {}

  public async index() {
    return this.postRepository.all()
  }

  public async store() {
    return this.postRepository.create({
      title: 'Demo blog post title',
      content: 'Demo blog post content',
    })
  }
}
