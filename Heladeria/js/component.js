class ProductCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const container = document.createElement('div');
        container.className = 'product-card';
        
        const img = document.createElement('img');
        img.src = this.getAttribute('image');
        img.alt = this.getAttribute('name');
        
        const name = document.createElement('h3');
        name.textContent = this.getAttribute('name');
        
        const description = document.createElement('p');
        description.textContent = this.getAttribute('description');
        
        const price = document.createElement('span');
        price.textContent = `$${this.getAttribute('price')}`;
        
        const style = document.createElement('style');
        style.textContent = `
            .product-card {
                background-color: #FFF8E1;
                border: 1px solid #37474F;
                border-radius: 8px;
                padding: 15px;
                text-align: center;
            }
            img {
                max-width: 100%;
                height: auto;
                border-radius: 4px;
            }
            h3 {
                margin: 10px 0;
            }
            p {
                margin: 5px 0;
            }
            span {
                font-weight: bold;
                color: #37474F;
            }
        `;
        
        shadow.appendChild(style);
        shadow.appendChild(container);
        container.appendChild(img);
        container.appendChild(name);
        container.appendChild(description);
        container.appendChild(price);
    }
}
customElements.define('product-card', ProductCard);