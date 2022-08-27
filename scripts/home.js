var products = [
    {
        image:'./media/1.png',
        name:'MacBook Pro 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD',
        label:'',
        price:'$949.99',
        sale:'$1,299.99',

    },
    {
        image:'./media/2.png',
        name:'Apple - AirPods Pro (with Magsafe Charging Case) - White',
        label:'',
        price:'$179.99',
        sale:'$219.99',
    },
    {
        image:'./media/3.png',
        name:'HP - ENVY x360 2-in-1 15.6" Touch-Screen Laptop - AMD Ryzen 5 - 8GB Memory',
        label:'',
        price:'$499.99',
        sale:'$699.99',
    },
    {
        image:'./media/4.png',
        name:'Apple - 10.2-Inch iPad (Latest Model) with Wi-Fi - 64GB - Space Gray',
        label:'',
        price:'$279.99',
        sale:'$379.99',
    },
    {
        image:'./media/5.png',
        name:'Apple - 10.2-Inch iPad (Latest Model) with Wi-Fi - 64GB - Space Gray',
        label:'Starting at',
        price:'$279.99',
        sale:'',
    },
    {
        image:'./media/1.png',
        name:'Samsung - 65" Class 7 Series LED 4K UHD Smart Tizen TV',
        label:'',
        price:'$449.99',
        sale:'$549.99',
    },
    
]

var trending= [
    {
        image:'./media/1.png',
        name:'MacBook Pro 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD',
        label:'',
        price:'$949.99',
        sale:'$1,299.99',

    },
    {
        image:'./media/2.png',
        name:'Apple - AirPods Pro (with Magsafe Charging Case) - White',
        label:'',
        price:'$179.99',
        sale:'$219.99',
    },
    {
        image:'./media/3.png',
        name:'HP - ENVY x360 2-in-1 15.6" Touch-Screen Laptop - AMD Ryzen 5 - 8GB Memory',
        label:'',
        price:'$499.99',
        sale:'$699.99',
    },
    {
        image:'./media/4.png',
        name:'Apple - 10.2-Inch iPad (Latest Model) with Wi-Fi - 64GB - Space Gray',
        label:'',
        price:'$279.99',
        sale:'$379.99',
    },
    {
        image:'./media/5.png',
        name:'Apple - 10.2-Inch iPad (Latest Model) with Wi-Fi - 64GB - Space Gray',
        label:'Starting at',
        price:'$279.99',
        sale:'',
    },
    {
        image:'./media/1.png',
        name:'Samsung - 65" Class 7 Series LED 4K UHD Smart Tizen TV',
        label:'',
        price:'$449.99',
        sale:'$549.99',
    },
    
]
products.map(function(el,i){
    let imge = document.createElement('img')
    imge.setAttribute('src',el.image)

    let prod_name = document.createElement('p')
    prod_name.innerText=el.name

    let prod_label = document.createElement('p')
    prod_label.innerText=el.label

    let prod_price = document.createElement('h6')
    prod_price.innerText=el.price

    let sale_price = document.createElement('p')
    sale_price.innerText=el.sale

    let maindiv = document.createElement('div')
    maindiv.append(imge,prod_name,prod_label,prod_price,sale_price)


    document.getElementById('container').append(maindiv)
})

trending.map(function(ele,i){
    let imges = document.createElement('img')
    imges.setAttribute('src',ele.image)

    let prod_names = document.createElement('p')
    prod_names.innerText=ele.name

    let prod_labels = document.createElement('p')
    prod_labels.innerText=ele.label

    let prod_prices = document.createElement('h6')
    prod_prices.innerText=ele.price

    let sale_prices = document.createElement('p')
    sale_prices.innerText=ele.sale

    let maindiv = document.createElement('div')
    maindiv.append(imges,prod_names,prod_labels,prod_prices,sale_prices)

    document.getElementById('trends').append(maindiv)
})