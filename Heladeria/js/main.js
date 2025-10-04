async function loadFragment(url, elementId) {
    const response = await fetch(url);
    const text = await response.text();
    document.getElementById(elementId).innerHTML = text;
}

async function loadProducts() {
    const productsContainer = document.getElementById('products');
    if (!productsContainer) return;

    const response = await fetch('data/products.json');
    const products = await response.json();
    const template = document.getElementById('product-template');
    
    products.forEach(product => {
        const instance = document.importNode(template.content, true);
        instance.querySelector('img').src = product.image;
        instance.querySelector('h3').textContent = product.name;
        instance.querySelector('p').textContent = product.description;
        instance.querySelector('span').textContent = `$${product.price}`;
        productsContainer.appendChild(instance);
        
        const productCard = document.createElement('product-card');
        productCard.setAttribute('name', product.name);
        productCard.setAttribute('description', product.description);
        productCard.setAttribute('price', product.price);
        productCard.setAttribute('image', product.image);
        productsContainer.appendChild(productCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadFragment('components/header.html', 'header');
    loadFragment('components/footer.html', 'footer');
    loadFragment('components/sidebar.html', 'sidebar');
    loadProducts();
});