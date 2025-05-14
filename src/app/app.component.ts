import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title: string = 'ng-signals';
  count: WritableSignal<number> = signal(0);
  newCount: number = 0;
  searchTerm = signal('');
  personList = signal([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'Jim', age: 25 },
    { name: 'Jill', age: 30 },
    { name: 'Jane', age: 35 },
  ]);

  constructor() {
    // Register a new effect.
    effect(() => {
      console.log(`The count is: ${this.count()}`);
      this.newCount = this.count();
    });
  }

  ngOnInit(): void {
    console.log('Initial count is: ' + this.count());

    setTimeout(() => {
      this.count.set(1);
      console.log('The count is: ' + this.count());
    }, 500);

    setTimeout(() => {
      this.count.set(3);
      console.log('The count is: ' + this.count());
    }, 1000);

    setTimeout(() => {
      this.count.update((value) => value + 1);
      console.log('The count is: ' + this.count());
    }, 1500);
  }

  filteredList: Signal<{ name: string; age: number }[]> = computed(() => {
    const term = this.searchTerm();
    return this.personList().filter((person) =>
      person.name.toLowerCase().includes(term.toLowerCase())
    );
  });
}
