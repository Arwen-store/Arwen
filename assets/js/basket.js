// ===============================
// Load basket from localStorage
// ===============================
function loadBasket() {
  try {
    const data = JSON.parse(localStorage.getItem("basket"));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

// ===============================
// Save basket to localStorage
// ===============================
function saveBasket(basket) {
  localStorage.setItem("basket", JSON.stringify(basket));
}

// ===============================
// Add product to basket
// ===============================
function addToBasket(product) {
  const basket = loadBasket();

  // Same product = same id + same size
  const existingIndex = basket.findIndex(item =>
    item.id === product.id &&
    item.size === product.size
  );

  if (existingIndex !== -1) {
    // Replace quantity (NOT accumulate)
    basket[existingIndex].qty = product.qty;
  } else {
    basket.push(product);
  }

  saveBasket(basket);
}

// ===============================
// DOM READY
// ===============================
document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     Quantity Controls
  =============================== */
  let qty = 1;
  const qtyDisplay = document.getElementById("quantity-display");
  const qtyHidden = document.getElementById("quantity");

  if (qtyDisplay && qtyHidden) {
    document.getElementById("increase")?.addEventListener("click", () => {
      qty++;
      qtyDisplay.textContent = qty;
      qtyHidden.value = qty;
    });

    document.getElementById("decrease")?.addEventListener("click", () => {
      if (qty > 1) {
        qty--;
        qtyDisplay.textContent = qty;
        qtyHidden.value = qty;
      }
    });
  }

  /* ===============================
     Add to Basket
  =============================== */
  document.querySelectorAll(".add-to-basket").forEach(btn => {
    btn.addEventListener("click", () => {

      const qty = parseInt(document.getElementById("quantity")?.value) || 1;

      const sizeSelect = document.getElementById("size");
      const selectedSize = sizeSelect ? sizeSelect.value : "";
      const selectedPrice = sizeSelect
        ? parseFloat(sizeSelect.options[sizeSelect.selectedIndex].dataset.price)
        : parseFloat(btn.dataset.price);

      const baseUrl = window.location.origin;

      const product = {
        id: btn.dataset.id,
        title: btn.dataset.title,
        price: selectedPrice,
        size: selectedSize,
        qty: qty,
        image: baseUrl + btn.dataset.image
      };

      addToBasket(product);
      alert(`${product.title} تمت إضافته إلى السلة`);
    });
  });

});
