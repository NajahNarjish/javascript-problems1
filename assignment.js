//feetToMile
function feetToMile(feet) {    
    if (feet < 0) {
        return "Distance can't be negative.";
    } else {
        var milePerFeet = 0.00018939394;
        var miles = feet*milePerFeet;
        if (miles >= 1) {
            var bigMiles = parseFloat(miles.toFixed(3));
            return bigMiles;
        } else {
            return miles;
        }   
    }   
}

//wood calculator
function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        return "Amount can't be negative.";
    } else {
    var woodRequired = 0;
    var cubicFeetWoodPerChair = 1;
    var cubicFeetWoodPerTable = 3;
    var cubicFeetWoodPerBed = 5;

    woodRequired = (chair * cubicFeetWoodPerChair)
                    +(table * cubicFeetWoodPerTable)
                    +(bed * cubicFeetWoodPerBed);
    return woodRequired;
    }   
}

//brickCalculator
function brickCalculator(floor) {
    if(isNaN(floor)) {
        return "Sorry, please input a number!";
    }
    var floorUpTo10;
    var floor11to20;
    var floorAbove20;

    var brickPerFoot = 1000;
    var feetPerFloorUpto10 = 15;
    var brickPerFloorUpto10 = feetPerFloorUpto10 * brickPerFoot;

    var feetPerFloor11to20 = 12;
    var brickPerFloor11to20 = feetPerFloor11to20 * brickPerFoot;

    var feetPerFloorAbove20 = 10;
    var brickPerFloorAbove20 = feetPerFloorAbove20 * brickPerFoot;

    if (floor < 0) {
        return "Sorry, we will count positive floor numbers only. Thanks."
        
    } else if(floor<=10) {
        floorUpTo10 = floor;
        floor11to20 = 0;
        floorAbove20 = 0;
    } else if(floor<=20) {
        floorUpTo10 = 10;
        floor11to20 = floor-floorUpTo10;
        floorAbove20 = 0;
    } else {
        floorUpTo10 = 10;
        floor11to20 = 10; 
        floorAbove20 = floor-20;    
    }
    var totalBrickRequired =  (floorUpTo10*brickPerFloorUpto10)
                            + (floor11to20*brickPerFloor11to20) 
                            + (floorAbove20*brickPerFloorAbove20);
    return totalBrickRequired;
}

//tinyFriend
function tinyFriend(myFriends) {
    var newMyFriends = [];
    for(var i = 0; i < myFriends.length ; i++) {
        if (myFriends[i].trim().length > 0) {
            newMyFriends.push(myFriends[i].trim());
        }
    }
    if (newMyFriends.length == 0) {
        return "Sorry, there are no valid names!"
    }

    var tinyName =  newMyFriends[0];
    for(var i=0; i<newMyFriends.length; i++) {
        var currentName = newMyFriends[i];
        if (currentName.length < tinyName.length) {
            tinyName = currentName;
        }
    }
    return tinyName;   
}
