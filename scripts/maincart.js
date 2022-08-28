let CartData = JSON.parse(localStorage.getItem('added')) || [] ;


CartData.forEach(function(el,i){
    let mainDiv = document.getElementById('item-store')

    let prod_imge = document.createElement('img')
    prod_imge.setAttribute('src',el['ImageLink'])

    let prod_name = document.createElement('p')
    prod_name.innerText=el['Product Name']

    let Itemdiv = document.createElement('div')

    // let pricediv = document.getElementById('price-area')
    let price = document.createElement('p')
    price.innerText=el['SalePrice']
    Itemdiv.append(prod_imge,prod_name,price)
    // pricediv.append(price)

    mainDiv.append(Itemdiv)


/********Order Summary*******/
document.getElementById('sale-pr').innerText=Number(el['Price'])+'$'
document.getElementById('save').innerText=el['Savings']+'$'
document.getElementById('taxes').innerText = '18'
let taxval = document.getElementById('taxes').innerText
document.getElementById('total').innerText = Number(taxval)- el['Savings'] +Number(el['Price'])+'$'
})