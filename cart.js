
/*
let products = [
    {
        name: "Galaxy S10",
        tag: "s20Tab",
        price: 10,
        inCart: 0,
    },
    {
        name: "Galaxy S10 Plus",
        tag: "s20PlusTab",
        price: 15,
        inCart: 0,
    },
    {
        name: "Galaxy S10 Ultra",
        tag: "s20UltraTab",
        price: 20,
        inCart: 0,
    }
];

if (dow === 0) {
    for (let i = 0; i < 1; i++) {
        products[i].price = 5;
    }
}
*/
var products = [
    {
        name: "Samsung Galaxy s20",
        tag: "s20Tab",
        price: 999,
        salePrice: 900,
        inCart: 0
    },
    {
        name: "Samsung Galaxy s20 Plus",
        tag: "s20PlusTab",
        price: 1199,
        salePrice: 1100,
        inCart: 0
    },
    {
        name: "Samsung Galaxy s20 Ultra",
        tag: "s20UltraTab",
        price: 1399,
        salePrice: 1300,
        inCart: 0
    },
    {
        name: "OnePlus 8",
        tag: "onePlus8Tab",
        price: 699,
        salePrice: 600,
        inCart: 0
    },
    {
        name: "OnePlus 8 Pro",
        tag: "onePlus8ProTab",
        price: 999,
        salePrice: 900,
        inCart: 0
    },
    {
        name: "OnePlus 7 Pro",
        tag: "onePlus7ProTab",
        price: 999,
        salePrice: 900,
        inCart: 0
    },
    {
        name: "OnePlus 7T",
        tag: "onePlus7TTab",
        price: 599,
        salePrice: 500,
        inCart: 0
    },
    {
        name: "OnePlus 7T Pro",
        tag: "onePlus7TProTab",
        price: 900,
        salePrice: 899,
        inCart: 0
    },
    {
        name: "Audio Technica ATH-M50x",
        tag: "m50xTab",
        price: 149,
        salePrice: 100,
        inCart: 0
    },
    {
        name: "Audio Technica ATH-M40x",
        tag: "m40xTab",
        price: 99,
        salePrice: 79,
        inCart: 0
    },
    {
        name: "Audio Technica ATH-M30x",
        tag: "m30xTab",
        price: 69,
        salePrice: 59,
        inCart: 0
    },
    {
        name: "Audio Technica ATH-M20x",
        tag: "m20xTab",
        price: 49,
        salePrice: 40,
        inCart: 0
    },
    {
        name: "Omen Obelisk : Basic",
        tag: "obeliskBasicTab",
        price: 839,
        salePrice: 800,
        inCart: 0
    },
    {
        name: "Omen Obelisk : Casual Gamer",
        tag: "obeliskCasualTab",
        price: 1199,
        salePrice: 1100,
        inCart: 0
    },
    {
        name: "Omen Obelisk : Campaign Hero",
        tag: "obeliskTab",
        price: 1599,
        salePrice: 1500,
        inCart: 0
    },
    {
        name: "Omen Obelisk : eSports Pro",
        tag: "obeliskeSportsTab",
        price: 1999,
        salePrice: 1900,
        inCart: 0
    },
    {
        name: "Google Nest Mini",
        tag: "googleNestMiniTab",
        price: 39,
        salePrice: 30,
        inCart: 0
    },
    {
        name: "Google Home",
        tag: "googleHomeTab",
        price: 99,
        salePrice: 90,
        inCart: 0
    },
    {
        name: "Amazon Echo Dot 2nd Generation",
        tag: "amazonEchoDotTab",
        price: 29,
        salePrice: 20,
        inCart: 0
    },
    {
        name: "Amazon Echo",
        tag: "amazonEchoTab",
        price: 69,
        salePrice: 60,
        inCart: 0
    },
    {
        name: "Fortnite",
        tag: "fortniteTab",
        price: 0,
        salePrice: 0,
        inCart: 0
    },
    {
        name: "Minecraft",
        tag: "minecraftTab",
        price: 14.99,
        salePrice: 10,
        inCart: 0
    },
    {
        name: "Legend of Zelda Breath of the Wild",
        tag: "zeldaTab",
        price: 59.99,
        salePrice: 50,
        inCart: 0
    },
    {
        name: "Apex Legends",
        tag: "apexTab",
        price: 0,
        salePrice: 0,
        inCart: 0
    },
    {
        name: "Omen Laptop 15t",
        tag: "omenLaptopTab",
        price: 1069.99,
        salePrice: 1000,
        inCart: 0
    },
    {
        name: "Macbook",
        tag: "macbookTab",
        price: 1299.99,
        salePrice: 1200,
        inCart: 0
    },
    {
        name: "Dell XPS 13",
        tag: "dellXPS13Tab",
        price: 1049.99,
        salePrice: 1000,
        inCart: 0
    },
    {
        name: "Acer Swift 7",
        tag: "acerSwift7Tab",
        price: 1699.99,
        salePrice: 1600,
        inCart: 0
    },
    {
        name: "Nintendo Switch",
        tag: "nintendoSwitchTab",
        price: 299.99,
        salePrice: 200,
        inCart: 0
    },
    {
        name: "Playstation 4 Standard",
        tag: "pS4Tab",
        price: 299.99,
        salePrice: 200,
        inCart: 0
    },
    {
        name: "Playstation 4 Pro",
        tag: "pS4ProTab",
        price: 399.99,
        salePrice: 300,
        inCart: 0
    },
    {
        name: "Xbox One S",
        tag: "xBoxOneTab",
        price: 299.99,
        salePrice: 200,
        inCart: 0
    },
];

