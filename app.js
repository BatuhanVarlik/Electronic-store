const products = [
    { id: 1, name: "MacBook Pro", category: "laptop", price: 45000, img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/9-34_large.jpg" },
    { id: 2, name: "iPhone 15", category: "telefon", price: 35000, img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_120111127" },
    { id: 3, name: "Sony WH-1000XM5", category: "kulaklık", price: 7000, img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/sony/thumb/134039-1_large.jpg" },
    { id: 4, name: "Dell XPS 15", category: "laptop", price: 38000, img: "https://m.media-amazon.com/images/I/719CAihgtTL.jpg" },
    { id: 5, name: "Samsung Galaxy S23", category: "telefon", price: 28000, img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/137425-1-1_large.jpg" },
    { id: 6, name: "Bose QC Ultra", category: "kulaklık", price: 6500, img: "https://m.media-amazon.com/images/I/51ZR4lyxBHL.jpg" },
    { id: 7, name: "Asus Zenbook", category: "laptop", price: 32000, img: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/" },
];
const productList = document.getElementById('product-list');
const categoryButtons = document.getElementById('category-buttons');
const searchText = document.getElementById('searchInput');
const cartCount = document.getElementById('cart-count');

let cart = JSON.parse(localStorage.getItem('cart') || []);
cartCount.textContent = cart.length;

function displayProducts(productArray){
    productList.innerHTML= '';
    productArray.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
        <img src="${element.img}" alt = "${element.name}">
        <h3>${element.name}</h3>
        <p>${element.category}</p>
        <p class = "price">${element.price.toLocaleString('tr-TR')} TL</p>
        <button class="add-to-cart-btn" data-id="${element.id}">sepete ekle</button> 
        `;
        productList.appendChild(card);
    });

}
displayProducts(products);

let currentCategory = 'all';
let currentSearchTerm = '';
function applyFilters() {
   let filtretedProducts = products; 
    if(currentCategory !== 'all'){
        filtretedProducts = products.filter(product => product.category === currentCategory);
    }
    if (currentSearchTerm !== ''){
        filtretedProducts = products.filter(product => product.name.toLowerCase().includes(currentSearchTerm));
    }
    displayProducts(filtretedProducts);
}
categoryButtons.addEventListener('click',(event) => {
    if(event.target.classList.contains('btn'))
    {
    const currentActiveButton = categoryButtons.querySelector('.active')
    if(currentActiveButton)
    {
        currentActiveButton.classList.remove('active')
    }
    event.target.classList.add('active');
    currentCategory = event.target.dataset.category;

    applyFilters();
    }

} )

searchText.addEventListener('input',() => {
    currentSearchTerm = searchText.value.toLowerCase().trim();
    applyFilters();
});

productList.addEventListener('click',(event) => {
    if(event.target.classList.contains('add-to-cart-btn')){
        const productId = event.target.dataset.id;

        const productIdAsNumber = parseInt(productId);
        
        const productToAdd = products.find(product => product.id === productIdAsNumber);
        if(productToAdd){
            cart.push(productToAdd);
            cartCount.textContent = cart.length;
            console.log("sepete eklendi : ",cart);
            saveProduct();
        }
        
    }
        
})
function saveProduct(){
    localStorage.setItem('cart', JSON.stringify(cart));
}
