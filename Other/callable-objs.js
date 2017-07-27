function name() {
    var fullname = "Quinten Warren";
    var dogName = "Dino";
    var poop = function (){
        return dogName + " is pooping.";
    }
    function concat(name){
        return "Mr." + name;
    }
    return poop();
}

console.log(name());



function name( fullname ){
    return fullname.firstname + " " + fullname.lastname;
}

console.log(name( {firstname: "Quinten", lastname:"Warren"} ));
