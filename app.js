/**
 * LÓGICA DE NAVEGACIÓN Y VISTAS DINÁMICAS (SPA)
 */

const appState = {
    currentView: 'CATEGORIES', // 'CATEGORIES', 'PRODUCTS', 'DETAIL'
    selectedCategory: null,
    selectedProduct: null,
    activeColorIndex: 0,
    activeSize: null
};

const appContent = document.getElementById('app-content');
const backBtn = document.getElementById('back-btn');
const brandLogo = document.getElementById('brand-logo');

document.addEventListener('DOMContentLoaded', () => {
    initEvents();
    render();
});

function initEvents() {
    brandLogo.addEventListener('click', () => {
        navigateTo('CATEGORIES');
    });

    backBtn.addEventListener('click', () => {
        if (appState.currentView === 'DETAIL') {
            navigateTo('PRODUCTS', appState.selectedCategory);
        } else if (appState.currentView === 'PRODUCTS') {
            navigateTo('CATEGORIES');
        }
    });
}

function navigateTo(view, data = null) {
    appState.currentView = view;

    if (view === 'CATEGORIES') {
        appState.selectedCategory = null;
        appState.selectedProduct = null;
    } else if (view === 'PRODUCTS') {
        appState.selectedCategory = data;
        appState.selectedProduct = null;
    } else if (view === 'DETAIL') {
        appState.selectedProduct = data;
        appState.activeColorIndex = 0;
        appState.activeSize = data.sizes[0] || 'S';
    }

    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function render() {
    updateHeaderUI();

    switch (appState.currentView) {
        case 'CATEGORIES':
            renderCategoriesView();
            break;
        case 'PRODUCTS':
            renderProductsView();
            break;
        case 'DETAIL':
            renderDetailView();
            break;
    }
}

function updateHeaderUI() {
    if (appState.currentView === 'CATEGORIES') {
        backBtn.classList.add('hidden');
    } else {
        backBtn.classList.remove('hidden');
        backBtn.textContent = appState.currentView === 'PRODUCTS' 
            ? '← Categorías' 
            : '← Volver al listado';
    }
}

/* VISTA 1: CATEGORÍAS (Renderizado con Imagen de Fondo) */
function renderCategoriesView() {
    let html = `
        <h2 class="section-title">CATEGORÍAS</h2>
        <div class="categories-grid">
    `;

    catalogData.forEach(cat => {
        html += `
            <div class="category-card" data-cat-id="${cat.id}">
                <img src="${cat.image}" alt="${cat.name}" class="category-bg-img" loading="lazy">
                <div class="category-overlay"></div>
                <h3>${cat.name}</h3>
            </div>
        `;
    });

    html += `</div>`;
    appContent.innerHTML = html;

    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const catId = card.getAttribute('data-cat-id');
            const category = catalogData.find(c => c.id === catId);
            navigateTo('PRODUCTS', category);
        });
    });
}

/* VISTA 2: LISTADO DE PRODUCTOS */
function renderProductsView() {
    const category = appState.selectedCategory;
    
    let html = `
        <h2 class="section-title">${category.name}</h2>
        <div class="products-grid">
    `;

    category.products.forEach(product => {
        const defaultColor = product.colors[0];

        html += `
            <div class="product-card" data-prod-id="${product.id}">
                <div class="product-image-container js-product-target">
                    <img id="img-${product.id}" src="${defaultColor.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <h3 class="product-title js-product-target">${product.name}</h3>
                    <p class="product-desc">${product.description}</p>
                    <p class="product-price">${product.price}</p>
                    
                    <div class="swatches-container">
                        ${product.colors.map((color, index) => `
                            <span 
                                class="swatch ${index === 0 ? 'active' : ''}" 
                                style="background-color: ${color.hex};" 
                                title="${color.name}"
                                data-prod-id="${product.id}"
                                data-img-src="${color.image}">
                            </span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    appContent.innerHTML = html;

    // Eventos Swatch de Color
    document.querySelectorAll('.swatch').forEach(swatch => {
        swatch.addEventListener('click', (e) => {
            e.stopPropagation();
            const prodId = swatch.getAttribute('data-prod-id');
            const newImgSrc = swatch.getAttribute('data-img-src');
            
            const targetImg = document.getElementById(`img-${prodId}`);
            if (targetImg) targetImg.src = newImgSrc;

            const parent = swatch.parentElement;
            parent.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');
        });
    });

    // Evento Navegación a Detalle
    document.querySelectorAll('.js-product-target').forEach(el => {
        el.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            const prodId = card.getAttribute('data-prod-id');
            const product = category.products.find(p => p.id === prodId);
            navigateTo('DETAIL', product);
        });
    });
}

/* VISTA 3: DETALLE DE PRODUCTO */
function renderDetailView() {
    const product = appState.selectedProduct;

    let html = `
        <div class="product-detail-layout">
            <div class="detail-gallery">
                <img id="detail-main-image" src="${product.colors[appState.activeColorIndex].image}" alt="${product.name}">
            </div>

            <div class="detail-info">
                <h2 class="detail-title">${product.name}</h2>
                <p class="detail-price">${product.price}</p>
                
                <div class="detail-sku">
                    SKU: <span id="sku-display">---</span>
                </div>

                <p class="product-desc">${product.description}</p>

                <div class="selector-group">
                    <span class="selector-label">Color: <strong id="color-name-display">${product.colors[appState.activeColorIndex].name}</strong></span>
                    <div class="swatches-container">
                        ${product.colors.map((color, index) => `
                            <span 
                                class="swatch detail-swatch ${index === appState.activeColorIndex ? 'active' : ''}" 
                                style="background-color: ${color.hex};" 
                                data-color-index="${index}">
                            </span>
                        `).join('')}
                    </div>
                </div>

                <div class="selector-group">
                    <span class="selector-label">Talla:</span>
                    <div class="sizes-container">
                        ${product.sizes.map(size => `
                            <button 
                                class="size-btn ${size === appState.activeSize ? 'active' : ''}" 
                                data-size="${size}">
                                ${size}
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;

    appContent.innerHTML = html;
    updateSKU();

    document.querySelectorAll('.detail-swatch').forEach(swatch => {
        swatch.addEventListener('click', () => {
            const index = parseInt(swatch.getAttribute('data-color-index'));
            appState.activeColorIndex = index;

            document.getElementById('detail-main-image').src = product.colors[index].image;
            document.getElementById('color-name-display').textContent = product.colors[index].name;

            document.querySelectorAll('.detail-swatch').forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');

            updateSKU();
        });
    });

    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            appState.activeSize = btn.getAttribute('data-size');

            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            updateSKU();
        });
    });
}

function updateSKU() {
    const catPrefix = appState.selectedCategory.prefix;
    const prodPrefix = appState.selectedProduct.prefix;
    const colPrefix = appState.selectedProduct.colors[appState.activeColorIndex].prefix;
    const sizePrefix = appState.activeSize;

    const sku = `${catPrefix}-${prodPrefix}-${colPrefix}-${sizePrefix}`;
    const skuDisplay = document.getElementById('sku-display');
    if (skuDisplay) skuDisplay.textContent = sku;
}