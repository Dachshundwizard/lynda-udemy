function name() {
    var fullname = "Quinten Warren";
    function concat(name){
        return "Mr." + name;
    }
    return concat(fullname);
}

console.log(name());
