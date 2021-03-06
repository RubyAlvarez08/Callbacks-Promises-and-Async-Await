let stocks = {
    Fruits: ['strawberry', 'grapes', 'bananna', 'apple'],
    Liquid: ['water', 'ice'],
    Holder: ['cone', 'cup', 'stick'],
    Toppings: ['chocolate', 'peanuts']
}

let is_shop_open = false;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work())
            }, time)
        }
        else {
            reject(console.log('Our shop is closed'))
        }
    })
}
order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
    .then(() => {
        return order(0000, () => console.log('production has started'))
    })
    .then(() => {
        return order(2000, () => console.log('The fruits has been chopped'))
    })
    .then(() => {
        return order(1000, () => console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} added`))
    })
    .then(() => {
        return order(1000, () => console.log('start the machine'))
    })
    .then(() => {
        return order(2000, () => console.log(`ice cream placced on ${stocks.Holder[1]}`))
    })
    .then(() => {
        return order(3000, () => console.log(`${stocks.Toppings[1]} as toppings`))
    })
    .then(() => {
        return order(2000, () => console.log('Serve ice cream'))
    })
    .catch(() =>{
        console.log('customer left')
    })
    .finally(()=>{
        console.log("end of day")
      }) 