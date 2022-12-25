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
import { interval, Observable, Subscriber, take, timeInterval } from 'rxjs';

// const observable$ = new Observable<string>(subscriber => {
//   console.log('Observable executed');
//   subscriber.next('Alice');
//   setTimeout(() => subscriber.next('Ben'), 2000);
//   setTimeout(() => subscriber.next('Charlie'), 4000);
// });

//observable$.subscribe(); //emit values without any wired subscriber

// const observer = {
//   next: value => console.log(value)
// };

//OPTION 1
// observable$.subscribe(observer);

//OPTION 2
// observable$.subscribe(value => console.log(value));

//const subscription = observable$.subscribe(value => console.log(value));

// setTimeout(() => {
//   console.log('Unsubscribe');
//   subscription.unsubscribe();
// }, 3000);

// console.log('Subscription 1 starts');
// observable$.subscribe(value => console.log('Subscription 1', value));
//
// setTimeout(() => {
//   console.log('Subscription 2 starts');
//   observable$.subscribe(value => console.log('Subscription 2', value));
// }, 1000);

//22 - Empty Observable

// const observable = new Observable(subscriber => {
//   console.log('Observable executed');
// });
//
// console.log('Before subscribe');
// observable.subscribe({
//   next: value => console.log(value)
// });
// console.log('After subscribe');

//23 - Emit next notification - synchronous emission

// const observable = new Observable<string>(subscriber => {
//   console.log('Observable executed');
//   subscriber.next('Alice');
// });
//
// console.log('Before subscribe');
// // observable.subscribe({
// //   next: value => console.log(value)
// // });
// // OR shortened version
// observable.subscribe(value => console.log(value));
//
// console.log('After subscribe');

//24 - Emit next notification - asynchronous emission
// const observable = new Observable<string>(subscriber => {
//   console.log('Observable executed');
//   subscriber.next('Alice');
//   subscriber.next('Ben');
//   setTimeout(() => subscriber.next('Charlie'), 2000);
// });
//
// console.log('Before subscribe');
// observable.subscribe(value => console.log(value));
//
// console.log('After subscribe');

//25 - Emit complete notification and teardown
// const observable = new Observable<string>(subscriber => {
//   console.log('Observable executed');
//   subscriber.next('Alice');
//   subscriber.next('Ben');
//   setTimeout(() => {
//     subscriber.next('Charlie');
//     subscriber.complete();
//   }, 2000);
//
//   return () => {
//     console.log('Teardown');
//   };
// });
//
// console.log('Before subscribe');
// observable.subscribe({
//   next: value => console.log(value),
//   complete: () => {
//     console.log('Completed');
//   }
// });
//
// console.log('After subscribe');

//26 - Emit error notification
// const observable = new Observable<string>(subscriber => {
//   console.log('Observable executed');
//   subscriber.next('Alice');
//   subscriber.next('Ben');
//   setTimeout(() => {
//     subscriber.next('Charlie');
//   }, 2000);
//
//   setTimeout(() => {
//     subscriber.error(new Error('Failure'));
//   }, 4000);
//
//   return () => {
//     console.log('Teardown');
//   };
// });
//
// console.log('Before subscribe');
// observable.subscribe({
//   next: value => console.log(value),
//   error: err => console.log(err.message),
//   complete: () => console.log('Completed')
// });
//
// console.log('After subscribe');

//28 - Order
// const observable = new Observable<string>(subscriber => {
//   console.log('Observable executed');
//   subscriber.next('Alice');
//   subscriber.next('Ben');
//
//   setTimeout(() => subscriber.error(new Error('Failure')), 2000);
//
//   setTimeout(() => {
//     subscriber.next('Charlie');
//     subscriber.complete();
//   }, 4000);
//
//   return () => {
//     console.log('Teardown');
//   };
// });
//
// console.log('Before subscribe');
// observable.subscribe({
//   next: value => console.log(value),
//   error: err => console.log(err.message),
//   complete: () => console.log('Completed')
// });
// console.log('After subscribe');

//29 - Cancellation - Unsubscribe

//Task: emits 7 times, then stop

//My solution 1
// const interval$ = new Observable<number>(subscriber => {
//     let counter = 1;
//     setInterval(() => {
//         subscriber.next(counter++);
//     },1000);
//
//     setTimeout(() => {
//         subscriber.complete();
//     }, 7000);
// });
//
// interval$.subscribe({
//     next: value => console.log(value),
//     error: err => console.log(err.message),
//     complete: () => console.log('Completed')
// });

//My solution 2
// const interval$ = new Observable<number>(subscriber => {
//     let counter = 1;
//     setInterval(() => {
//         subscriber.next(counter++);
//     },1000);
// });
//
// interval$.pipe(take(7)).subscribe(
//     value => console.log(value),
// );

//Udemy solution
// const interval$ = new Observable<number>(subscriber => {
//   let counter = 1;
//   const intervalId = setInterval(() => {
//     console.log('Emitted');
//     subscriber.next(counter++);
//   }, 1000);
//
//   return () => {
//     clearInterval(intervalId);
//   };
// });
//
// const subscription = interval$.subscribe(value => console.log(value));
//
// setTimeout(() => {
//   console.log('Unsubscribe');
//   subscription.unsubscribe();
// }, 7000);

//32 - Cold observable https://random-data-api.com/
import { ajax } from 'rxjs/ajax';
const ajax$ = ajax<any>('https://random-data-api.com/api/v2/users');

ajax$.subscribe(data => console.log('Sub 1:', data.response.first_name));
ajax$.subscribe(data => console.log('Sub 2:', data.response.first_name));
ajax$.subscribe(data => console.log('Sub 3:', data.response.first_name));
