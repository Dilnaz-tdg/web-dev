import { Component, output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  styles: [`
    .btn { padding: 5px; }
  `],
  template: `<button class="btn" (click)="addItem()">Add Item</button>`,
})
export class Child {
  add = output<void>();

  addItem() {
    this.add.emit();
  }
}
