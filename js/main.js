// Initialize AOS
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
});

// Configure Toastr
toastr.options = {
  closeButton: true,
  progressBar: true,
  positionClass: "toast-top-right",
  timeOut: "3000",
};

// Products Data
const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "smartphones",
    price: 1299990,
    originalPrice: 1499990,
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
    description: "El smartphone más avanzado con chip A17 Pro y cámara de 48MP",
    rating: 4.9,
    reviews: 1247,
    badge: "Nuevo",
  },
  {
    id: 2,
    name: 'MacBook Pro 16"',
    category: "laptops",
    price: 2490000,
    originalPrice: 2790000,
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
    description:
      "Potencia profesional con chip M3 Max y pantalla Liquid Retina XDR",
    rating: 4.8,
    reviews: 892,
    badge: "Pro",
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    category: "smartphones",
    price: 1199990,
    originalPrice: 1399990,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop",
    description: "Smartphone premium con S Pen integrado y cámara de 200MP",
    rating: 4.7,
    reviews: 2156,
    badge: "Ultra",
  },
  {
    id: 4,
    name: 'iPad Pro 12.9"',
    category: "tablets",
    price: 1099990,
    originalPrice: 1299990,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    description: "Tablet profesional con chip M2 y pantalla Liquid Retina XDR",
    rating: 4.6,
    reviews: 654,
    badge: "Pro",
  },
  {
    id: 5,
    name: "Dell XPS 13",
    category: "laptops",
    price: 999990,
    originalPrice: 1199990,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    description:
      "Ultrabook compacto con procesador Intel Core i7 de 12ª generación",
    rating: 4.5,
    reviews: 743,
    badge: "Bestseller",
  },
  {
    id: 6,
    name: "AirPods Pro 2",
    category: "accesorios",
    price: 249990,
    originalPrice: 279990,
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop",
    description: "Auriculares inalámbricos con cancelación activa de ruido",
    rating: 4.8,
    reviews: 3421,
    badge: "Popular",
  },
  {
    id: 7,
    name: "PlayStation 5",
    category: "gaming",
    price: 649990,
    originalPrice: 749990,
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop",
    description:
      "Consola de videojuegos de nueva generación con SSD ultrarrápido",
    rating: 4.9,
    reviews: 5632,
    badge: "Gaming",
  },
  {
    id: 8,
    name: "Samsung Galaxy Tab S9",
    category: "tablets",
    price: 799990,
    originalPrice: 899990,
    image:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop",
    description: "Tablet Android premium con S Pen incluido y pantalla AMOLED",
    rating: 4.4,
    reviews: 432,
    badge: "Nuevo",
  },
  {
    id: 9,
    name: "Google Pixel 8 Pro",
    category: "smartphones",
    price: 999990,
    originalPrice: 1099990,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    description:
      "Smartphone con IA avanzada y las mejores cámaras computacionales",
    rating: 4.6,
    reviews: 1876,
    badge: "IA",
  },
  {
    id: 10,
    name: "Nintendo Switch OLED",
    category: "gaming",
    price: 399990,
    originalPrice: 449990,
    image:
      "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=300&fit=crop",
    description: "Consola híbrida con pantalla OLED de 7 pulgadas",
    rating: 4.7,
    reviews: 2134,
    badge: "Portátil",
  },
  {
    id: 11,
    name: "Sony WH-1000XM5",
    category: "accesorios",
    price: 399990,
    originalPrice: 449990,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop",
    description:
      "Auriculares over-ear con la mejor cancelación de ruido del mercado",
    rating: 4.8,
    reviews: 1543,
    badge: "Premium",
  },
  {
    id: 12,
    name: "Microsoft Surface Pro 9",
    category: "tablets",
    price: 1299990,
    originalPrice: 1499990,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    description: "Tablet 2-en-1 con procesador Intel Core i7 y Windows 11",
    rating: 4.5,
    reviews: 687,
    badge: "2-en-1",
  },
  {
    id: 13,
    name: "ASUS ROG Strix G15",
    category: "laptops",
    price: 1599990,
    originalPrice: 1799990,
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
    description: "Laptop gaming con RTX 4070 y procesador AMD Ryzen 9",
    rating: 4.7,
    reviews: 934,
    badge: "Gaming",
  },
  {
    id: 14,
    name: "Apple Watch Series 9",
    category: "accesorios",
    price: 399990,
    originalPrice: 449990,
    image:
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=300&fit=crop",
    description: "Smartwatch más avanzado con chip S9 y pantalla Always-On",
    rating: 4.6,
    reviews: 2187,
    badge: "Smart",
  },
  {
    id: 15,
    name: "Xbox Series X",
    category: "gaming",
    price: 649990,
    originalPrice: 749990,
    image:
      "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=300&fit=crop",
    description: "Consola más potente de Xbox con 4K nativo y 120fps",
    rating: 4.8,
    reviews: 4321,
    badge: "4K",
  },
  {
    id: 16,
    name: "Samsung Galaxy Buds2 Pro",
    category: "accesorios",
    price: 229990,
    originalPrice: 259990,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop",
    description:
      "Auriculares inalámbricos premium con cancelación activa de ruido",
    rating: 4.4,
    reviews: 1876,
    badge: "Pro",
  },
];
// Shopping Cart
let cart = [];
let currentFilter = "all";
let currentSearch = "";

