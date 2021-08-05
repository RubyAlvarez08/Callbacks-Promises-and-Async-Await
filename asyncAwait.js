let stocks = {
    Fruits: ['strawberry', 'grapes', 'bananna', 'apple'],
    Liquid: ['water', 'ice'],
    Holder: ['cone', 'cup', 'stick'],
    Toppings: ['chocolate', 'peanuts']
}

let is_shop_open = false;

function time(ms) {
    return new Promise((resolve, reject) =>{
        if(is_shop_open) {
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log('Shop is closed'))
        }
    })
}

async function kitchen () {
    try{
        await time(2000)
            console.log(`${stocks.Fruits[0]} was selected`)
    }
    catch(error){
        console.log('Costumer left', error)
    }
    finally{
        console.log("Day ended, shop closed")
      }
}
kitchen();