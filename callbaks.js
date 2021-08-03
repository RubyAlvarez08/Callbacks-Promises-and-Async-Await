let stocks = {
    Fruits: ['strawberry', 'grapes', 'bananna', 'apple'],
    Liquid: ['water', 'ice'],
    Holder: ['cone', 'cup', 'stick'],
    Toppings: ['chocolate', 'peanuts']
}

let order = (fruit_name, call_production) => {
    setTimeout(function () {
        console.log(`${stocks.Fruits[fruit_name]} was selected`)
        //Order placed. call production to start
        call_production();
    }, 2000)
}
let production = () => {
    setTimeout(() => {
        console.log('production has started')
        setTimeout(() => {
            console.log('The fruits has been chopped')
            setTimeout(() => {
                console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} added`)
                setTimeout(() => {
                    console.log('Start the machine')
                    setTimeout(() => {
                        console.log(` Ice cream placed on ${stocks.Holder[1]}`)
                        setTimeout(() => {
                            console.log(`${stocks.Toppings[0]} as topping`)
                            setTimeout(() => {
                                console.log('serve Ice Cream')
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0000)
}
order(2, production)