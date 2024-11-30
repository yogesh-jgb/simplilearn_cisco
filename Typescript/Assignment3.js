var Product = /** @class */ (function () {
    function Product(name, brand, price, discount) {
        this.name = name;
        this.brand = brand;
        this.price = typeof price === "string" ? parseFloat(price) : price;
        this.discount = discount;
    }
    Product.prototype.calculateDiscountedPrice = function () {
        var discountAmount = (this.price * this.discount) / 100;
        var discountedPrice = this.price - discountAmount;
        return discountedPrice;
    };
    Product.prototype.display = function () {
        console.log("Product Name: ".concat(this.name));
        console.log("Brand: ".concat(this.brand));
        console.log("Original Price: $".concat(this.price.toFixed(2)));
        console.log("Discount: ".concat(this.discount, "%"));
        console.log("Discounted Price: $".concat(this.calculateDiscountedPrice().toFixed(2)));
    };
    return Product;
}());
var product = new Product("Mobile", "Sumsang", "499.99", 10);
product.display();
