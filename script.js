// ALl the element selection

const mainProductDiv = document.querySelector('#carouselExampleFade');

const myModal = new bootstrap.Modal(document.getElementById('exampleModal'))

const buttonMinus = document.getElementById('btn-minus');
const buttonPlus = document.getElementById('btn-plus');

//Selcting the cart
const cart = document.querySelector('.cart-num');

// Clicking on cart symbol in nav bar

const cartSymbol = document.getElementById('cartSymbol');
const cartContent = document.getElementById('cartContent');
const totalQuantity = document.querySelector('.total-quantity');
const totalAmount = document.querySelector('.total-price');

let quantity = document.querySelector('.product-quantity');

let itemOrdered = 0;

// showing modal on double click of the product Image

mainProductDiv.addEventListener('dblclick', (e) => {
    myModal.show();
});

// Adding and Substracting Items

buttonPlus.addEventListener('click', (e) => {

    if (+quantity.textContent === 0) {
        itemOrdered = 1
    } else {
        itemOrdered = 1 + +quantity.textContent;
    }
    quantity.textContent = itemOrdered;
    cart.textContent = itemOrdered;
    totalQuantity.textContent = itemOrdered;
    totalAmount.textContent = `$${125 * itemOrdered}`;

    if (cart.classList.contains('visually-hidden')) {
        cart.classList.remove('visually-hidden');
    }
});

buttonMinus.addEventListener('click', (e) => {

    if (+quantity.textContent > 0) {
        itemOrdered = +quantity.textContent - 1;
        cart.textContent = itemOrdered;
        quantity.textContent = itemOrdered;

        totalQuantity.textContent = itemOrdered;
        totalAmount.textContent = `$${125 * itemOrdered}`;

        if (+quantity.textContent === 0) {
            cart.classList.add('visually-hidden');
        }
    }
});


//Showing the Cart Value

if (cartSymbol) {
    console.log('Goes Here')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(cartContent);
    cartSymbol.addEventListener('click', () => {
        if (itemOrdered > 0) {
            toastBootstrap.show()
        }
    })
}


