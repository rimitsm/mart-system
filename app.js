const products = [
  { id: 1, name: "Fresh Apples (1kg)", price: 3.50 },
  { id: 2, name: "Organic Milk (1L)", price: 2.20 },
  { id: 3, name: "Whole Wheat Bread", price: 2.80 },
  { id: 4, name: "Cheddar Cheese", price: 4.50 }
];

let cart = [];

function renderProducts() {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = products.map(product => `
    <div class="card">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `).join('');
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCartUI();
}

function updateCartUI() {
  const cartList = document.getElementById('cart-items');
  const countEl = document.getElementById('cart-count');
  const totalEl = document.getElementById('cart-total');

  cartList.innerHTML = cart.map(item => `
    <li><span>${item.name}</span> <span>$${item.price.toFixed(2)}</span></li>
  `).join('');

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  countEl.textContent = cart.length;
  totalEl.textContent = total.toFixed(2);
}

document.getElementById('checkout-btn').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    alert(`Order placed! Total paid: $${document.getElementById('cart-total').textContent}`);
    cart = [];
    updateCartUI();
  }
});

renderProducts();
