document.addEventListener('DOMContentLoaded', solve);

function solve() {
    
    let addButtons = document.querySelectorAll('.add-product');
    let checkoutBtn = document.querySelector('.checkout');
    let textarea = document.querySelector('textarea');
    

    let cart = {
        items: new Map(),
        addItem(name, price) {
            if (this.items.has(name)) {
                let item = this.items.get(name);
                item.quantity++;
            } else {
                this.items.set(name, { price: parseFloat(price), quantity: 1 });
            }
        },
        getTotal() {
            let total = 0;
            this.items.forEach((item) => {
                total += item.price * item.quantity;
            });
            return total.toFixed(2);
        },
        getUniqueItems() {
            return Array.from(this.items.keys()).join(', ');
        }
    };

    addButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (checkoutBtn.disabled) return;
            
            let productDiv = e.target.parentElement.parentElement;
            
            let name = productDiv.querySelector('.product-title').textContent;
            
            let price = productDiv.querySelector('.product-line-price').textContent;
            
            cart.addItem(name, price);
            textarea.value += `Added ${name} for ${parseFloat(price).toFixed(2)} to the cart.\n`;
        });
    });

    checkoutBtn.addEventListener('click', function() {
        if (checkoutBtn.disabled) return;
        
        let total = cart.getTotal();
        let items = cart.getUniqueItems();
        textarea.value += `You bought ${items} for ${total}.\n`;
        
        addButtons.forEach(btn => btn.disabled = true);
        checkoutBtn.disabled = true;
    });
}
