import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getAll(): Observable<Book[]> {
    return of([
      { id: 1, title: 'Book 1', author: 'Author 1' },
      { id: 2, title: 'Book 2', author: 'Author 2' },
      { id: 3, title: 'Book 3', author: 'Author 3' }
    ]);
  }
}
