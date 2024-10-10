let cart = [];

document.addEventListener('DOMContentLoaded', async () => {
    const products = await fetchProducts();
    if (products) {
        displayProducts(products);
    }

    const checkoutBtn = document.getElementById('checkout');
    checkoutBtn.addEventListener('click', handleCheckout);
});

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product', 'col-4');
        
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="${product.name}" class="img-fluid">
            <p>Precio: $${product.price}</p>
            <button class="btn btn-primary" data-id="${product.id}">Agregar al Carrito</button>
        `;
        
        productDiv.querySelector('button').addEventListener('click', () => addToCart(product));
        
        productList.appendChild(productDiv);
    });
}

function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
        alert(`${product.name} ya está en el carrito`);
    } else {
        cart.push(product);
        updateCart();
    }
}

function updateCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    
    cart.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('cart-item');
        productDiv.innerText = `${product.name} - $${product.price}`;
        cartDiv.appendChild(productDiv);
    });

    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>El carrito está vacío</p>';
    }
}

function handleCheckout() {
    if (cart.length === 0) {
        alert('El carrito está vacío');
        return;
    }
    
    alert('Compra realizada con éxito');
    cart = []; 
    updateCart();
}