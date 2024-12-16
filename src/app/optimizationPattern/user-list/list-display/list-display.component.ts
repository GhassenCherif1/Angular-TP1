import { Component, Input } from '@angular/core';
import { User } from '../../users.service';
import memoize from "memo-decorator";

export const fibonnaci = (n: number): number => {
  if (n==1 || n==0) {
    return 1;
  }
  return fibonnaci(n-1) + fibonnaci(n-2);
}
@Component({
  selector: 'app-list-display',
  standalone: true,
  imports: [],
  templateUrl: './list-display.component.html',
  styleUrl: './list-display.component.css'
})
export class ListDisplayComponent {
// Cache the results of this function
@memoize()
fibo(n: number): number {
  const fib = fibonnaci(n);
  console.log({n, fib});

  return fib;
}
  @Input() users: User[] = [];
}

