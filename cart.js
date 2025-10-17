const cartList = document.getElementById('cart-list'); // cart.html'de bu id'li bir element olmalı
const totalPrice = document.getElementById('total-price'); // Toplam fiyat için element

function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        cartList.innerHTML = '<p>Sepetiniz boş</p>';
        totalPrice.textContent = '0 TL';
        return;
    }

    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>${item.price.toLocaleString('tr-TR')} TL</p>
            </div>
            <button class="remove-btn" data-id="${item.id}">Kaldır</button>
        `;
        cartList.appendChild(cartItem);
        total += item.price;
    });
    totalPrice.textContent = `${total.toLocaleString('tr-TR')} TL`;
}

// Sayfa yüklendiğinde sepeti göster
document.addEventListener('DOMContentLoaded', displayCart);

// Ürün kaldırma işlemi
cartList.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-btn')) {
        const productId = parseInt(event.target.dataset.id);
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }
});