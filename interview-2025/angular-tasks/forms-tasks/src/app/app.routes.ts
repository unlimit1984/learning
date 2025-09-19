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

export const routes: Routes = [
  {
    path: 'reactive-form',
    component: ReactiveForm,
  },
  {
    path: 'reactive-form-with-submit',
    component: ReactiveFormWithSubmit,
  },
  {
    path: 'template-driven-form',
    component: TemplateDrivenForm,
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
    path: 'hooks-parent',
    component: HooksParent,
  },
  {
    path: 'hooks-child',
    component: HooksChild,
  },
  {
    path: 'defer',
    component: Defer,
  },
  {
    path: '**',
    redirectTo: 'reactive-forms',
  },
];
