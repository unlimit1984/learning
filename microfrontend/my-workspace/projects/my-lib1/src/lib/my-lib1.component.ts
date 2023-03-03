import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib1',
  template: `
    <p>
      my-lib1 works!
    </p>
  `,
  styles: [
  ]
})
export class MyLib1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
