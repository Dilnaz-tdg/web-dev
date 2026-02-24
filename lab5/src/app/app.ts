import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './pages/product-list/product-list';
import { CATEGORIES } from './data/categories';
import { PRODUCTS } from './data/products';
import { Category } from './models/category';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  categories: Category[] = CATEGORIES;

  allProducts: Product[] = PRODUCTS;

  selectedCategoryId: number | null = null;

  selectCategory(id: number): void {
    this.selectedCategoryId = id;
  }

  get filteredProducts(): Product[] {
    if (this.selectedCategoryId === null) return [];
    return this.allProducts.filter(p => p.categoryId === this.selectedCategoryId);
  }

  handleDelete(id: number): void {
    this.allProducts = this.allProducts.filter(p => p.id !== id);
  }
}
