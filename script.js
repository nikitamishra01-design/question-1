let quantity = 1;
const min = 1;
const max = 10;

const qtyDisplay = document.getElementById("qty");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const addCartBtn = document.getElementById("addCart");
const successMsg = document.getElementById("successMsg");

function updateButtons() {
    decreaseBtn.disabled = quantity === min;
    increaseBtn.disabled = quantity === max;
}

decreaseBtn.addEventListener("click", () => {
    if (quantity > min) {
        quantity--;
        qtyDisplay.textContent = quantity;
        updateButtons();
    }
});

increaseBtn.addEventListener("click", () => {
    if (quantity < max) {
        quantity++;
        qtyDisplay.textContent = quantity;
        updateButtons();
    }
});

addCartBtn.addEventListener("click", () => {
    const productName = document.getElementById("productName").textContent;
    const price = 90;
    const total = price * quantity;

    console.log("Product:", productName);
    console.log("Quantity:", quantity);
    console.log("Price per item:", price);
    console.log("Total:", total);

    successMsg.style.display = "block";

    setTimeout(() => {
        successMsg.style.display = "none";
    }, 3000);
});

updateButtons();