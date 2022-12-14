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
// import { interval, Observable, Subscriber, take, timeInterval } from 'rxjs';

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
// import { ajax } from 'rxjs/ajax';
// const ajax$ = ajax<any>('https://random-data-api.com/api/v2/users');
//
// ajax$.subscribe(data => console.log('Sub 1:', data.response.first_name));
// ajax$.subscribe(data => console.log('Sub 2:', data.response.first_name));
// ajax$.subscribe(data => console.log('Sub 3:', data.response.first_name));

//33 - Hot observable -
// import { Observable } from 'rxjs';
//
// const helloButton = document.querySelector('button#hello');
//
// const helloClick$ = new Observable<MouseEvent>(subscriber => {
//   helloButton.addEventListener('click', (event: MouseEvent) => {
//     subscriber.next(event);
//   });
// });
//
// helloClick$.subscribe(event => {
//   console.log('Sub 1:', event.type, event.x, event.y);
// });
//
// setTimeout(() => {
//   console.log('Subscription 2 starts');
//   helloClick$.subscribe(event => {
//     console.log('Sub 2:', event.type, event.x, event.y);
//   });
// }, 5000);

//37 - of Creation Function
//import {from, Observable, of} from 'rxjs';

// of('Alice', 'Ben', 'Charlie').subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Completed')
// });

// or own impl as the same
// const names$ = new Observable<string>(subscriber => {
//   subscriber.next('Alice');
//   subscriber.next('Ben');
//   subscriber.next('Charlie');
//   subscriber.complete();
// });
// names$.subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Completed')
// });

//or our own function with args as the same
// function ourOwnOf(...args: string[]): Observable<string> {
//   return new Observable<string>(subscriber => {
//     // args.forEach(value => subscriber.next(value));
//     //or
//     for (let i = 0; i < args.length; i++) {
//       subscriber.next(args[i]);
//     }
//     subscriber.complete();
//   });
// }
//
// ourOwnOf('Alice', 'Ben', 'Charlie').subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Completed')
// });

//38 - from Creation Function
// import { from } from 'rxjs';

//with array
// from(['Alice', 'Ben', 'Charlie']).subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Completed')
// });

// const somePromise = new Promise<string>((resolve, reject) => {
//   // resolve('Resolved!');
//   reject('Rejected!');
// });
// const observableFromPromise$ = from(somePromise);
// observableFromPromise$.subscribe({
//   next: value => console.log(value),
//   error: err => console.log('Error:', err),
//   complete: () => console.log('Completed')
// });

//39 - fromEvent Creation Function
//Take events from DOM EventTarget, Node.js EventEmitter, jQuery Events

// import { fromEvent, Observable } from 'rxjs';
//
// const helloButton = document.querySelector('button#hello');

// const subscription = fromEvent<MouseEvent>(helloButton, 'click').subscribe({
//   next: event => console.log(event.type, event.y, event.y),
//   error: err => console.log('Error:', err),
//   complete: () => console.log('Completed')
// });
//
// setTimeout(() => {
//   console.log('Unsubscribe');
//   subscription.unsubscribe();
// }, 5000);

//OR our alternative version
// const click$ = new Observable<MouseEvent>(subscriber => {
//   const clickHandlerFn = (event: MouseEvent) => {
//     console.log('Event callback executed');
//     subscriber.next(event);
//   };
//
//   helloButton.addEventListener('click', clickHandlerFn);
//
//   //for removing memory leaks
//   return () => {
//     helloButton.removeEventListener('click', clickHandlerFn);
//   };
// });
//
// const subscription = click$.subscribe({
//   next: event => console.log(event.type, event.y, event.y),
//   error: err => console.log('Error:', err),
//   complete: () => console.log('Completed')
// });
// setTimeout(() => {
//   console.log('Unsubscribe');
//   subscription.unsubscribe();
// }, 5000);

//40 - timer Creation Function

// import { Observable, timer } from 'rxjs';
//
// console.log('App started');
//
// const timer$ = new Observable<number>(subscriber => {
//   const timeOutId = setTimeout(() => {
//     console.log('Emits value');
//     subscriber.next(0);
//     subscriber.complete();
//   }, 2000);
//
//   return () => {
//     clearTimeout(timeOutId);
//   };
// });
//
// // const subscription = timer(2000).subscribe({
// const subscription = timer$.subscribe({
//   next: value => console.log(value),
//   error: err => console.log('Error:', err),
//   complete: () => console.log('Completed')
// });
//
// setTimeout(() => {
//   subscription.unsubscribe();
//   console.log('Unsubscribe');
// }, 1000);

