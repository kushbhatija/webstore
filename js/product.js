
let numItemsInCart = 0;

function addOneToCart() {
    numItemsInCart += 1;
    document.getElementById(`cartNum`).innerHTML = `${numItemsInCart}`;
}


document.getElementById(`addOne`).addEventListener('click', addOneToCart);





