import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { BooksStore } from './books.store';

@Component({
  selector: 'app-signal-state-lightweight2',
  imports: [],
  templateUrl: './signal-state-lightweight2.component.html',
  styleUrl: './signal-state-lightweight2.component.css',
  providers: [BooksStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalStateLightweight2Component implements OnInit {
readonly store = inject(BooksStore);
 
  ngOnInit(): void {
    this.store.loadBooks();
  }
}
