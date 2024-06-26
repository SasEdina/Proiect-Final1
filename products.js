async function fetchProducts() {
    const response = await fetch(
      "https://ecommerce-samurai.up.railway.app/product"
    );
    const data = await response.json();
  
    const products = data.data; // va afisa doar data nu si cele status sau prototype
    return products;
  }
  
  async function renderProducts() {
    let products = await fetchProducts();
    const productsList = document.querySelector("#all-products-list");
    const productsFilter = document.querySelector(".products__header__filter" ).value;
  
    if(productsFilter ==="Furniture"){
     products = products.filter((product) => product.category ==="Furniture");
    }else if(productsFilter ==="Electronics"){
     products = products.filter((product) =>product.category ==="Electronics");
    }else if(productsFilter ==="Lamps"){
      products = products.filter((product)=> product.category ==="Lamps");
    }else if(productsFilter ==="Kitchen"){
      products = products.filter((product)=> product.category ==="Kitchen");
    }
    else if(productsFilter ==="Chairs"){
      products = products.filter((product)=> product.category ==="Chairs");
    }
    else if(productsFilter ==="Skin Care"){
      products = products.filter((product)=> product.category ==="Skin Care");
    }
  
    const productsHTML = products
      .map((product) => {
        return `<div class="product">
  <img src="https://ecommerce-samurai.up.railway.app/${product.images[0]}" alt=""
  class="product__img" />
  <div class="product__details">
    <h3 class="product__details__title">${product.name}</h3>
    <span class="product__details__price">$${product.price}</span>
    <button class="product__details__button" onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
   </div>
  </div>`;
      })
      .join("");
    productsList.innerHTML = productsHTML;
  }
  
  renderProducts();

  function addToCart(name, price) {
    cart.push({ name, price });
    updateCartDisplay(); // Apelăm funcția pentru actualizarea afișării coșului de cumpărături
}

function updateCartDisplay() {
    const cartElement = document.querySelector("#cart-items");
    const cartCountElement = document.querySelector("#cart-count"); // Selectăm elementul pentru afișarea numărului total de produse
    cartCountElement.textContent = cart.length; // Actualizăm conținutul cu lungimea coșului de cumpărături

    cartElement.innerHTML = ""; // Curățăm conținutul coșului de cumpărături
    cart.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.textContent = `${item.name} - $${item.price}`;
        cartElement.appendChild(itemElement);
    });
}


  