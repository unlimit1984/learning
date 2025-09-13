import {
  bufferCount,
  concatMap,
  exhaustMap,
  from,
  interval,
  mergeMap,
  Observable,
  of,
  share,
  shareReplay,
  Subject,
  switchMap,
  take,
  tap,
  timer,
} from "rxjs";

console.log("==== from ====");
from([1, 2, 3, 4])
  .pipe(
    tap((value) => console.log("tap", value)),
    mergeMap((id) => of(id * 2)),
  )
  .subscribe((result) => console.log(result));

console.log("==== of ====");
of([1, 2, 3, 4])
  .pipe(
    tap((value) => console.log("tap", value)),
    mergeMap((value) => of(value.map((entry) => entry * 2))),
  )
  .subscribe((result) => console.log(result));

console.log("==== switchMap, mergeMap, concatMap, exhaustMap ====");
const getDelayedResponse = (
  id: number,
): Observable<{ id: number; name: string }> => {
  if (id === 1) {
    return timer(3000).pipe(
      switchMap(() =>
        of({
          id: 1,
          name: "Первый",
        }),
      ),
    );
  }
  if (id === 2) {
    return timer(1000).pipe(
      switchMap(() =>
        of({
          id: 2,
          name: "Второй",
        }),
      ),
    );
  }
  if (id === 3) {
    return timer(5000).pipe(
      switchMap(() =>
        of({
          id: 3,
          name: "Третий",
        }),
      ),
    );
  }
  if (id === 4) {
    return timer(2000).pipe(
      switchMap(() =>
        of({
          id: 4,
          name: "Четвёртый",
        }),
      ),
    );
  }
};
// console.log("==== switchMap ====");
// from([1, 2, 3, 4])
//   .pipe(
//     switchMap((id) => getDelayedResponse(id)),
//     tap((result) => console.log(result)),
//   )
//   .subscribe();
// console.log("==== mergeMap ====");
// from([1, 2, 3, 4])
//   .pipe(
//     mergeMap((id) => getDelayedResponse(id)),
//     tap((result) => console.log(result)),
//   )
//   .subscribe();
// console.log("==== mergeMap & concurrent ====");
// from([1, 2, 3, 4])
//   .pipe(
//     mergeMap((id) => getDelayedResponse(id), 2),
//     tap((result) => console.log(result)),
//   )
//   .subscribe();
// console.log("==== mergeMap with concurrent as 1 will work like concatMap  ====");
// console.log("==== concatMap ====");
// from([1, 2, 3, 4])
//   .pipe(
//     concatMap((id) => getDelayedResponse(id)),
//     tap((result) => console.log(result)),
//   )
//   .subscribe();
// console.log("==== exhaustMap ====");
// from([1, 2, 3, 4])
//   .pipe(
//     exhaustMap((id) => getDelayedResponse(id)),
//     tap((result) => console.log(result)),
//   )
//   .subscribe();

console.log("==== cold and hot observable ====");
// //COLD observable
// const cold$ = interval(1000); // Генерирует число каждую секунду
// // Первый подписчик
// cold$.subscribe((value) => console.log("Subscriber 1:", value));
// // Output: Subscriber 1: 0,1,2...
// // Через 3 секунды добавляем второго подписчика
// setTimeout(() => {
//   cold$.subscribe((value) => console.log("Subscriber 2:", value));
//   // Output: Subscriber 2: 0,1,2...
// }, 3000);

// //HOT observable (Subject)
// const hot$ = new Subject<number>();
// // Первый подписчик
// hot$.subscribe((value) => console.log("Subscriber 1:", value));
// // Emit значения
// hot$.next(1);
// hot$.next(2);
// // Output: Subscriber 1: 1,2
// // Через 2 секунды добавляем второго подписчика
// setTimeout(() => {
//   hot$.subscribe((value) => console.log("Subscriber 2:", value));
//   hot$.next(3);
//   // Output: Subscriber 1: 3, Subscriber 2: 3
// }, 2000);

// bufferCount()
// console.log('==== bufferCount ====')
// from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
//   .pipe(bufferCount(2)) // по 1000 пользователей за раз
//   .subscribe((batch) => {
//     console.log(batch);
//   });

//take()
// console.log("==== take() ====");
// const cold$ = interval(1000).pipe(take(3)); // Генерирует число каждую секунду
// cold$.subscribe((value) => console.log("Subscriber 1:", value));

//share()
// console.log("==== share() ====");
// const shared$ = interval(1000).pipe(take(3), share());
// shared$.subscribe((v) => console.log("A:", v));
// setTimeout(() => {
//   shared$.subscribe((v) => console.log("B:", v));
// }, 1500);

//shareReplay()
// console.log("==== shareReplay() ====");
// const sharedReplay$ = interval(1000).pipe(take(3), shareReplay(1));
// sharedReplay$.subscribe((v) => console.log("A:", v));
// setTimeout(() => {
//   sharedReplay$.subscribe((v) => console.log("B:", v));
// });

//Задачи на понимание share / shareReplay(n)
// const shared$ = timer(0, 1000).pipe(take(3), share());
// shared$.subscribe((v) => console.log("A:", v));
// setTimeout(() => {
//   shared$.subscribe((v) => console.log("B:", v));
// }, 1500);
// ❓ Что получат подписчики A и B?
// ❓ Сколько раз выполнится timer?

// const replayed$ = timer(0, 1000).pipe(
//   take(3),
//   shareReplay(1), // кешируем 1 последнее значение
// );
// replayed$.subscribe((v) => console.log("A:", v));
// setTimeout(() => {
//   replayed$.subscribe((v) => console.log("B:", v));
// }, 2500);
// ❓ Что получит подписчик B?

//reply - мутный
// console.log("==== reply ====");
const apiCall$ = timer(2000).pipe(shareReplay(1));
apiCall$.subscribe(value => console.log('Подписчик 1:', value));
apiCall$.subscribe(value => console.log('Подписчик 2:', value));
