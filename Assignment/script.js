//Values
let productName = prompt("What are you buying?");
let price = Number(prompt("How much does it cost?"));
let quantity = Number(prompt("How many are you buying?"));

//Subtotal Calculation
let subtotal = price * quantity;

//Tax (15%) Calculation
let tax = subtotal * 0.15;

//Total Calculation
let total = subtotal + tax;

document.write(`
    <div class="container">
        <p class="welcome"> Welcome to "Edgar Store" </p>
        <div class="body">
            <p> <span>Product:</span>&nbsp; ${productName} </p>
            <p> <span>Price:</span>&nbsp; $${price} </p>
            <p> <span>Subtotal:</span>&nbsp; $${subtotal} </p>
            <p> <span>Tax:</span>&nbsp; $${tax} </p>
            <p> <span>Total:</span>&nbsp; $${total} </p>
        </div>
        <p class="goodbye"> Thanks for your purchase! </p>
    </div>
`)