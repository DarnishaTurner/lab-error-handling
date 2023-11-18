/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleProducts = [
  { id: 1, name: "Panel Headboard", priceInCents: 12332 },
  { id: 2, name: "Low Profile Sleigh Bed", priceInCents: 22999 },
  { id: 3, name: "Oval 100% Cotton Solid Bath Rug", priceInCents: 1399 },
  { id: 4, name: "Abstract Light Gray Area Rug", priceInCents: 33999 },
  { id: 5, name: "Multi Game Table", priceInCents: 81743 },
];
// Do not change the line above.

/*
  This function should throw an error if:
  - The `cart` array is empty.
*/
function getCartTotal(cart) {
  if(cart.length === 0){
    throw("The 'cart' array is empty")
  }
  let result = 0;
  for (let product of cart) {
    result += product.priceInCents;
  }
  return result;
}
//Lines 22-24 allows the function to  add up the price of all items in the cart and return the total, throw an error if the cart is empty, return an array of all products that have a price within the price range, return an empty array if no items fit within the price range and return the total of all products within the price range.

/*
  This function should throw an error if:
  - The `products` array is empty.
  - Either `min` or `max` is not a number.
  - `max` is equal to `0`.
  - `min` is greater than `max`.
  - Either `min` or `max` is less than `0`.
  - Any of the products in the `products` array does not have a `priceInCents` key.
*/
function filterProductsByPriceRange(products, min, max) {
if(typeof min !== `number` || typeof max !== `number` || isNaN(min) || isNaN(max)) {
  throw new Error("Min or max is not a number");
}

  if(products.length === 0) {
    throw new Error("Products array is empty");
  }

  if(isNaN(min) || isNaN(max)) {
    throw new Error("Min or max is not a number");
  }

  if(max === 0) {
    throw new Error("Max should not be equal to 0");
  }

  if(min > max) {
    throw new Error("Min should be less than or equal to max");
  }

  if(min < 0 || max < 0) {
    throwne
    Error("Min or max should not be less than 0");
  }

  for(let product of products) {
    if(!(`priceInCents` in product)) {
      throw new Error("Product does not have a priceInCents key");
    }
  }

  const result = [];
  for(let product of products) {
    if(product.priceInCents >= min && product.priceInCents <= max) {
      result.push(product);
    }
  }
  return result;
}
// function filterProductsByPriceRange(products, min, max) {
//   const result = [];
//   for (let product of products) {
//     if (product.priceInCents >= min && product.priceInCents <= max) {
//       result.push(product);
//     }
//   }
//   return result;
// }

/*
  If any errors occur in this function, it should return `0`.
*/
function getTotalOfAllProductsByPriceRange(products, min, max) {
  try {
    const filteredProducts = filterProductsByPriceRange(products, min, max);
    const total = getCartTotal(filteredProducts);
    return total;
  } catch (error) {
    console.error(`An error occurred:`, error);
    return 0;
  }
}
// function getTotalOfAllProductsByPriceRange(products, min, max) {
//   const filteredProducts = filterProductsByPriceRange(products, min, max);
//   const total = getCartTotal(filteredProducts);

//   return total;
// }

module.exports = {
  getCartTotal,
  filterProductsByPriceRange,
  getTotalOfAllProductsByPriceRange,
};
