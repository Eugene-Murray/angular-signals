import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./signals/signals.component').then(m => m.SignalsComponent) },
    { path: 'signals', loadComponent: () => import('./signals/signals.component').then(m => m.SignalsComponent) },
    { path: 'signal-store', loadComponent: () => import('./signal-store/signal-store.component').then(m => m.SignalStoreComponent) },
    { path: 'signal-state-lightweight', loadComponent: () => import('./signal-state-lightweight/signal-state-lightweight.component').then(m => m.SignalStateLightweightComponent) },
    { path: 'signal-state-lightweight2', loadComponent: () => import('./signal-state-lightweight2/signal-state-lightweight2.component').then(m => m.SignalStateLightweight2Component) },
];
