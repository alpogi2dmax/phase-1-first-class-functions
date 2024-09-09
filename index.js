function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    function namedFunction(name) {
        return name;
    }
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
        
    }
}