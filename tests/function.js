/*//📂 Partially Implemented Methods
//note- for solution please check below portion of the page

function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    // TODO: Implement logic
    return null;
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    // TODO: Implement filtering logic
    return [];
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    // TODO: Implement sorting logic
    return [];
}

//---------------------------soution---------------------------------------------------------------------------

/*///complete function

//1
function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    return  price - (price * discountRate);}


    //2 

    function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    // TODO: Implement filtering logic
     return products.filter(callback); //  we are using callback for filtering the product based on certain condition
}

//3
function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    
     return inventory.slice().sort(function(a, b) {//using slice with sort will prevent the original array from getting mutated.
    const valA = a[key];
    const valB = b[key];

    if (typeof valA === 'string' && typeof valB === 'string') {
      if (valA < valB) return -1;//for checking that name of inventory is sorted in alphabetical order,example..  A is 
      // smaller than B because it comes first 
      if (valA > valB) return 1;
      return 0;
    }

    if (typeof valA === 'number' && typeof valB === 'number') {//way to compare two numbers for sorting
      return valA - valB;
    }

    return 0;
  });
}
// Exporting the functions for testing
module.exports = {
    calculateDiscount,
    filterProducts,
    sortInventory
}
