var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

console.log("Financial Analysis");
console.log("----------------------------");

// 1. Total number of months in dataset
let totalMonths = finances.length
console.log("Total Months:", finances.length);
document.getElementById("totalMonths").innerHTML = "Total Months: " + totalMonths


// 2. Total amount of profit/losses in dataset
let financialChanges = 0
 for (let i = 0; i < finances.length; i++) {
    //  console.log(finances[i][1]);
     financialChanges += finances[i][1];
}
console.log("Total profit/loss:", financialChanges);
document.getElementById("totalSum").innerHTML = "Total profit/loss: $" + financialChanges


// // Find average of profit/loss dataset
let totalChange = 0
for (let i = 1; i < finances.length; i++) {
    monthlyChange = finances[i][1] - finances[i - 1][1];
    totalChange += monthlyChange;
}
// console.log(totalChange);
let averageMoney = totalChange / finances.length;
averageMoney = Math.round(averageMoney * 100)/100
console.log("Average Change: $" + averageMoney);
document.getElementById("averageChange").innerHTML = "Average Change: $" + averageMoney

// Find max and min profit
let newList = [] //create new array for only numbers
for (let i = 0; i < finances.length; i++) {
    if (finances[i][1]) {
        newList.push(finances[i][1])
    };
    }
 
    // Identify the corresponding index in finance array and match max and min to them
    theMax = (Math.max(...newList))
    for (let y = 0; y < finances.length; y++) {
        if (theMax === finances[y][1]) {
            console.log("Greatest Increase in Profits: " + finances[y][0] + " $" + "(" + theMax + ")");
            }
            document.getElementById("greatestIncrease").innerHTML = "Greatest Increase in Profits: " + finances[y][0] + " $" + "(" + theMax + ")";
     }

    theMin = (Math.min(...newList))
// console.log(theMin);
 for (let x = 0; x < finances.length; x++) {
    if (theMin === finances[x][1]) {
        console.log("Greatest Decrease in Profits: " + finances[x][0] + " $" + "(" + theMin + ")");
        }
        document.getElementById("greatestDecrease").innerHTML = "Greatest Decrease in Profits: " + finances[x][0] + " $" + "(" + theMin + ")";
 }
    