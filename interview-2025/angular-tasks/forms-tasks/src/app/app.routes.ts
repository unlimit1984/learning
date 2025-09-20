import { Routes } from '@angular/router';
import { ReactiveForm } from './pages/reactive-form/reactive-form';
import { FilteredUsers } from './pages/filtered-users/filtered-users';
import { TakeUntil } from './pages/take-until/take-until';
import { ContentAtCenter } from './pages/content-at-center/content-at-center';
import { HooksChild } from './pages/hooks-child/hooks-child.component';
import { HooksParent } from './pages/hooks-parent/hooks-parent';
import { Defer } from './pages/defer/defer';
import { ReactiveFormWithSubmit } from './pages/reactive-form-with-submit/reactive-form-with-submit.component';
import { TemplateDrivenForm } from './pages/template-driven-form/template-driven-form';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'reactive-form',
    component: ReactiveForm,
    data: { title: 'Reactive Form' },
  },
  {
    path: 'reactive-form-with-submit',
    component: ReactiveFormWithSubmit,
    data: { title: 'Reactive Form with Submit' },
  },
  {
    path: 'template-driven-form',
    component: TemplateDrivenForm,
    data: { title: 'Template Driven Form' },
  },
  {
    path: 'filtered-users',
    component: FilteredUsers,
    data: { title: 'Filtered Users' },
  },
  {
    path: 'take-until',
    component: TakeUntil,
    data: { title: 'Take Until' },
  },
  {
    path: 'content-at-center',
    component: ContentAtCenter,
    data: { title: 'Content At Center' },
  },
  {
    path: 'hooks-parent',
    component: HooksParent,
    data: { title: 'Hooks Parent' },
  },
  {
    path: 'hooks-child',
    component: HooksChild,
    data: { title: 'Hooks Child' },
  },
  {
    path: 'defer',
    component: Defer,
    data: { title: 'Defer' },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
