// CODE HERE
function Greet(names) {
    if (names.length == 0) {
        return "Hello, my friend.";
    }
    names = names.flatMap(name => name.split(',').map(n => n.trim()));
    normalNames = [];
    shoutingNames = [];
    for (let i = 0; i < names.length; i++) {
        if (names[i] == names[i].toUpperCase()) {
            shoutingNames.push(names[i]);
        }
        else normalNames.push(names[i]);
    }
    if (shoutingNames.length != 0) {
        if (normalNames.length == 0) {
            return ShoutingGreet(shoutingNames);
        }
        else {
            return NormalGreeting(normalNames)+" "+ShoutingGreet(shoutingNames);
        }
    }
    else {
       return NormalGreeting(names);
    }
}

function ShoutingGreet(names) {
    if (names.length == 1) {
        return "HELLO " + names + "!";
    }
    else {
        s = "HELLO ";
        for (let i = 0; i < names.length - 1; i++) {
            s += names[i];
            if (i != names.length - 2) s += ", ";
        }
        s += " AND " + names[names.length - 1] + "!";
        return s
    }
}

function NormalGreeting(names) {
        if (names.length == 1) {
            return "Hello " + names + ".";
        }
        else {
            s = "Hello ";
            for (let i = 0; i < names.length - 1; i++) {
                s += names[i];
                if (i != names.length - 2) s += ", ";
            }
            s += " and " + names[names.length - 1] + ".";
            return s
        }
}
module.exports = Greet;