//1
// import { Observable } from 'rxjs';

// const someObservable$ = new Observable<string>(subscriber => {
//   subscriber.next('Alice');
//   subscriber.next('Ben');
//   subscriber.next('Charlie');
//   subscriber.complete();
// });

// someObservable$.subscribe(value => console.log(value));

//2
import {
  name$,
  storeDataOnServer,
  storeDataOnServerError
} from './external';

// name$.subscribe(value => console.log(value));

storeDataOnServer('Some value').subscribe({
  next: value => console.log(value),
  error: err => console.log('Error when saving:', err.message)
});

// storeDataOnServerError('Some value').subscribe({
//   next: value => console.log(value),
//   error: err => console.log('Error when saving:', err.message)
// });

//3