var date = new Date();
var counter = localStorage.getItem('count');
if (counter)
{
var dow = parseInt(localStorage.getItem('changeDate'))
}else {var dow = date.getDay()}

if (dow === 0){
    products[0].price = products[0].salePrice;
    products[1].price = products[1].salePrice;
    products[2].price = products[2].salePrice;
    products[3].price = products[3].salePrice;
    products[4].price = products[4].salePrice;
    products[5].price = products[5].salePrice;
    products[6].price = products[6].salePrice;
    products[7].price = products[7].salePrice;
} else if (dow === 1){
    products[8].price = products[8].salePrice;
    products[9].price = products[9].salePrice;
    products[10].price = products[10].salePrice;
    products[11].price = products[11].salePrice;
} else if (dow === 2){
    products[12].price = products[12].salePrice;
    products[13].price = products[13].salePrice;
    products[14].price = products[14].salePrice;
    products[15].price = products[15].salePrice;
}else if (dow === 3){
    products[16].price = products[16].salePrice;
    products[17].price = products[17].salePrice;
    products[18].price = products[18].salePrice;
    products[19].price = products[19].salePrice;
}else if (dow === 4){
    products[20].price = products[20].salePrice;
    products[21].price = products[21].salePrice;
    products[22].price = products[22].salePrice;
    products[23].price = products[23].salePrice;
}else if (dow === 5){
    products[24].price = products[24].salePrice;
    products[25].price = products[25].salePrice;
    products[26].price = products[26].salePrice;
    products[27].price = products[27].salePrice;
}else if (dow === 6){
    products[28].price = products[28].salePrice;
    products[29].price = products[29].salePrice;
    products[30].price = products[30].salePrice;
    products[31].price = products[31].salePrice;
};
let carts = document.querySelectorAll(".addCart");
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
        //(document.querySelector(".cart span").textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        //document.querySelector(".cart span").textContent = productNumbers + 1;
        alert("Item added to cart.");
    } else {
        localStorage.setItem("cartNumbers", 1);
        //document.querySelector(".cart span").textContent = 1;
        alert("Item added to cart.");
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }

    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem("totalCost");
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".itemContainer");

    //console.log(cartItems);
    if (cartItems && productContainer) {
        productContainer.innerHTML = "";
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="item">
                <img class="Img" src="images/${item.tag}.jpg" alt="">
                <p class="name">${item.name}</p>
                <p class="quantity">${item.inCart}</p>
                <p class="Des">$${item.price}</p>
                
                <button class="remove">Remove</button>
            </div>
            `;
        });
        calculateTotal();
    } else {
        //alert("no items");
        //pricing.style.display = "none";
        productContainer.innerHTML = `
        <div class="emptyCart">
        <h1>Your cart is empty</h1>
        <a href="products.html">Click here to shop</a>
        </div>`;
    }
}

function calculateTotal() {
    let numOfItems = document.getElementsByClassName("numOfItems");
    let subtotal = document.getElementsByClassName("subtotal");
    let saleTax = document.getElementsByClassName("salesTax");
    let shipping = document.getElementsByClassName("shipping");
    let total = document.getElementsByClassName("total");
    let subt = localStorage.getItem("totalCost");
    let items = localStorage.getItem("cartNumbers");
    var subtotals = parseFloat(subt);
    var nItems = parseInt(items);
    var salesT = subt * 0.07;
    //salesT = salesT.toFixed(2);
    var shippings = subtotals * 0.1;
    //var nshippings = shippings + subtotals
    //nshippings = nshippings.toFixed(2);
    var totals = shippings + salesT + subtotals;
    //console.log(nItems);
    numOfItems[0].innerHTML = "Number Of Items In Cart: " + nItems;
    subtotal[0].innerHTML = "SubTotal: $" + subtotals.toFixed(2);
    saleTax[0].innerHTML = "Sales Tax: $" + salesT.toFixed(2);
    shipping[0].innerHTML = "Shipping: $" + shippings.toFixed(2);
    total[0].innerHTML = "Total: $" + totals.toFixed(2);

    checkout();
}

function checkout(){
    let outBtn = document.querySelector(".checkOutButton");
    let cartNumbers = localStorage.getItem("cartNmbers");
    outBtn.addEventListener("click", () => {
        console.log("clicked");
        localStorage.removeItem("cartNumbers");
        localStorage.removeItem("totalCost");
        localStorage.removeItem("productsInCart");
        localStorage.removeItem("count");
        localStorage.removeItem("changeDate");
    });
}

function createRemovecart() {
    //removeButtons();
    var deletebuttons = document.getElementsByClassName('remove');
    for (var i = 0; i < deletebuttons.length; i++) {
        deletebuttons[i].addEventListener('click', function (e) {
            e.currentTarget.parentNode.remove();
            //var keyname = localStorage.getItem(localStorage.key(i));
            alert("clicked", i)
            let cartItems = localStorage.getItem("productsInCart");
            cartItems = JSON.parse(cartItems);
            if (cartItems.indexOf(i)) {
                console.log(cartItems);
                localStorage.removeItem(cartItems[i]);
            }
        }, false);
    }
}
onLoadCartNumbers();
displayCart();
createRemovecart();