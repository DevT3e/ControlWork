// JavaScript code for "Add to cart" button and image gallery as specified

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartModal = document.querySelector('.cart-modal');
const goToCartButton = document.querySelector('.go-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartModal.style.display = 'block';
    });
});

goToCartButton.addEventListener('click', () => {
    // Redirect to the shopping cart page or perform other cart-related actions.
    // You can replace this with the actual functionality.
    alert('Going to Cart...');
});

// Image gallery functionality (you can add this separately)