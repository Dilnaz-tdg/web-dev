import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../../components/product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  @Input({ required: true }) products: Product[] = [];
  @Output() deleteProduct = new EventEmitter<number>();

  removeProduct(id: number): void {
    this.deleteProduct.emit(id);
  }
}