// Initialize page
$(document).ready(function () {
  loadProducts();
  setupEventListeners();
  updateCartDisplay();
});

// Setup Event Listeners
function setupEventListeners() {
  // Search functionality
  $("#search-input").on("input", function () {
    currentSearch = $(this).val().toLowerCase();
    filterProducts();
  });

  // Filter buttons
  $(".filter-btn").on("click", function () {
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");
    currentFilter = $(this).data("category");
    filterProducts();
  });

  // Smooth scrolling for navbar links
  $('.navbar-nav a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    const target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 100,
        },
        1000
      );
    }
  });
}

// Load Products
function loadProducts() {
  $("#loading").addClass("show");

  setTimeout(() => {
    const container = $("#products-container");
    container.empty();

    products.forEach((product) => {
      const productCard = createProductCard(product);
      container.append(productCard);
    });

    $("#loading").removeClass("show");

    // Initialize AOS for new elements
    AOS.refresh();
  }, 1000);
}

// Create Product Card
function createProductCard(product) {
  const discount = Math.round(
    (1 - product.price / product.originalPrice) * 100
  );
  const stars = generateStars(product.rating);

  return `
            <div class="col-lg-3 col-md-4 col-sm-6 product-item" data-category="${
              product.category
            }" data-aos="fade-up" data-aos-delay="100">
                <div class="product-card">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="product-badge">${product.badge}</div>
                    </div>
                    <div class="product-info">
                        <div class="product-category">${getCategoryName(
                          product.category
                        )}</div>
                        <h5 class="product-title">${product.name}</h5>
                        <p class="product-description">${
                          product.description
                        }</p>
                        <div class="product-rating">
                            <div class="stars">${stars}</div>
                            <span class="rating-text">(${
                              product.reviews
                            } reseñas)</span>
                        </div>
                        <div class="product-price">
                            ${product.price.toLocaleString()}
                            <span class="original-price">${product.originalPrice.toLocaleString()}</span>
                        </div>
                        <button class="add-to-cart-btn" onclick="addToCart(${
                          product.id
                        })">
                            <i class="fas fa-cart-plus me-2"></i>Agregar al Carrito
                        </button>
                    </div>
                </div>
            </div>
        `;
}

// Generate Stars
function generateStars(rating) {
  let stars = "";
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>';
  }

  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>';
  }

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>';
  }

  return stars;
}

// Get Category Name
function getCategoryName(category) {
  const categoryNames = {
    smartphones: "Smartphones",
    laptops: "Laptops",
    tablets: "Tablets",
    accesorios: "Accesorios",
    gaming: "Gaming",
  };
  return categoryNames[category] || category;
}

// Filter Products
function filterProducts() {
  const productItems = $(".product-item");
  let visibleCount = 0;

  productItems.each(function () {
    const $item = $(this);
    const category = $item.data("category");
    const productName = $item.find(".product-title").text().toLowerCase();
    const productDescription = $item
      .find(".product-description")
      .text()
      .toLowerCase();

    const matchesCategory =
      currentFilter === "all" || category === currentFilter;
    const matchesSearch =
      currentSearch === "" ||
      productName.includes(currentSearch) ||
      productDescription.includes(currentSearch);

    if (matchesCategory && matchesSearch) {
      $item.fadeIn(300);
      visibleCount++;
    } else {
      $item.fadeOut(300);
    }
  });

  // Show/hide no results message
  if (visibleCount === 0) {
    $("#no-results").fadeIn(300);
  } else {
    $("#no-results").fadeOut(300);
  }
}

// Add to Cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
    toastr.success(
      `${product.name} cantidad actualizada`,
      "Carrito Actualizado"
    );
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
    toastr.success(`${product.name} agregado al carrito`, "Producto Agregado");
  }

  updateCartDisplay();
  animateCartButton();
}

// Remove from Cart
function removeFromCart(productId) {
  const itemIndex = cart.findIndex((item) => item.id === productId);
  if (itemIndex > -1) {
    const item = cart[itemIndex];
    cart.splice(itemIndex, 1);
    toastr.info(`${item.name} eliminado del carrito`, "Producto Eliminado");
    updateCartDisplay();
  }
}

// Update Quantity
function updateQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    updateCartDisplay();
  }
}

