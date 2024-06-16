function calculateTotalPrice(products) {
    const calculateSubtotal = () => {
        return products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    };

    const applyDiscount = (subtotal) => {
        const discount = subtotal > 100 ? 0.1 : 0;
        return subtotal * (1 - discount);
    };

    const applyShippingCost = (subtotal) => {
        const shippingCost = subtotal < 50 ? 5 : 0;
        return subtotal + shippingCost;
    };

    const subtotal = calculateSubtotal();
    const totalAfterDiscount = applyDiscount(subtotal);
    const finalTotal = applyShippingCost(totalAfterDiscount);

    return finalTotal.toFixed(2);
}

const products1 = [
    { price: 20, quantity: 2 },
    { price: 30, quantity: 1 }
];

const products2 = [
    { price: 20, quantity: 6 },
    { price: 10, quantity: 3 }
];

console.log("Total products1:", calculateTotalPrice(products1));
console.log("Total products2:", calculateTotalPrice(products2));