//41 - interval Creation Function

// import { interval, Observable } from 'rxjs';
//
// console.log('App started');
//
// const interval$ = new Observable<number>(subscriber => {
//   let counter = 0;
//   const intervalId = setInterval(() => {
//     console.log('Emits value');
//     subscriber.next(counter++);
//   }, 1000);
//
//   return () => {
//     clearInterval(intervalId);
//   };
// });
//
// // const subscription = interval(1000).subscribe({
// const subscription = interval$.subscribe({
//   next: value => console.log(value),
//   error: err => console.log('Error:', err),
//   complete: () => console.log('Completed')
// });
//
// setTimeout(() => {
//   subscription.unsubscribe();
//   console.log('Unsubscribe');
// }, 5000);

//42 - forkJoin Creation Function
/*
'forkJoin' waits for all of the input Observables to complete before emitting anything.
Prior to that, it just keeps updating the latest known values for each inner Subscription in its memory,
without emitting anything.
 */

// import { forkJoin } from 'rxjs';
// import { ajax } from 'rxjs/internal/ajax/ajax';
//
// //Mike is from New Delhi and likes to eat pasta.
//
// const randomName$ = ajax('https://random-data-api.com/api/name/random_name');
// const randomNation$ = ajax('https://random-data-api.com/api/nation/random_nation');
// const randomFood$ = ajax('https://random-data-api.com/api/food/random_food');
//
// // forkJoin<any>([randomName$, randomNation$, randomFood$]).subscribe({
// //   next: ajaxResponses =>
// //     console.log(
// //       `${ajaxResponses[0].response.first_name} is from ${ajaxResponses[1].response.capital} and likes to eat ${ajaxResponses[2].response.dish}.`
// //     ),
// //   error: err => console.log('Error:', err),
// //   complete: () => console.log('Completed')
// // });
//
// //with a Destructuring assignment
// forkJoin<any>([randomName$, randomNation$, randomFood$]).subscribe({
//   next: ([nameAjax, nationAjax, foodAjax]) =>
//     console.log(
//       `${nameAjax.response.first_name} is from ${nationAjax.response.capital} and likes to eat ${foodAjax.response.dish}.`
//     ),
//   error: err => console.log('Error:', err),
//   complete: () => console.log('Completed')
// });

//43 - forkJoin Creation Function - error scenario
// import { forkJoin, Observable } from 'rxjs';
//
// const a$ = new Observable(subscriber => {
//   setTimeout(() => {
//     subscriber.next('A');
//     subscriber.complete();
//   }, 5000);
//
//   return () => {
//     console.log('A teardown');
//   };
// });
// const b$ = new Observable(subscriber => {
//   setTimeout(() => {
//     subscriber.error('Failure!');
//   }, 3000);
//
//   return () => {
//     console.log('B teardown');
//   };
// });
//
// forkJoin([a$, b$]).subscribe({
//   // next: ([a, b]) => {
//   next: value => {
//     console.log(value);
//   },
//   error: err => console.log('Error:', err),
//   complete: () => console.log('Completed')
// });

//44 - combineLatest Creation Function
import { combineLatest, fromEvent } from 'rxjs';

const temperatureInput = document.getElementById('temperature-input');
const conversionDropdown = document.getElementById('conversion-dropdown');
const resultText = document.getElementById('result-text');

const temperatureInputEvent$ = fromEvent(temperatureInput, 'input');
const conversionInputEvent$ = fromEvent(conversionDropdown, 'input');

combineLatest([temperatureInputEvent$, conversionInputEvent$]).subscribe(
  ([temperatureInputEvent, conversionInputEvent]) => {
    const temperature = Number(temperatureInputEvent.target['value']);
    const conversion = conversionInputEvent.target['value'];

    let result: number;
    if (conversion === 'f-to-c') {
      result = ((temperature - 32) * 5) / 9;
    } else if (conversion === 'c-to-f') {
      result = (temperature * 9) / 5 + 32;
    }

    resultText.innerText = String(result);
  }
);
