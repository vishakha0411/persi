let require:any;
let fs=require("fs");
interface Product {
    name: string;
        brand: string;
            price: number;
                discount: number;
                }

function sortProducts(products: Product[], order: string): Product[] {
if (order === "ASC") {
return products.sort((a, b) => a.price - b.price);
} else if (order === "DES") {
return products.sort((a, b) => b.price - a.price);
} else {
console.error("Invalid sorting order. Expected ASC or DES.");
return [];
}
}

fs.readFile("input.txt", "utf-8", function (err, data) {
if (err) {
console.error("Error reading the file:", err);
return;
}

let inputLines = data.trim().split("\n");
if (inputLines.length !== 2) {
console.error("Invalid input format. Expected two lines.");
return;
}

let productsInput = inputLines[0].trim();
let sortingOrder = inputLines[1].trim();

let products: Product[] = JSON.parse(productsInput);

let sortedProducts = sortProducts(products, sortingOrder);

console.log(sortedProducts);
});
