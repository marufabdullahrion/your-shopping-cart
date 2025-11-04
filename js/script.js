function handleProductChange(product, isIncrease){
    const productInput = document.getElementById(product);
    const productCount = parseInt(productInput.value);

    let newProductCount = productCount;

    if(isIncrease == true) {
        newProductCount = productCount + 1;
    } if(isIncrease == false & productCount > 0) {
        newProductCount = productCount - 1;
    }

    productInput.value = newProductCount;

    let productPrice;

    if(product === 'laptop') {
        productPrice = newProductCount * 245000;
    } if(product === 'phone') {
        productPrice = newProductCount * 125500;
    }

    document.getElementById(product+'-total').innerText = productPrice;

    handleGrandTotal();
} 


function handleGrandTotal(){
    const laptopTotal = parseInt(document.getElementById('laptop-total').innerText);
    const phoneTotal = parseInt(document.getElementById('phone-total').innerText);
    const subTotal = laptopTotal + phoneTotal;
    const tax = Math.round(subTotal * 0.001);
    const grandTotal = subTotal + tax;

    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('grand-total').innerText = grandTotal;

}