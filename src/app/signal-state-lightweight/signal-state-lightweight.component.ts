import { ChangeDetectionStrategy, Component } from '@angular/core';
import { patchState, signalState } from '@ngrx/signals';

@Component({
  selector: 'app-signal-state-lightweight',
  imports: [],
  templateUrl: './signal-state-lightweight.component.html',
  styleUrl: './signal-state-lightweight.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalStateLightweightComponent {
readonly state = signalState({ count: 0 });
 
  increment(): void {
    patchState(this.state, (state) => ({ count: state.count + 1 }));
  }
 
  decrement(): void {
    patchState(this.state, (state) => ({ count: state.count - 1 }));
  }
 
  reset(): void {
    patchState(this.state, { count: 0 });
  }
}
