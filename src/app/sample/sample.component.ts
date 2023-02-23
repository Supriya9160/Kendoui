import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent {
  public isDisabledProducts = true;
  public isDisabledOrders = true;

  public defaultItemCategories: { categoryName: string; categoryId: number } = {
    categoryName: "Select Country",
    categoryId: 0,
  };

  public defaultItemProducts: { productName: string; productId: number } = {
    productName: "Select State",
    productId: 0,
  };

  public defaultItemOrders: { orderName: string; orderId: number } = {
    orderName: "Select City",
    orderId: 0,
  };

  public dataCategory: Array<{ categoryName: string; categoryId: number }> = [
    { categoryName: "Albania", categoryId: 1 },
    { categoryName: "India", categoryId: 2 },
    { categoryName: "Japan", categoryId: 3 },
  ];

  public dataProducts: Array<{
    productName: string;
    productId: number;
    categoryId: number;
  }> = [
    { productName: "Berat", productId: 2, categoryId: 1 },
    { productName: "Diber", productId: 3, categoryId: 1 },
    { productName: "Kerala", productId: 4, categoryId: 2 },
    { productName: "Tamilnadu", productId: 5, categoryId: 2 },
    { productName: "Hokkaido", productId: 6, categoryId: 3 },
    { productName: "Tohoku", productId: 7, categoryId: 3 },
  ];

  public dataOrders: Array<{
    orderName: string;
    orderId: number;
    productId: number;
  }> = [
    { orderName: "Agalli", orderId: 1, productId: 2 },
    { orderName: "Banaj", orderId: 2, productId: 2 },
    { orderName: "Benollaret", orderId: 3, productId: 2 },
    { orderName: "Corovode", orderId: 4, productId: 2 },
    { orderName: "Burrel", orderId: 3, productId: 3 },
    { orderName: "Klos", orderId: 4, productId: 3 },
    { orderName: "Arrmalle", orderId: 5, productId: 3 },
    { orderName: "Barbulleja", orderId: 6, productId: 3 },
    { orderName: "Trivandrum", orderId: 7, productId: 4 },
    { orderName: "Kollam", orderId: 8, productId: 4 },
    { orderName: "Ernakulam", orderId: 8, productId: 4 },
    { orderName: "Kochi", orderId: 8, productId: 4 },
    { orderName: "Madhurai", orderId: 9, productId: 5 },
    { orderName: "Tirunelveli", orderId: 10, productId: 5 },
    { orderName: "Kovilpatti", orderId: 10, productId: 5 },
    { orderName: "Sapporo", orderId: 11, productId: 6 },
    { orderName: "Ishikari", orderId: 12, productId: 6 },
    { orderName: "Eniwa", orderId: 12, productId: 6 },
    { orderName: "Aomori", orderId: 12, productId: 7},
    { orderName: "Goshogawara	", orderId: 12, productId: 7 },
    { orderName: "Hachinohe", orderId: 12, productId: 7 }
  ];

  public dataResultProducts: Array<{
    productName: string;
    productId: number;
    categoryId: number;
  }> | undefined;

  public dataResultOrders: Array<{
    orderName: string;
    orderId: number;
    productId: number;
  }> | undefined;

  public selectedCategory: { categoryName: string; categoryId: number; } | any;
  public selectedProduct: { productName: string; productId: number; } | undefined;
  public selectedOrder: { orderName: string; orderId: number; } | undefined;

  handleCategoryChange(value: { categoryId: any; categoryName?: string; }) {
    this.selectedCategory = value;
    this.selectedProduct = undefined;
    this.selectedOrder = undefined;

    if (value.categoryId === this.defaultItemCategories.categoryId) {
      this.isDisabledProducts = true;
      this.dataResultProducts = [];
    } else {
      this.isDisabledProducts = false;
      this.dataResultProducts = this.dataProducts.filter(
        (s) => s.categoryId === value.categoryId
      );
    }

    this.isDisabledOrders = true;
    this.dataResultOrders = [];
  }

  handleProductChange(value: { productName: string; productId: number; } | undefined) {
    this.selectedProduct = value;
    this.selectedOrder = undefined;

    if (this.selectedProduct!.productId === this.defaultItemProducts.productId) {
      this.isDisabledOrders = true;
      this.dataResultOrders = [];
    } else {
      this.isDisabledOrders = false;
      this.dataResultOrders = this.dataOrders.filter(
        (s) => s.productId === this.selectedProduct!.productId
      );
    }
  }

  handleOrderChange(value: { orderName: string; orderId: number; } | undefined) {
    this.selectedOrder = value;
  }
}
