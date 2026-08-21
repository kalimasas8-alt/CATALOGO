// Base de Datos de Productos KALIMA
const products = [
  {
    id: 1,
    name: "Brasier Realce Suave L'Élégance",
    category: "brasieres",
    price: 38.00,
    talla: "M",
    silueta: "top",
    beneficio: "realce",
    busto: "medio",
    ocasion: "diario",
    relleno: "si",
    varillas: "no",
    encaje: "no",
    badgeLeft: "MÁS VENDIDO",
    variants: [
      { colorName: "beige", hex: "#e2cabb", imgMain: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&q=80&w=600", imgHover: "https://images.unsplash.com/photo-1516575150278-77136aed6920?auto=format&fit=crop&q=80&w=600" },
      { colorName: "negro", hex: "#1c1c1c", imgMain: "https://images.unsplash.com/photo-1516575150278-77136aed6920?auto=format&fit=crop&q=80&w=600", imgHover: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  {
    id: 2,
    name: "Panty Invisible Malla & Líneas",
    category: "panties",
    price: 22.00,
    talla: "S",
    silueta: "boxer",
    beneficio: "comodidad",
    busto: "pequeno",
    ocasion: "diario",
    relleno: "no",
    varillas: "no",
    encaje: "no",
    badgeLeft: "ÍCONO | MÁS VENDIDO",
    variants: [
      { colorName: "negro", hex: "#1c1c1c", imgMain: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=600", imgHover: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&q=80&w=600" },
      { colorName: "blanco", hex: "#ffffff", imgMain: "https://images.unsplash.com/photo-1516575150278-77136aed6920?auto=format&fit=crop&q=80&w=600", imgHover: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  {
    id: 3,
    name: "Bralette Escote Profundo Elegance",
    category: "bralettes",
    price: 34.00,
    talla: "M",
    silueta: "bralette",
    beneficio: "comodidad",
    busto: "medio",
    ocasion: "especial",
    relleno: "no",
    varillas: "no",
    encaje: "si",
    badgeRight: "PACK X2",
    variants: [
      { colorName: "negro", hex: "#1a1a1a", imgMain: "https://images.unsplash.com/photo-1516575150278-77136aed6920?auto=format&fit=crop&q=80&w=600", imgHover: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  {
    id: 4,
    name: "Faja Moldante Ajuste Invisible",
    category: "fajas",
    price: 52.00,
    talla: "L",
    silueta: "faja",
    beneficio: "control",
    busto: "grande",
    ocasion: "diario",
    relleno: "no",
    varillas: "si",
    encaje: "no",
    badgeLeft: "NUEVO",
    variants: [
      { colorName: "beige", hex: "#d3b89f", imgMain: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600", imgHover: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  {
    id: 5,
    name: "Leggings Sport Fusión Seamless",
    category: "ropa",
    price: 42.00,
    talla: "S",
    silueta: "top",
    beneficio: "comodidad",
    busto: "medio",
    ocasion: "deporte",
    relleno: "no",
    varillas: "no",
    encaje: "no",
    variants: [
      { colorName: "negro", hex: "#1c1c1c", imgMain: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600", imgHover: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  {
    id: 6,
    name: "Top Deportivo Alto Rendimiento",
    category: "deporte",
    price: 29.00,
    talla: "M",
    silueta: "top",
    beneficio: "comodidad",
    busto: "medio",
    ocasion: "deporte",
    relleno: "si",
    varillas: "no",
    encaje: "no",
    variants: [
      { colorName: "negro", hex: "#1c1c1c", imgMain: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600", imgHover: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  {
    id: 7,
    name: "Enterizo Vestido de Baño Chic",
    category: "vestidos-de-bano",
    price: 58.00,
    talla: "M",
    silueta: "top",
    beneficio: "realce",
    busto: "medio",
    ocasion: "especial",
    relleno: "si",
    varillas: "no",
    encaje: "no",
    badgeLeft: "EDICIÓN LIMITADA",
    variants: [
      { colorName: "negro", hex: "#1c1c1c", imgMain: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=600", imgHover: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  {
    id: 8,
    name: "Set Lencería Satinada Special Sale",
    category: "ofertas",
    price: 26.00,
    talla: "S",
    silueta: "bralette",
    beneficio: "realce",
    busto: "pequeno",
    ocasion: "especial",
    relleno: "no",
    varillas: "no",
    encaje: "si",
    badgeRight: "30% OFF",
    variants: [
      { colorName: "beige", hex: "#e2cabb", imgMain: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=600", imgHover: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=600" }
    ]
  }
];

let selectedCategory = "";

// Renderizado de productos
function renderProducts(items) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  if (items.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem 0;">No se encontraron prendas con los filtros seleccionados.</p>`;
    return;
  }

  items.forEach(product => {
    const activeVariant = product.variants[0];

    const card = document.createElement("div");
    card.className = "product-card";
    
    card.innerHTML = `
      <div class="product-image-wrapper">
        ${product.badgeLeft ? `<span class="product-badge-left">${product.badgeLeft}</span>` : ''}
        ${product.badgeRight ? `<span class="product-badge-right">${product.badgeRight}</span>` : ''}
        <img 
          id="img-${product.id}" 
          src="${activeVariant.imgMain}" 
          alt="${product.name}"
          onmouseenter="hoverImage(${product.id}, true)"
          onmouseleave="hoverImage(${product.id}, false)"
        >
      </div>

      <div class="product-swatches" id="swatches-${product.id}">
        ${product.variants.map((v, index) => `
          <span 
            class="swatch ${index === 0 ? 'active' : ''}" 
            style="background-color: ${v.hex};" 
            title="${v.colorName}"
            onclick="changeColor(${product.id}, ${index}, this)">
          </span>
        `).join('')}
      </div>

      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-price">$${product.price.toFixed(2)} USD</p>
      </div>
    `;

    grid.appendChild(card);
  });
}

// Cambio de color interactivo en la tarjeta
function changeColor(productId, variantIndex, swatchEl) {
  const product = products.find(p => p.id === productId);
  const selectedVariant = product.variants[variantIndex];
  
  const imgEl = document.getElementById(`img-${productId}`);
  imgEl.src = selectedVariant.imgMain;

  const parentSwatches = swatchEl.parentElement.querySelectorAll('.swatch');
  parentSwatches.forEach(s => s.classList.remove('active'));
  swatchEl.classList.add('active');
}

// Transición Hover a segunda vista de producto
function hoverImage(productId, isHovering) {
  const product = products.find(p => p.id === productId);
  const imgEl = document.getElementById(`img-${productId}`);
  
  const currentSrc = imgEl.src;
  const activeVariant = product.variants.find(v => v.imgMain === currentSrc || v.imgHover === currentSrc) || product.variants[0];

  if (isHovering && activeVariant.imgHover) {
    imgEl.src = activeVariant.imgHover;
  } else {
    imgEl.src = activeVariant.imgMain;
  }
}

// Selección de Categoría desde la Grilla Principal
function selectCategory(categoryKey) {
  selectedCategory = categoryKey;
  
  const categoryNames = {
    'brasieres': 'Brasieres',
    'panties': 'Panties',
    'bralettes': 'Bralettes',
    'fajas': 'Fajas',
    'ropa': 'Ropa',
    'deporte': 'Deporte',
    'vestidos-de-bano': 'Vestidos de Baño',
    'ofertas': 'Ofertas'
  };

  document.getElementById('currentCategoryTitle').innerText = categoryNames[categoryKey] || 'Catálogo';
  document.getElementById('resetBtn').style.display = 'inline-block';
  
  applyFilters();
  
  document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
}

function resetCategoryFilter() {
  selectedCategory = "";
  document.getElementById('currentCategoryTitle').innerText = 'Todos los Productos';
  document.getElementById('resetBtn').style.display = 'none';
  applyFilters();
}

// Filtrado Dinámico Multi-criterio
function applyFilters() {
  const talla = document.getElementById("filterTalla").value;
  const color = document.getElementById("filterColor").value;
  const precioRange = document.getElementById("filterPrecio").value;
  const silueta = document.getElementById("filterSilueta").value;
  const beneficio = document.getElementById("filterBeneficio").value;
  const busto = document.getElementById("filterBusto").value;
  const ocasion = document.getElementById("filterOcasión").value;
  const relleno = document.getElementById("filterRelleno").value;
  const varillas = document.getElementById("filterVarillas").value;
  const encaje = document.getElementById("filterEncaje").value;
  const sort = document.getElementById("sortBy").value;

  let filtered = products.filter(p => {
    const matchCat = !selectedCategory || p.category === selectedCategory;
    const matchTalla = !talla || p.talla === talla;
    const matchSilueta = !silueta || p.silueta === silueta;
    const matchBeneficio = !beneficio || p.beneficio === beneficio;
    const matchBusto = !busto || p.busto === busto;
    const matchOcasion = !ocasion || p.ocasion === ocasion;
    const matchRelleno = !relleno || p.relleno === relleno;
    const matchVarillas = !varillas || p.varillas === varillas;
    const matchEncaje = !encaje || p.encaje === encaje;
    const matchColor = !color || p.variants.some(v => v.colorName === color);

    let matchPrecio = true;
    if (precioRange === "0-30") matchPrecio = p.price <= 30;
    else if (precioRange === "30-50") matchPrecio = p.price > 30 && p.price <= 50;
    else if (precioRange === "50+") matchPrecio = p.price > 50;

    return matchCat && matchTalla && matchSilueta && matchBeneficio && matchBusto && matchOcasion && matchRelleno && matchVarillas && matchEncaje && matchColor && matchPrecio;
  });

  if (sort === "precio-bajo") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "precio-alto") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
});