// task- 1

function kilometerToMeter(kilometer) {
    if (typeof kilometer != 'number') {
        console.log('insert a valid number please');
    }
    else{
        let meter = kilometer * 1000 ;
        return meter;
    }
}

// task - 2 

function budgetCalculator(ghoriCount, phoneCount, laptopCount) {
    if (typeof (ghoriCount && phoneCount && laptopCount) != 'number') {
        console.log('insert the number of ghori, phone and laptop you bought');
    }
    else{
        let totalGhoriCost = ghoriCount * 50;
        let totalPhoneCost = phoneCount * 100;
        let totalLaptopCost = laptopCount * 500;
        let totalCalculatorCost = totalGhoriCost + totalPhoneCost + totalLaptopCost;
        return totalCalculatorCost;
    }
}

// task - 3

function hotelCost(days) {
    let totalHotelCost = 0;
    if (days <= 10) {
        totalHotelCost = days * 100;
    } 
    else if (days <= 20){
        totalHotelCost = ( 10 * 100 )+((days - 10) * 80);
    }
    else {
        totalHotelCost = (10 * 100) + (10 * 80 ) + ((days - 20) * 50);
    }

    return totalHotelCost;
}

// task - 4 


function megaFriend(arr) {
    let bigName = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > bigName.length) {
            bigName = arr[i];
        }
    }
    return bigName;
}
