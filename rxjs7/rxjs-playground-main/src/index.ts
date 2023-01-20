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

// /* resolve => next, reject=>error */
// const somePromise = new Promise<string>((resolve, reject) => {
//   resolve('Resolved!');
//   // reject('Rejected!');
// });
// const observableFromPromise$ = from(somePromise);
// observableFromPromise$.subscribe({
//   next: value => console.log(value),
//   error: err => console.log('Error:', err),
//   complete: () => console.log('Completed')
// });

//39 - fromEvent Creation Function (hot observable)
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

// import { forkJoin, Observable, of } from 'rxjs';
// import { ajax } from 'rxjs/internal/ajax/ajax';
//
// //Mike is from New Delhi and likes to eat pasta.
//
// const randomName$ = ajax('https://random-data-api.com/api/name/random_name');
// const randomNation$ = ajax('https://random-data-api.com/api/nation/random_nation');
// const randomFood$ = ajax('https://random-data-api.com/api/food/random_food');
// // const randomFood$ = of({ response: { dish: '123' } }, { response: { dish: 'abc' } });
// // const randomFood$ = new Observable(subscriber => {
// //   // subscriber.error('Failure!');
// //   subscriber.complete();
// // });
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
// import { combineLatest, fromEvent } from 'rxjs';
//
// const temperatureInput = document.getElementById('temperature-input');
// const conversionDropdown = document.getElementById('conversion-dropdown');
// const resultText = document.getElementById('result-text');
//
// const temperatureInputEvent$ = fromEvent(temperatureInput, 'input');
// const conversionInputEvent$ = fromEvent(conversionDropdown, 'input');
//
// combineLatest([temperatureInputEvent$, conversionInputEvent$]).subscribe(
//   ([temperatureInputEvent, conversionInputEvent]) => {
//     const temperature = Number(temperatureInputEvent.target['value']);
//     const conversion = conversionInputEvent.target['value'];
//
//     let result: number;
//     if (conversion === 'f-to-c') {
//       result = ((temperature - 32) * 5) / 9;
//     } else if (conversion === 'c-to-f') {
//       result = (temperature * 9) / 5 + 32;
//     }
//
//     resultText.innerText = String(result);
//   }
// );

//Pipeable operators

//48 - filter

// import { filter, Observable } from 'rxjs';
//
// interface NewsItem {
//   category: 'Business' | 'Sport';
//   content: string;
// }
//
// const newsfeed$ = new Observable<NewsItem>(subscriber => {
//   setTimeout(() => {
//     subscriber.next({ category: 'Business', content: 'A' });
//   }, 1000);
//   setTimeout(() => {
//     subscriber.next({ category: 'Sport', content: 'B' });
//   }, 3000);
//   setTimeout(() => {
//     subscriber.next({ category: 'Business', content: 'C' });
//   }, 4000);
//   setTimeout(() => {
//     subscriber.next({ category: 'Sport', content: 'D' });
//   }, 6000);
//   setTimeout(() => {
//     subscriber.next({ category: 'Business', content: 'E' });
//   }, 7000);
// });
//
// const sportsNewsFeed$ = newsfeed$.pipe(filter(value => value.category === 'Sport'));
//
// sportsNewsFeed$.subscribe(value => console.log(value));

//49 - map

// import { forkJoin, map } from 'rxjs';
// import { ajax } from 'rxjs/internal/ajax/ajax';
//
// //Mike is from New Delhi and likes to eat pasta.
//
// const randomFirstName$ = ajax<any>('https://random-data-api.com/api/name/random_name').pipe(
//   map(value => value.response.first_name)
// );
// const randomCapital$ = ajax<any>('https://random-data-api.com/api/nation/random_nation').pipe(
//   map(value => value.response.capital)
// );
// const randomDish$ = ajax<any>('https://random-data-api.com/api/food/random_food').pipe(
//   map(value => value.response.dish)
// );
//
// forkJoin<any>([randomFirstName$, randomCapital$, randomDish$]).subscribe(([firstName, capital, dish]) =>
//   console.log(`${firstName} is from ${capital} and likes to eat ${dish}.`)
// );

