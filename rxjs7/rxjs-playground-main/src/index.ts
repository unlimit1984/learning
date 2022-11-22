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
// import {
//   name$,
//   storeDataOnServer,
//   storeDataOnServerError
// } from './external';

// // name$.subscribe(value => console.log(value));

// storeDataOnServer('Some value').subscribe({
//   next: value => console.log(value),
//   error: err => console.log('Error when saving:', err.message)
// });

// storeDataOnServerError('Some value').subscribe({
//   next: value => console.log(value),
//   error: err => console.log('Error when saving:', err.message)
// });

// ---------------------------------------------------------------------------

//09
// import { Observable, Subscriber } from 'rxjs';

// //Observable
// const observable$ = new Observable(subscriber => {
//   subscriber.next('Alice');
//   subscriber.next('Bob');
// });

// //Observer
// const observer = {
//   next: value => console.log(value)
// };

// //Subscription
// observable$.subscribe(observer);

// ---------------------------------------------------------------------------

//10
import { Observable, Subscriber } from 'rxjs';

const observable$ = new Observable<string>(subscriber => {
  console.log('Observable executed');
  subscriber.next('Alice');
  subscriber.next('Ben');
  subscriber.next('Charlie');
});

//observable$.subscribe(); //emit values without any wired subscriber

const observer = {
  next: value => console.log(value)
};

//OPTION 1
// observable$.subscribe(observer);

//OPTION 2
observable$.subscribe(value => console.log(value));
