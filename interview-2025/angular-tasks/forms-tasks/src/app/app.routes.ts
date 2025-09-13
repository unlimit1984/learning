import { Routes } from '@angular/router';
import { ReactiveForm } from './pages/reactive-form/reactive-form';
import { FilteredUsers } from './pages/filtered-users/filtered-users';
import { TakeUntil } from './pages/take-until/take-until';
import { ContentAtCenter } from './pages/content-at-center/content-at-center';

export const routes: Routes = [
  {
    path: 'reactive-form',
    component: ReactiveForm,
  },
  {
    path: 'filtered-users',
    component: FilteredUsers,
  },
  {
    path: 'take-until',
    component: TakeUntil,
  },
  {
    path: 'content-at-center',
    component: ContentAtCenter,
  },
  {
    path: '**',
    redirectTo: '/forms',
  },
];
