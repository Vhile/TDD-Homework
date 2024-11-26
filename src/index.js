// CODE HERE
function Greet(names){
    if (names.length == 0) {
        return "Hello, my friend.";
    }
    if (names.length == 1) {
        if (names[0] == names[0].toUpperCase()) {
            return "HELLO "+names+"!";
        }
        return "Hello "+names+".";
    }
    else {
        s = "Hello ";
        for (let i = 0; i < names.length-1; i++) {
            s += names[i];
            if (i != names.length-2) s += ", ";
        }
        s += " and "+names[names.length-1]+".";
        if (names[0] == names[0].toUpperCase()) {
            s = s.toUpperCase().replace(".", "!");
        }
        return s
    }
}
module.exports = Greet;