//50 - tap
//tap works only if we subscribe
// import { filter, map, of, tap } from 'rxjs';
//
// of(1, 7, 3, 6, 2)
//   .pipe(
//     filter(value => value > 5),
//     tap(value => console.log('Spy:', value)),
//     //tap({ next: value => console.log('Spy:', value), error: err => {}, complete: () => {} }),
//     map(value => value * 2)
//   )
//   .subscribe(value => console.log('Output', value));

//52 - dobounceTime

// import { debounceTime, fromEvent, map } from 'rxjs';
//
// const sliderInput = document.querySelector('input#slider');
//
// fromEvent(sliderInput, 'input')
//   .pipe(
//     debounceTime(2000),
//     map(event => event.target['value'])
//   )
//   .subscribe(value => console.log(value));

//53 - catchError

// import { catchError, EMPTY, Observable, of } from 'rxjs';
//
// const failingHttpRequest$ = new Observable(subscriber => {
//   setTimeout(() => {
//     subscriber.error(new Error('Timeout'));
//   }, 3000);
// });
//
// console.log('App started');

// failingHttpRequest$.pipe(catchError(error => of('Fallback value'))).subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Completed!')
// });

/*
When the catchError's logic subscribes to this EMPTY Observable,
it receives the complete notification instantly.
In the result, this complete notification reaches our Observer,
which we pass to the subscribe method over here.
And the whole main Subscription is ended gracefully without any errors.
*/
// failingHttpRequest$.pipe(catchError(error => EMPTY)).subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Completed!')
// });

// Flattening operators
/*
Flattening Operator will react to a next notification by creating a new inner Subscription to the provided Observable.

The complete notification won't be reemitted,
so the whole Subscription can still work further,
waiting for new values to be emitted by the source Observable.
*/

//55 - concatMap (static example)

// import { concatMap, Observable, of } from 'rxjs';
//
// const source$ = new Observable(subscriber => {
//   setTimeout(() => {
//     subscriber.next('A');
//   }, 2000);
//   setTimeout(() => {
//     subscriber.next('B');
//   }, 5000);
// });
//
// console.log('App started');
// source$.pipe(concatMap(value => of(1, 2))).subscribe(value => console.log(value));

//56 - concatMap (dynamic HTTP request)

// import { concatMap, fromEvent, map } from 'rxjs';
// import { ajax } from 'rxjs/internal/ajax/ajax';
//
// const endpointInput: HTMLInputElement = document.querySelector('input#endpoint');
// const fetchButton = document.querySelector('button#fetch');
//
// fromEvent(fetchButton, 'click')
//   .pipe(
//     map(() => endpointInput.value),
//     concatMap(value => ajax(`https://random-data-api.com/api/${value}/random_${value}`))
//   )
//   .subscribe(value => console.log(value));

//57 - concatMap (dynamic HTTP request) - error handling - first solution with completing the main subscription
/*
The error will also end our main/outer Subscription, so everything will stop working.
 */

// import { catchError, concatMap, EMPTY, fromEvent, map } from 'rxjs';
// import { ajax } from 'rxjs/internal/ajax/ajax';
//
// const endpointInput: HTMLInputElement = document.querySelector('input#endpoint');
// const fetchButton = document.querySelector('button#fetch');
//
// fromEvent(fetchButton, 'click')
//   .pipe(
//     map(() => endpointInput.value),
//     concatMap(value => ajax(`https://random-data-api.com/api/${value}/random_${value}`)),
//     catchError(() => EMPTY) //incorrect approach
//   )
//   .subscribe({
//     next: value => console.log(value),
//     error: err => {
//       console.log('Error:', err);
//     },
//     complete: () => console.log('Completed')
//   });

