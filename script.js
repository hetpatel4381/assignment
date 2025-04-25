// Initialize the checkout queues
const checkouts = [
    { id: 1, queue: [], total: 0 },
    { id: 2, queue: [], total: 0 },
    { id: 3, queue: [], total: 0 }
];

// Function to find the checkout with the least total items
function findLeastLoadedCheckout() {
    let minTotal = Infinity;
    let selectedCheckout = null;

    for (let i = 0; i < checkouts.length; i++) {
        if (checkouts[i].total < minTotal) {
            minTotal = checkouts[i].total;
            selectedCheckout = i;
        }
    }

    return selectedCheckout;
}

// Function to update the UI for a specific checkout
function updateCheckoutUI(checkoutIndex) {
    const checkout = checkouts[checkoutIndex];
    const queueElement = document.querySelector(`#checkout${checkoutIndex + 1} .queue`);
    const totalElement = document.querySelector(`#checkout${checkoutIndex + 1} .total`);

    // Clear existing queue items
    queueElement.innerHTML = '';

    // Add queue items
    checkout.queue.forEach(items => {
        const itemElement = document.createElement('div');
        itemElement.className = 'queue-item';
        itemElement.textContent = `${items} items`;
        queueElement.appendChild(itemElement);
    });

    // Update total
    totalElement.textContent = `Total: ${checkout.total}`;
}

// Function to add a new customer
function addCustomer() {
    const itemCountInput = document.getElementById('itemCount');
    const itemCount = parseInt(itemCountInput.value);

    if (isNaN(itemCount) || itemCount < 1) {
        alert('Please enter a valid number of items (minimum 1)');
        return;
    }

    // Find the checkout with the least total items
    const selectedCheckoutIndex = findLeastLoadedCheckout();

    // Add the customer to the selected checkout
    checkouts[selectedCheckoutIndex].queue.push(itemCount);
    checkouts[selectedCheckoutIndex].total += itemCount;

    // Update the UI
    updateCheckoutUI(selectedCheckoutIndex);

    // Clear the input
    itemCountInput.value = '';
}

// Initialize the UI
function initializeUI() {
    checkouts.forEach((_, index) => {
        updateCheckoutUI(index);
    });
}

// Initialize the UI when the page loads
document.addEventListener('DOMContentLoaded', initializeUI); 