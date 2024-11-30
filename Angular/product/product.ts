// export interface Product {
//     id: number;
//     title: string;
//     description: string;
//     category: string;
//     price: number;
//     brand: string;
//     thumbnail: string;
//     reviews: ProductReview[];
//   }
//  export interface ProductReview {
//     rating: number;
//     comment: string;
//     reviewerName: string;
//   }
  
export interface Product {
  name: string;
  price: number;
}

export interface ProductInfo {
  name: string;
  price: number;
  id: string;
  createdAt: string;
}