//58 - concatMap (dynamic HTTP request) - error handling - second proper solution
/*
If we would add the same 'catchError' operator configuration as previously, but directly to the inner Observable,
we would convert this error to a complete notification at the level of the inner Subscription,
so the 'concatMap' will see that the inner Subscription completed instead of emitting an error.
By doing so, the main Subscription won't receive any error or complete notifications,
so everything will keep on working.
 */

// import { catchError, concatMap, EMPTY, fromEvent, map, of } from 'rxjs';
// import { ajax } from 'rxjs/internal/ajax/ajax';
//
// const endpointInput: HTMLInputElement = document.querySelector('input#endpoint');
// const fetchButton = document.querySelector('button#fetch');
//
// fromEvent(fetchButton, 'click')
//   .pipe(
//     map(() => endpointInput.value),
//     // concatMap(value => ajax(`https://random-data-api.com/api/${value}/random_${value}`).pipe(catchError(() => EMPTY)))
//     concatMap(value =>
//       ajax(`https://random-data-api.com/api/${value}/random_${value}`).pipe(
//         catchError(error => of(`Could not fetch data: ${error}`))
//       )
//     )
//   )
//   .subscribe({
//     next: value => console.log(value),
//     error: err => {
//       console.log('Error:', err);
//     },
//     complete: () => console.log('Completed')
//   });

//60 - switchMap
/*
So, the 'concatMap' operator waited for the previous inner Subscription to finish.
'switchMap', on the other hand, doesn't wait for that to happen.
Instead, it just cancels the previous Subscription by unsubscribing and immediately starts a new one for the new value.
 */

//61 - mergeMap
/*
'mergeMap' emits the values to the output whenever any of the inner Subscriptions receive some value.
 */

//Subjects

//67 - Subject

// import { fromEvent, map, Subject } from 'rxjs';
//
// const emitButton = document.querySelector('button#emit');
// const inputElement: HTMLInputElement = document.querySelector('#value-input');
// const subscribeButton = document.querySelector('button#subscribe');
//
// const value$ = new Subject<string>();
//
// fromEvent(emitButton, 'click')
//   .pipe(map(() => inputElement.value))
//   .subscribe(value$);
//
// fromEvent(subscribeButton, 'click').subscribe(() => {
//   console.log('New Subscription');
//   value$.subscribe(value => console.log(value));
// });

//69 - BehaviorSubject

import { BehaviorSubject, fromEvent, Subject, withLatestFrom } from 'rxjs';

const loggedInSpan: HTMLElement = document.querySelector('span#logged-in');
const loginButton: HTMLElement = document.querySelector('button#login');
const logoutButton: HTMLElement = document.querySelector('button#logout');
const printStateButton: HTMLElement = document.querySelector('button#print-state');

// const isLoggedIn$ = new Subject<boolean>();
const isLoggedIn$ = new BehaviorSubject<boolean>(false);
fromEvent(loginButton, 'click').subscribe(value => isLoggedIn$.next(true));
fromEvent(logoutButton, 'click').subscribe(value => isLoggedIn$.next(false));

// Navigation bar
isLoggedIn$.subscribe(isLoggedIn => {
  // console.log('isLoggedIn', isLoggedIn);
  loggedInSpan.innerText = isLoggedIn.toString();
});

// Buttons
isLoggedIn$.subscribe(isLoggedIn => {
  logoutButton.style.display = isLoggedIn ? 'block' : 'none';
  loginButton.style.display = !isLoggedIn ? 'block' : 'none';
});

// fromEvent(printStateButton, 'click').subscribe(() => console.log('User is logged in:', isLoggedIn$.value));
//OR
fromEvent(printStateButton, 'click')
  .pipe(withLatestFrom(isLoggedIn$))
  .subscribe(([event, isLoggedIn]) => console.log('User is logged in:', isLoggedIn));
