import { Component, Input, OnInit } from '@angular/core';
import { bookService } from './booklist.service';
import { Book } from './booklist.interface';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  book = '\'\'';
  books: Book[] = [];
  wishList: Book[] = [];
  @Input() 
  searchtext: string;
  constructor(private service: bookService) { }

  ngOnInit(): void {
      this.searchBook(this.book);
      console.log(this.books);
  }

  addToWishList(title) {
    let obj = this.books.find(b => b.title === title);
    if(!this.wishList.includes(obj))
      this.wishList.push(obj);
  }

  remove(title) {
    this.wishList = this.wishList.filter(b => {return b.title !== title}); 
  }

  search(){
      this.searchBook(this.searchtext);
    
  }

  searchBook(bookName) {
    this.books = [];
    if(bookName === '')
      bookName = '\'\'';
    this.service.getBook(bookName).subscribe(data => {
      for(let item of data.items) {
        let book = new Book();
        book.title = item.volumeInfo.title;
        book.subtitle = item.volumeInfo.subtitle;
        book.authors= item.volumeInfo.authors;
        book.publisher= item.volumeInfo.publisher;
        book.publishedDate= item.volumeInfo.publishedDate;
        book.description= item.volumeInfo.description;
        book.imageUrl= item.volumeInfo.imageLinks.thumbnail;
        this.books.push(book);
      }      
  });
  }

  

}
