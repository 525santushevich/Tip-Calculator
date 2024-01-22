function calculateAndDisplay()
{
    //Get input vaues from html forms
    let bill = parseFloat(document.getElementById('totalBill').value)
    let numOfPpl = parseFloat(document.getElementById('numOfPeople').value)
    let serviceQuality = parseFloat(document.getElementById('serviceQuality').value)

    //Calculate tip, total bill, and amount per person with helper functions
    let tip = calculateTip(bill, serviceQuality)
    let totalBill = calculateTotalBill(bill, tip)
    let amtPerPers = calculateAmtPerPrs(totalBill, numOfPpl)

    //Display results in html document
    document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
    document.getElementById('totalBillResult').innerText =
        'Total: $' + totalBill.toFixed(2)
    document.getElementById('amtPerPersonResult').innerText =
        'Amount Per Person: $' + amtPerPers.toFixed(2)

}




/* let bill = 120
let numOfPpl = 5
let serviceQuality = 'Great'

function calculateTip(quality) {
    if(quality === 'Great'){
        return bill * .20
    } else if (quality === 'Good'){
        return bill * .15
    }else if (quality === 'Poor'){
        return bill * .10
    }else {
        //alert("Please enter a valid value")
    }
}

let tip = calculateTip(serviceQuality)

function calculateTotalBill(bill, tip){
    return bill + tip
}

let totalBill = calculateTotalBill(bill, tip)

function calcAmtPerPrs(TotalBill, numOfPpl){
    return totalBill / numOfPpl
}

let amtPerPers = calcAmtPerPrs(totalBill, numOfPpl)

console.log('Tip: $' + tip)
console.log('Total Bill: S' + totalBill)
console.log('Amount per prson: $' + amtPerPers) */