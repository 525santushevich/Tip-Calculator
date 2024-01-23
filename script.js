function calculateAndDisplay() {
    //Get input vaues from html forms
    let bill = parseFloat(document.getElementById('totalBill').value)
    let numOfPpl = parseFloat(document.getElementById('numOfPeople').value)
    let serviceQuality = document.getElementById('serviceQuality').value

    //Calculate tip, total bill, and amount per person with helper functions
    let tip = calculateTip(bill, serviceQuality)
    let totalBill = calculateTotalBill(bill, tip)
    let amtPerPers = calculateAmtPerPers(totalBill, numOfPpl)

    //Display results in html document
    document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
    document.getElementById('totalBillResult').innerText =
        'Total: $' + totalBill.toFixed(2)
    document.getElementById('amtPerPersonResult').innerText =
        'Amount Per Person: $' + amtPerPers.toFixed(2)
}

//Helper function to calculate tip based on bill and service quality
function calculateTip(bill, quality) {
    if(quality === 'Great') {
        return bill * .20
    } else if (quality === 'Good') {
        return bill * .15
    } else if (quality === 'Poor') {
        return bill * .10
    } else {
        return 0
  }
}

//Helper function to calculate total bill by adding orginal bill and tip
function calculateTotalBill(bill, tip) {
    return bill + tip
}

//Helper function to calculate amount per person by dividing total bill by number of people
function calculateAmtPerPers(totalBill, numOfPpl) {
    return totalBill / numOfPpl
}