document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".card");
    const totalPriceElement = document.querySelector(".total");
    
    products.forEach(product => {
    const quantityElement = product.querySelector(".quantity");
    const unitPrice = parseFloat(product.querySelector(".unit-price").innerText);
    const plusButton = product.querySelector(".fa-plus-circle");
    const minusButton = product.querySelector(".fa-minus-circle");
    const deleteButton = product.querySelector(".fa-trash-alt");
    const heartButton = product.querySelector(".fa-heart");

      // Function to update total price
    const updateTotalPrice = () => {
        let total = 0;
        products.forEach(prod => {
        const quantity = parseInt(prod.querySelector(".quantity").innerText);
        const price = parseFloat(prod.querySelector(".unit-price").innerText);
          total += quantity * price;
        });
        totalPriceElement.innerText = total.toFixed(2) + ' $';
    };

      // Increase quantity
    plusButton.addEventListener("click", () => {
        let quantity = parseInt(quantityElement.innerText);
        quantity++;
        quantityElement.innerText = quantity;
        updateTotalPrice();
    });

      // Decrease quantity
    minusButton.addEventListener("click", () => {
        let quantity = parseInt(quantityElement.innerText);
        if (quantity > 0) {
        quantity--;
        quantityElement.innerText = quantity;
        updateTotalPrice();
        }
    });

      // Delete product
        deleteButton.addEventListener("click", () => {
        product.remove();
        updateTotalPrice();
    });

      // Like product
    heartButton.addEventListener("click", () => {
        heartButton.classList.toggle("liked");
        heartButton.style.color = heartButton.classList.contains("liked") ? "red" : "black";
    });
    });

    // Initialize total price
    updateTotalPrice();
});
