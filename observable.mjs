import { Observable, takeWhile } from 'rxjs';


const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});

const observer1 = observable.subscribe({
  next(x) { console.log('Received by 1 value:', x); },
  complete() { console.log('Observable 1 completed'); }
});

const observer2 = observable.pipe(
  takeWhile(value => value != "2")
).subscribe(value => console.log('Received by 2 value:', value));

