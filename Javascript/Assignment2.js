class Product {
    constructor(product, price, discount) {
        this.product = product;
        this.price = price;
        this.discount = discount;
    }
    discountedPrice() {
        return this.price - (this.price * this.discount / 100);
    }
}

class ProductBrand extends Product {
    constructor(product, price, discount, brand) {
        super(product, price, discount);
        this.brand = brand;
    }
    details() {
        return `product: ${this.product} price: ${this.price} brand: ${this.brand}`;
    }
}

let ob1 = new ProductBrand("watch", 5000, 10, "titan");
let ob2 = new ProductBrand("Led TV", 10000, 20, "apple");
let ob3 = new ProductBrand("oven", 20000, 30, "philips");
let ob4 = new ProductBrand("shoes", 8000, 5, "red-tape");

console.log(ob1.discountedPrice());
console.log(ob2.discountedPrice());
console.log(ob3.discountedPrice());
console.log(ob4.discountedPrice());