// Update Cart Display
function updateCartDisplay() {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Update cart count badge
  $("#cart-count").text(cartCount);

  // Update cart items
  const cartItemsContainer = $("#cart-items");

  if (cart.length === 0) {
    cartItemsContainer.html(`
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <h5>Tu carrito está vacío</h5>
                    <p>Agrega algunos productos increíbles</p>
                </div>
            `);
    $("#cart-total").hide();
  } else {
    let cartHTML = "";
    cart.forEach((item) => {
      cartHTML += `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-info">
                            <div class="cart-item-title">${item.name}</div>
                            <div class="cart-item-price">${item.price.toLocaleString()}</div>
                            <div class="quantity-controls">
                                <button class="quantity-btn" onclick="updateQuantity(${
                                  item.id
                                }, -1)">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span class="quantity-display">${
                                  item.quantity
                                }</span>
                                <button class="quantity-btn" onclick="updateQuantity(${
                                  item.id
                                }, 1)">
                                    <i class="fas fa-plus"></i>
                                </button>
                                <button class="remove-item" onclick="removeFromCart(${
                                  item.id
                                })">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
    });

    cartItemsContainer.html(cartHTML);
    $("#total-amount").text(cartTotal.toLocaleString());
    $("#cart-total").show();
  }
}

// Toggle Cart
function toggleCart() {
  const cartSidebar = $("#cart-sidebar");
  const cartOverlay = $("#cart-overlay");

  if (cartSidebar.hasClass("open")) {
    cartSidebar.removeClass("open");
    cartOverlay.removeClass("show");
    $("body").removeClass("cart-open");
  } else {
    cartSidebar.addClass("open");
    cartOverlay.addClass("show");
    $("body").addClass("cart-open");
  }
}

// Animate Cart Button
function animateCartButton() {
  const cartBtn = $(".cart-btn");
  cartBtn.addClass("animate__animated animate__pulse");

  setTimeout(() => {
    cartBtn.removeClass("animate__animated animate__pulse");
  }, 1000);
}

// Checkout
function checkout() {
  if (cart.length === 0) {
    toastr.warning("Tu carrito está vacío", "Carrito Vacío");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  Swal.fire({
    title: "¡Pedido Confirmado!",
    html: `
                <div style="text-align: left; margin: 20px 0;">
                    <h5>Resumen de tu pedido:</h5>
                    <ul style="list-style: none; padding: 0;">
                        ${cart
                          .map(
                            (item) => `
                            <li style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 8px;">
                                <strong>${item.name}</strong><br>
                                Cantidad: ${
                                  item.quantity
                                } × ${item.price.toLocaleString()} = ${(
                              item.quantity * item.price
                            ).toLocaleString()}
                            </li>
                        `
                          )
                          .join("")}
                    </ul>
                    <hr>
                    <h4 style="color: var(--primary-color);">Total: ${total.toLocaleString()}</h4>
                    <p style="color: #666; margin-top: 15px;">
                        <i class="fas fa-truck"></i> Envío gratis en órdenes superiores a $500
                    </p>
                </div>
            `,
    icon: "success",
    confirmButtonText: "Continuar con el pago",
    confirmButtonColor: "#6c5ce7",
    showCancelButton: true,
    cancelButtonText: "Seguir comprando",
    cancelButtonColor: "#74b9ff",
  }).then((result) => {
    if (result.isConfirmed) {
      // Simulate payment process
      Swal.fire({
        title: "Procesando pago...",
        html: "Por favor espera mientras procesamos tu pago",
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
      });

      setTimeout(() => {
        cart = [];
        updateCartDisplay();
        toggleCart();

        Swal.fire({
          title: "¡Pago Exitoso!",
          text: "Tu pedido ha sido procesado correctamente. Recibirás un email de confirmación.",
          icon: "success",
          confirmButtonText: "Perfecto",
          confirmButtonColor: "#00b894",
        });

        toastr.success("¡Gracias por tu compra!", "Pedido Completado");
      }, 3000);
    }
  });
}

// Prevent body scroll when cart is open
$("body").on("DOMSubtreeModified", function () {
  if ($("#cart-sidebar").hasClass("open")) {
    $("body").addClass("cart-open");
  }
});

// Close cart with Escape key
$(document).keydown(function (e) {
  if (e.keyCode === 27 && $("#cart-sidebar").hasClass("open")) {
    toggleCart();
  }
});

// Navbar scroll effect
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".navbar").addClass("scrolled");
  } else {
    $(".navbar").removeClass("scrolled");
  }
});

// Add some CSS for navbar scroll effect
$("<style>")
  .text(
    `
        .navbar.scrolled {
            background: rgba(255, 255, 255, 0.98) !important;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1) !important;
        }
        
        body.cart-open {
            overflow: hidden;
        }
        
        .animate__animated.animate__pulse {
            animation-duration: 0.5s;
        }
    `
  )
  .appendTo("head");
