function spinner(value) {

    var currValue = value;

    var increment = function(n) {

        currValue += n;
        console.log('currentValue = ' + currValue);
    };

    var decrement = function(step) {

        currValue -= n;
        console.log('currentValue = ' + currValue);
    }

    return {increment: increment,
            decrement: decrement};
}

var myCount = spinner(0); //myCount  refers to the object returned by spinner

myCount.increment(1); 
myCount.increment(2);
