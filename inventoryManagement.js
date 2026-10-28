const products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {function addProduct(productName) {
    products.push(productName);
}
    console.log(products[0]);
}

function updateProductName(index, newName) {
    products[index] = newName;
}

function removeLastProduct() {
    products.pop();
}

function addProduct(productName) {
    products.push(productName);
}

module.exports = {
    products,
    logFirstProduct,
    updateProductName,
    removeLastProduct,
    addProduct
};