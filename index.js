function openMenu(){
    document.body.classList.add('open')
    }
    
    function closeMenu(){
    document.body.classList.remove('open')
    }
    let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartElement = document.querySelector("#cart-items");
    const cartCountElement = document.querySelector("#cart-count"); // Selectăm elementul pentru afișarea numărului total de produse
    cartCountElement.innerHTML("#cart-items") = cart.length; // Actualizăm conținutul cu lungimea coșului de cumpărături

    cartElement.innerHTML = ""; // Curățăm conținutul coșului de cumpărături
    cart.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.textContent = `${item.name} - ${item.price}`;
        cartElement.appendChild(itemElement);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".product__add-to-cart-btn");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");
            const price = button.getAttribute("data-price");
            addToCart(name, price);
        });
    });


    initShopCount();
    initModal();
});

//Lista de cumparaturi
const shopList = [];

function initShopCount() {
    const addToCartButtons = document.getElementById("shop-cart-count");
    addToCartButtons.innerHTML= shopList.length;
}

function addToCart(name, price) {

    const newItem = {
        name: name,
        price: price,
    }

    shopList.push(newItem);

    const addToCartButtons = document.getElementById("shop-cart-count");
    addToCartButtons.innerHTML= shopList.length;
}

function initModal() {
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("subscribeBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}