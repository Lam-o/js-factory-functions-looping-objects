//const createOutfit = function() {
    //const outfit = {
        //shirt: "green",
        //pants: "blue",
        //isNew: false,
        //showOff: function() {
            //this.isNew = true;
            //console.log("Show-off your brand new outfit !");
        //}
    //};
    //return outfit;
//};
//console.log(createOutfit());

//const tuesday = createOutfit();
//tuesday.shirt = "white";
//tuesday.pants = "black";

//console.log(tuesday);
//console.log(createOutfit);

//ENHANCING FACTORY FUNCTION WITH PARAMETERS

const createOutfit = function(shirt,pants) {
    const outfit = {
        shirt: shirt,
        pants: pants,
        isNew: false,
        showOff: function() {
            this.isNew = true;
            console.log("Show-off your brand new outfit !");
        }
    };
    return outfit;
};

const tuesday = createOutfit("white","black");
//console.log(tuesday);

const wednesday = createOutfit("pink","grey");
//console.log(wednesday);

const thursday = createOutfit("green","red");
//console.log(thursday);

const friday = createOutfit("black-T","bluejeans");
//console.log(friday);

//LOOPING OVER OBJECTS

for (let key in tuesday) {
    //console.log(key);
}

//LOOPING THROUGH VALUES ONLY

for (let key in tuesday) {
    //console.log(tuesday [key]);
}

//LOOP THROUGH KEYS AND VALUES

for (let key in tuesday) {
    //console.log(key, tuesday [key]);
}

//LOOP THROUGH MULTIPLE OBJECTS

const outfitArray = [tuesday,friday];
for (let outfit of outfitArray) {
    //console.log(outfit);
}

//COMBINATION FOR..OF AND FOR...IN

for (let outfit of outfitArray) {
    for (let key in outfit) {
        console.log(key,outfit[key]);
    }
}





