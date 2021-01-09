'use strict'

const Book=use('App/Models/Book')

class BookController {
  async index({view}) {
    let allBooks = await Book.all();
    return view.render('books/index', {
      "books" : allBooks.toJSON()
    })
    }

 async show({params,view}) {
console.log(params.book_id)
    let book = await Book.find(params.book_id)
    return view.render("books/show", {
      "book ": book.toJSON()
    })
  }

  create({view}){
    return view.render('books/create')
  }

  async processCreate({request,response}){
    let body = request.post();
    let book = new Book();
    book.title = body.title;
    book.condition = body.condition;
    book.price = body.price;
    book.save();
    return response.route('show_all_books')
  }

}

module.exports = BookController
