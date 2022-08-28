let ProdData = JSON.parse(localStorage.getItem('added')) || [] ;

document.getElementById('add-to-cart').addEventListener('click',valueAdd)

function valueAdd(event){
    event.preventDefault();
    let imag = document.getElementById('product-img').getAttribute('src')
    let prod_name = document.getElementById('product-name').innerText
    let Actprice = document.getElementById('realprice').innerText
    let Itemsale = document.getElementById('saleprice').innerText
    let Differ = Number(Itemsale) - Number(Actprice)

    let obj={
        'ImageLink':imag,
        'Product Name':prod_name,
        'Price':Actprice,
        'SalePrice':Itemsale,
        'Savings':Differ,
    }
    ProdData.push(obj)
    localStorage.setItem('added',JSON.stringify(ProdData))
    console.log('done matter')
    window.location.href='cart.html'
}

// document.querySelector('cart-option').addEventListener('click',sup)

// function sup(){
//     window.location.href='cart.html'
// }