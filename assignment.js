
// Question No-1 (Convert Kilometer to Meter)
function kilometerToMeter(kilometer){
    var meter = kilometer*1000;     // We know: 1 kilometer = 1000 meter
    return meter;
}

var result = kilometerToMeter(10);
console.log(result);


// Question No-2 (Budget Calculator)

function budgetCalculator(watch, phone, laptop) {

    var budgetForWatch = watch * 50;         //total budget for Watch:We know, watch price 50
    var budgetForMobile = phone * 100;       //total Budget for Mobile:we know, mobile price 100
    var budgetForLaptop = laptop * 500;      //total Budget for Laptop:we know, laptop price 500
    var totalBudgetNeeded = budgetForWatch + budgetForMobile + budgetForLaptop;
    return totalBudgetNeeded;
}

var result = budgetCalculator(1,1,3);
console.log(result);


// Question-03 (Hotel Cost Calculators)
function hotelCost(days) {
    var cost = 0;
    if (days <= 10) {
        cost += days * 100;                       
    }
    else if (days > 10 && days <= 20) {
      var firstTenDay=10*100;
      var nextTenDay=days-10;
      var secondTenDay=nextTenDay*80;
      cost=firstTenDay+secondTenDay;
    }
    else {
        firstTenDay=10*100;
        secondTenDay=10*80;
        var nextTenDay=days-20;
        var thirdTenDay=nextTenDay*50;
        cost=firstTenDay+secondTenDay+thirdTenDay;
    }
             
    return cost;
}
var output = hotelCost(22);
console.log(output);




// Question No-04 (Mega Friend Name)
function megaFriend(friendName){
    var largest = friendName[0];
    for (i = 0; i < friendName.length; i++){
        var largeName = friendName[i];
        if (largeName.length > largest.length){
            largest = largeName;
        }
    }
    return largest;
}
var output = megaFriend(["Imran", "Masum", "Sumon","Sowrob","Rabbi","Robiullah"]);
console.log( output)
