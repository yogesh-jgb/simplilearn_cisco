class Product {
    name: string;
    brand: string;
    price: number;
    discount: number;

    constructor(name: string, brand: string, price: string | number, discount: number) {
        this.name = name;
        this.brand = brand;
        this.price = typeof price === "string" ? parseFloat(price) : price;
        this.discount = discount;
    }

    calculateDiscountedPrice(): number {
        const discountAmount = (this.price * this.discount) / 100;
        const discountedPrice = this.price - discountAmount;
        return discountedPrice;
    }

    display(): void {
        console.log(`Product Name: ${this.name}`);
        console.log(`Brand: ${this.brand}`);
        console.log(`Original Price: $${this.price.toFixed(2)}`);
        console.log(`Discount: ${this.discount}%`);
        console.log(`Discounted Price: $${this.calculateDiscountedPrice().toFixed(2)}`);
    }
}

const product = new Product("Mobile", "Sumsang", "499.99", 10);
product.display();