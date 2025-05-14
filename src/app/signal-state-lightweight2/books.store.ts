import { inject, Injectable } from '@angular/core';
import { exhaustMap, pipe, tap } from 'rxjs';
import { signalState, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { BooksService } from './books.service';
import { Book } from './book.model';

type BooksState = { books: Book[]; isLoading: boolean };

const initialState: BooksState = {
  books: [],
  isLoading: false,
};

@Injectable()
export class BooksStore {
  readonly #booksService = inject(BooksService);
  readonly #state = signalState(initialState);

  readonly books = this.#state.books;
  readonly isLoading = this.#state.isLoading;

  readonly loadBooks = rxMethod<void>(
    pipe(
      tap(() => patchState(this.#state, { isLoading: true })),
      exhaustMap(() => {
        return this.#booksService.getAll().pipe(
          tapResponse({
            next: (books: Book[]) => patchState(this.#state, { books }),
            error: console.error,
            finalize: () => patchState(this.#state, { isLoading: false }),
          })
        );
      })
    )
  );
}