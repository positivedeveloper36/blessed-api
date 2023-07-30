import Route from '@ioc:Adonis/Core/Route'

Route.get('/homestay', () => {
  return 'Ini halaman homestay'
})

Route.get('/homestay/:id', ({ params }) => {
  return 'Ini halaman homestay dg nomer ' + params.id
})
