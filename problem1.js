
//Assumptions Made

// Zero is no Profit
// The question wasn't that clear as to what value was being returned 
// So the function returns {buying and selling day and profit}, where profit is maximum

const getMaxProfitDays = (stock) => {

    let r = []

    if (stock.length <= 1) return -1

    for (i = 0; i < stock.length; i++) {

        //Find numbers after the selected value
        let nStock = stock.slice(i + 1)

        if (nStock.length < 1) break;

        //Find largest number
        let max = Math.max(...nStock)

        let buying_day = i;
        let selling_day = stock.findIndex(s => s === max)
        let profit = parseInt(max) - parseInt(stock[i])

        r.push({ buying_day, selling_day, profit })

    }

    // Find Maximum profit
    let best_day = r.reduce((prev, curr) => prev?.profit > curr?.profit ? prev : curr)

    // If No profit possible, return -1. 
    if (best_day?.profit < 1) return -1

    return best_day

}

let values = [200, 1, 5, 6, 7, 34, 10];

console.log(getMaxProfitDays(values))