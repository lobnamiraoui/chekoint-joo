// Compteurs pour la quantité de chaque produit
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

// Prix des produits
const price1 = 100;  // Prix du produit 1
const price2 = 20;   // Prix du produit 2
const price3 = 50;   // Prix du produit 3

// Fonction pour augmenter la quantité du produit 1
function inc1() {
  counter1++;
  updatecounter1();
  updateTotal();
}

// Fonction pour augmenter la quantité du produit 2
function inc2() {
  counter2++;
  updatecounter2();
  updateTotal();
}

// Fonction pour augmenter la quantité du produit 3
function inc3() {
  counter3++;
  updatecounter3();
  updateTotal();
}

// Fonction pour diminuer la quantité du produit 1
function dec1() {
  if (counter1 > 0) {
    counter1--;
  }
  updatecounter1();
  updateTotal();
}

// Fonction pour diminuer la quantité du produit 2
function dec2() {
  if (counter2 > 0) {
    counter2--;
  }
  updatecounter2();
  updateTotal();
}

// Fonction pour diminuer la quantité du produit 3
function dec3() {
  if (counter3 > 0) {
    counter3--;
  }
  updatecounter3();
  updateTotal();
}

// Mise à jour de l'affichage de la quantité pour le produit 1
function updatecounter1() {
  document.getElementById("q1").innerHTML = counter1;
}

// Mise à jour de l'affichage de la quantité pour le produit 2
function updatecounter2() {
  document.getElementById("q2").innerHTML = counter2;
}

// Mise à jour de l'affichage de la quantité pour le produit 3
function updatecounter3() {
  document.getElementById("q").innerHTML = counter3;
}

// Calcul et mise à jour du total
function updateTotal() {
  let total = 0;

  total += price1 * counter1;
  total += price2 * counter2;
  total += price3 * counter3;

  document.querySelector(".total").textContent = total + " $";
}
function removeProd1(){
  let card = document.getElementById('card1');
  card.remove();
}
function removeProd2(){
  let card = document.getElementById('card2');
  card.remove();
}
function removeProd3(){
  let card = document.getElementById('card3');
  card.remove();
}

  
    // Ajouter/enlever un produit des favoris ❤️
    document.querySelectorAll(".favorite-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        this.classList.toggle("liked"); // Ajoute/enlève la classe "liked"
      });
    });



    
    // Class representing a product.
class Product {
    constructor(id, name, price) {
      this.id = id;       
      this.name = name;   
      this.price = price; 
    }
  }
  
  // Class representing an item in the shopping cart (a product with its quantity).
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;   // The Product instance.
      this.quantity = quantity; // Quantity of the product.
    }
  
    // Method to calculate the total price for this shopping cart item.
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  // Class representing the shopping cart.
  class ShoppingCart {
    constructor() {
      this.items = []; 
    }
  
    // Method to calculate the total cost of all items in the cart.
    getTotal() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  
    // Method to add a product to the cart.
    // If the product already exists, update its quantity.
    addItem(product, quantity) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push(new ShoppingCartItem(product, quantity));
      }
    }
  
    // Method to remove a product from the cart based on its product id.
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    // Method to display the contents of the cart.
    displayCart() {
      if (this.items.length === 0) {
        console.log("The cart is empty.");
        return;
      }
  
      console.log("Cart Items:");
      this.items.forEach(item => {
        console.log(`Product: ${item.product.name} (ID: ${item.product.id})`);
        console.log(`Price: $${item.product.price.toFixed(2)}`);
        console.log(`Quantity: ${item.quantity}`);
        console.log(`Total for this item: $${item.getTotalPrice().toFixed(2)}`);
        console.log('-------------------------');
      });
      console.log(`Total Cart Value: $${this.getTotal().toFixed(2)}`);
    }
  }
  
  // =======================
  // Testing the Implementation
  // =======================
  
  // Create some products.
  const product1 = new Product(1, "baskets", 100.00);
  const product2 = new Product(2, "socks", 20.00);
  const product3 = new Product(3, "bag", 50.00);
  
  // Create a new shopping cart.
  const myCart = new ShoppingCart();
  
  // Add items to the cart.
  myCart.addItem(product1, 1);   // Add 1 
  myCart.addItem(product2, 2);   // Add 2
  myCart.addItem(product3, 3);   // Add 3 
  
  // Display the cart items.
  console.log("=== Displaying Cart After Adding Items ===");
  myCart.displayCart();
  
  // Remove an item (for example, remove the product with ID 2).
  console.log("\n=== Removing Product with ID 2 ===");
  myCart.removeItem(2);
  
  // Display the cart again after removal.
  console.log("\n=== Displaying Cart After Removal ===");
  myCart.displayCart();